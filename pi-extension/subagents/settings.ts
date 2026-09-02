import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

/**
 * Model configuration for a single agent role.
 */
export interface AgentModelConfig {
 provider?: string;
 id?: string;
 thinking?: string;
 temperature?: number;
}

/**
 * Full settings.json schema for the subagents extension.
 */
export interface SubagentSettings {
 defaultAgent?: string;
 subagents?: {
  [role: string]: AgentModelConfig;
 };
}

const SETTINGS_FILENAME = "settings.json";

/**
 * Find settings.json by walking up from cwd looking for .pi/settings.json,
 * then falling back to the global agent config dir.
 *
 * Search order:
 *   1. <cwd>/settings.json
 *   2. <cwd>/.pi/settings.json
 *   3. ~/.pi/agent/settings.json (global)
 */
function findSettingsPaths(cwd: string): string[] {
 return [
  join(cwd, SETTINGS_FILENAME),
  join(cwd, ".pi", SETTINGS_FILENAME),
  join(
   process.env.PI_CODING_AGENT_DIR ??
    join(process.env.HOME ?? "/tmp", ".pi", "agent"),
   SETTINGS_FILENAME,
  ),
 ];
}

/**
 * Load subagent settings from the first settings.json found.
 * Returns empty object if none found or on parse error.
 */
export function loadSubagentSettings(cwd?: string): SubagentSettings {
 const searchDir = cwd ?? process.cwd();
 const paths = findSettingsPaths(searchDir);

 for (const p of paths) {
  if (!existsSync(p)) continue;
  try {
   const raw = readFileSync(p, "utf8");
   const parsed = JSON.parse(raw);
   // Only return if it has a subagents key
   if (parsed && typeof parsed === "object" && "subagents" in parsed) {
    return parsed as SubagentSettings;
   }
  } catch {
   // Malformed JSON — skip and try next
  }
 }

 return {};
}

/**
 * Resolve model config for a specific agent role.
 *
 * Resolution order:
 *   1. settings.json subagents.<role> (centralized)
 *   2. Agent .md frontmatter model/thinking (per-agent)
 *   3. Built-in defaults
 *
 * Returns the merged model string (e.g. "openrouter/z-ai/glm-5.3:medium")
 * or undefined if no model is configured.
 */
export function resolveModelConfig(
 role: string,
 frontmatterModel?: string,
 frontmatterThinking?: string,
 cwd?: string,
): { model?: string; thinking?: string; temperature?: number } {
 const settings = loadSubagentSettings(cwd);
 const agentConfig = settings.subagents?.[role];

 // Model: settings.json takes precedence over frontmatter
 const model = agentConfig?.id
  ? agentConfig.provider
   ? `${agentConfig.provider}/${agentConfig.id}`
   : agentConfig.id
  : frontmatterModel;

 // Thinking: settings.json takes precedence over frontmatter
 const thinking = agentConfig?.thinking ?? frontmatterThinking;

 // Temperature: only from settings.json (not in frontmatter)
 const temperature = agentConfig?.temperature;

 return { model, thinking, temperature };
}

/**
 * Get the full model string for spawning (model:thinking format).
 */
export function buildModelString(
 model?: string,
 thinking?: string,
): string | undefined {
 if (!model) return undefined;
 return thinking ? `${model}:${thinking}` : model;
}

/**
 * Get the default agent name from settings.json.
 * When set, the subagent tool injects this agent when none is specified.
 */
export function getDefaultAgent(cwd?: string): string | undefined {
 const settings = loadSubagentSettings(cwd);
 return settings.defaultAgent;
}

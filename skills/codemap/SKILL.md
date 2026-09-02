---
name: codemap
description: Generate comprehensive hierarchical codemaps for unfamiliar repositories
---

# Codemap Skill

Generate comprehensive hierarchical codemaps for unfamiliar repositories.

## When to Use

- User asks to understand/map a repository
- User wants codebase documentation
- Starting work on an unfamiliar codebase

## Workflow

### Step 1: Check for Existing State

First, check if `.pi/codemap.json` exists in the repo root.

If it does not exist, check for legacy state at `.slim/cartography.json`.

If legacy state exists: move it to `.pi/codemap.json`, then continue with change detection.

If `.pi/codemap.json` exists: Skip to Step 3 (Detect Changes) - no need to re-initialize.

If neither file exists: Continue to Step 2 (Initialize).

### Step 2: Initialize (Only if no state exists)

1. **Scan the repository structure** — list all directories and key files
2. **Identify the tech stack** — languages, frameworks, build tools
3. **Create the root codemap** (Repository Atlas)
4. **Spawn fixer agents** to create per-directory codemaps
5. **Run update** to save state:

```bash
# Create .pi/codemap.json with initial state
```

### Step 3: Detect Changes (If state already exists)

1. **Run change detection** to see what changed:
   - Added files
   - Removed files
   - Modified files
   - Affected folders

2. **Only update affected codemaps** — spawn one fixer per affected folder
3. **Run update** to save new state

### Step 4: Finalize Repository Atlas (Root Codemap)

The root codemap (Repository Atlas) summarizes the entire repository:

```markdown
# Repository Atlas: <project-name>

## Project Responsibility
<One-paragraph summary of what this project does>

## System Entry Points
- `src/index.ts`: Plugin initialization
- `package.json`: Dependencies and scripts

## Directory Map (Aggregated)
| Directory | Responsibility | Detailed Map |
|-----------|---------------|--------------|
| `src/agents/` | Agent personalities and config | [View Map](src/agents/codemap.md) |
| `src/features/` | Core logic for tmux integration | [View Map](src/features/codemap.md) |
```

### Step 5: Register Codemap in AGENTS.md

Update AGENTS.md to reference the codemap:

```markdown
## Codemap
- Root: `.pi/codemap.json`
- Per-directory: `<dir>/codemap.md`
```

## Codemap Content Format

Each per-directory codemap should include:

```markdown
# src/<directory>/

## Responsibility
Define the specific role of this directory using standard software engineering terms.

## Design Patterns
Identify and name specific patterns used (e.g., "Observer", "Singleton", "Factory").

## Data & Control Flow
Explicitly trace how data enters and leaves the module.

## Integration Points
List dependencies and consumer modules.
```

## Example Codemap

```markdown
# src/agents/

## Responsibility
Defines agent personalities and manages their configuration lifecycle.

## Design
Each agent is a prompt + permission set. Config system uses:
- Default prompts (orchestrator.ts, explorer.ts, etc.)
- User overrides from ~/.config/opencode/oh-my-opencode-slim.json
- Permission wildcards for skill/MCP access control

## Flow
1. Plugin loads → calls getAgentConfigs()
2. Reads user config preset
3. Merges defaults with overrides
4. Applies permission rules (wildcard expansion)
5. Returns agent configs to OpenCode

## Integration
- Consumed by: Main plugin (src/index.ts)
- Depends on: Config loader, skills registry
```

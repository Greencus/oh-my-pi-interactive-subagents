---
name: reflect
description: Session analysis and workflow pattern discovery for creating reusable assets
---

# Reflect Skill

Session analysis and workflow pattern discovery for creating reusable assets.

## When to Use

- Review recent work broadly
- Find repeated workflow patterns
- Decide whether to create skills, agents, or config changes

## Core Contract

Reflect analyzes work patterns to identify opportunities for automation and reuse.

## Workflow

### 1. Inventory Existing Assets

Before looking for new patterns, understand what already exists:

- List current skills, agents, and config
- Note what's working well
- Identify gaps or pain points

### 2. Find Repeated Workflow Patterns

Look for repeated signals such as:

- The same command sequence appears across sessions
- The user repeatedly asks for the same review, setup, release, or debugging process
- The same manual research or context-gathering steps keep recurring
- The same specialist routing decision is repeatedly needed
- The same project-specific rule is repeatedly re-explained
- Repeated failures happen because an agent lacks a stable instruction, tool, or permission boundary

Strong candidates usually have at least two occurrences, stable inputs, a clear output, and a clear stopping condition.

### 3. Score Candidates

For each candidate pattern, score:

- **Frequency**: How often does this occur?
- **Complexity**: How many steps are involved?
- **Error-prone**: Does it often go wrong without automation?
- **Reusability**: Can it be used across projects?
- **Value**: How much time/effort would automation save?

### 4. Choose the Smallest Useful Form

Pick the right level of abstraction:

- **Skill**: A procedure that can be reused across projects
- **Agent**: A specialized role with specific tools and permissions
- **Config change**: A setting or preference that should persist

### 5. Propose Before Changing

Always propose the change before implementing:

- Show the user what you found
- Explain why it would be useful
- Ask for confirmation before creating

## Output Format

```
<patterns>
Pattern 1: <description>
  Occurrences: <count>
  Recommendation: <skill/agent/config>
  
Pattern 2: <description>
  Occurrences: <count>
  Recommendation: <skill/agent/config>
</patterns>
<proposal>
What to create and why
</proposal>
```

## Guardrails

- Don't create skills for one-off tasks
- Don't create agents for simple procedures
- Don't duplicate existing functionality
- Keep proposals focused and specific

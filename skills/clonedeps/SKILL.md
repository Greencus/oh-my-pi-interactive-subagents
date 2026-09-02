---
name: clonedeps
description: Clone important project dependency source code for local inspection
---

# Clonedeps Skill

Clone important project dependency source code into an ignored local workspace for inspection.

## When to Use

- User asks to clone dependencies
- Inspect dependency/source internals
- Understand SDK/framework behavior from source
- Debug library implementation details

## Workflow

### Step 1: Check Existing State

Check if `.pi/clonedeps.json` exists. If it does, show current state and ask if user wants to add more dependencies.

### Step 2: Ask Researcher for the Clone Plan

Ask the researcher agent to analyze dependencies and suggest which ones to clone:

- Core framework dependencies (e.g., React, Vue, Next.js)
- SDK dependencies used extensively
- Libraries with complex internals you need to understand
- Any dependency the user specifically mentioned

### Step 3: Verify and Confirm the Plan

Show the clone plan to the user:

- Repository URL
- Specific version/ref to clone
- Reason for cloning
- Expected disk usage

### Step 4: Update Ignore Files

Add `.pi/clonedeps/` to `.gitignore` and `.ignore`:

```gitignore
# .gitignore
.pi/clonedeps/
```

```gitignore
# .ignore
!.pi/clonedeps/
!.pi/clonedeps/**
```

### Step 5: Clone Sources Manually

Clone each dependency:

```bash
# Create the directory structure
mkdir -p .pi/clonedeps/repos/<org>__<repo>

# Clone with minimal depth
git clone --depth 1 --branch <tag> <url> .pi/clonedeps/repos/<org>__<repo>
```

### Step 6: Write Local State

Write `.pi/clonedeps.json` so future agents know what exists:

```json
{
  "version": "1.0.0",
  "updatedAt": "2026-01-01T00:00:00.000Z",
  "dependencies": [
    {
      "name": "@opencode-ai/plugin",
      "resolvedVersion": "1.3.17",
      "repoUrl": "https://github.com/opencode-ai/opencode.git",
      "ref": "v1.3.17",
      "path": ".pi/clonedeps/repos/opencode-ai__opencode",
      "packagePath": "packages/plugin",
      "reason": "Plugin API source used by the project"
    }
  ]
}
```

If a clone fails after earlier clones succeeded, still write state for the successful clones.

### Step 7: Register Dependency Source in AGENTS.md

Update AGENTS.md to reference cloned dependencies:

```markdown
## Cloned Dependencies
- State: `.pi/clonedeps.json`
- Location: `.pi/clonedeps/repos/`
```

## Cleanup

To remove cloned dependencies:

1. Delete `.pi/clonedeps/` directory
2. Delete `.pi/clonedeps.json`
3. Remove entries from `.gitignore` and `.ignore`

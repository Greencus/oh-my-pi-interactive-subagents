---
name: worktrees
description: Git worktree orchestration for parallel work streams
---

# Worktrees Orchestration Protocol

Git worktree orchestration for parallel work streams.

## Core Contract

Worktrees allow you to work on multiple branches simultaneously without stashing or committing incomplete work.

## When to Use vs. Not Use

### Use When

- Multiple independent features in parallel
- Experimental work that might be discarded
- Long-running changes that need isolation
- Need to keep main branch clean while working

### Do NOT Use When

- Making simple single-file changes
- Documentation updates
- Minor bug fixes
- Working in a git repository that is not fully initialized

## Safety Guidelines

### 1. Pre-Flight Checklist

Before creating a worktree:

- Ensure working directory is clean
- Ensure branch exists or will be created
- Check available disk space
- Verify git is properly configured

### 2. Mandatory User Confirmation

Always confirm with user before:

- Creating a new worktree
- Deleting a worktree
- Switching between worktrees

### 3. Ignore File Setup

Add worktree directories to `.gitignore`:

```gitignore
# Worktrees
.pi/worktrees/
```

## Workflow Guide

### Phase 1: Planning & Setup

1. Identify what work needs parallel isolation
2. Choose branch names
3. Decide worktree locations
4. Get user confirmation

### Phase 2: Execution & Delegation

1. Create worktrees:

   ```bash
   git worktree add <path> <branch>
   ```

2. Set up each worktree's environment
3. Delegate work to appropriate agents

### Phase 3: Integration & Validation

1. Monitor progress in each worktree
2. Validate changes as they complete
3. Resolve any conflicts early

### Phase 4: Cleanup & Pruning

1. Merge completed work
2. Remove worktrees:

   ```bash
   git worktree remove <path>
   ```

3. Clean up branches
4. Update documentation

## State Tracking

Track worktree state in `.pi/worktrees.json`:

```json
{
  "version": "1.0.0",
  "worktrees": [
    {
      "name": "feature-auth",
      "branch": "feature/auth",
      "path": ".pi/worktrees/feature-auth",
      "status": "active",
      "createdAt": "2026-01-01T00:00:00Z"
    }
  ]
}
```

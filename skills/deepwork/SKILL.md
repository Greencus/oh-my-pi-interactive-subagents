---
name: deepwork
description: Multi-phase deep work orchestration with planning, execution, and verification
---

# Deepwork Skill

Multi-phase deep work orchestration with planning, execution, and verification.

## When to Use

- Complex, multi-step tasks requiring planning
- Tasks that need oracle review at gates
- Work that benefits from persistent state tracking

## Core Contract

Deepwork is a structured workflow for complex tasks that need:

- Planning before execution
- Phase gates with review
- Persistent state tracking
- Verification at completion

## Setup and Deepwork State

### Deepwork File

Create a task-specific file such as:

```text
.pi/deepwork/<short-task-slug>.md
```

Before creating this file — and before planning or delegation — inspect the existing
`.gitignore` and `.ignore`. Add only missing entries and do not add duplicates:

```gitignore
# .gitignore
.pi/deepwork/
```

```gitignore
# .ignore
!.pi/deepwork/
!.pi/deepwork/**
```

These rules keep deepwork state git-local while allowing Pi to read it.

Do not follow a rigid template. Choose whatever markdown structure best fits the
work. The file only needs to remain useful as persistent session state and should
capture, as applicable:

- Current goal and understanding
- Researched, factual context from librarian to avoid oracle doing its own research
- Plan drafts, Oracle review budget/gates, and review notes
- Implementation phases and status
- Validation results
- Unresolved questions, blockers, and follow-ups

Update this file after major decisions, accepted research, reviews, phase
completions, validation results, and scope changes.

## Planning

1. **Understand the task** — read requirements, ask clarifying questions
2. **Break into phases** — identify logical units of work
3. **Identify dependencies** — which phases depend on others
4. **Set review gates** — where oracle should review before proceeding
5. **Write the plan** to the deepwork file

## Phase Execution

### Scheduler Discipline

- Execute one phase at a time
- Complete verification before moving to next phase
- Update deepwork file after each phase
- If blocked, document the blocker and move to next viable phase

## Phase Gate and Commit

At each phase gate:

1. Run assigned validation
2. Update deepwork file with results
3. If oracle review is needed, request it
4. Only proceed after gate passes

### Oracle Re-Reviews

When oracle review is required at a gate:

- Provide oracle with the deepwork file
- Include what was done and what's planned
- Ask for specific feedback on approach
- Record oracle's response in deepwork file

## Designer Handoff Guardrail

When handing off to designer:

- Include all relevant context in the task
- Specify what kind of design work is needed
- Set clear success criteria
- Designer should review before implementation proceeds

## Completion

When all phases are complete:

1. Run final validation
2. Update deepwork file with completion status
3. Summarize what was accomplished
4. Clean up temporary files if needed

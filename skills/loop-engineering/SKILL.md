---
name: loop-engineering
description: Runtime loop monitoring and orchestrator interview
---

# Loop Engineering Skill

Runtime loop monitoring and orchestrator interview.

## Grill (Orchestrator Interview)

The Grill is a structured interview process for the orchestrator:

### Purpose

- Understand current state
- Identify blockers
- Plan next steps
- Verify progress

### Interview Flow

1. **State Assessment**
   - What's currently running?
   - What's completed?
   - What's blocked?

2. **Blocker Identification**
   - What's preventing progress?
   - What resources are needed?
   - What decisions are pending?

3. **Next Steps Planning**
   - What should happen next?
   - Who should do it?
   - What are the success criteria?

4. **Progress Verification**
   - How will we know it's working?
   - What tests will verify?
   - What's the rollback plan?

## Loop Monitor

The Loop Monitor tracks the orchestration loop:

### Metrics

- Tasks started vs completed
- Average task duration
- Blocker frequency
- Retry rate

### Alerts

- Task stuck too long
- High failure rate
- Resource exhaustion
- Circular dependencies

### Actions

- Log observations
- Trigger escalations
- Suggest interventions
- Record patterns

## Integration

Loop Engineering integrates with:

- Orchestrator for decision making
- Fixer for implementation
- Oracle for review
- Explorer for codebase navigation

## Usage

When to use Loop Engineering:

- Complex multi-step workflows
- Long-running orchestration
- Need for continuous monitoring
- Patterns emerging from repeated work

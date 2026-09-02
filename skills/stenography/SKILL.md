---
name: stenography
description: Document codebase changes — record what changed, why, and the impact
---

# Stenography Skill

Maintain a running record of changes made to the codebase by AI agents.

The changelog is the persistent record of AI-assisted development activity. Use the current session context as the primary source for determining what was changed, why it was changed, and what the resulting impact was. Use repository tools when session context is insufficient to accurately determine the changes.

**Keep entries concise enough to remain useful as a long-term engineering record.**

For small changes, fields may be combined or omitted when the information is obvious. For larger changes, expand the description as necessary to preserve important implementation context.

The only file this skill is permitted to write to is `CHANGELOG.md` at the root of the project repository.

> **Do not** create, modify, delete, rename, or generate any other files as part of this skill.

## When to Use

- Use stenography whenever a stenographer subagent is deployed to update the codebase
- Do **not** create an entry for changes that were only proposed, discussed, or considered but not actually made

## Changelog First

At the beginning of work, inspect the root `CHANGELOG.md` when it exists.

Understand its:

- Existing structure
- Heading conventions
- Entry format
- Level of detail
- Ordering of entries
- Existing terminology

Preserve the established format whenever practical.

If `CHANGELOG.md` does not exist, create it at the repository root using a simple, readable Markdown format appropriate for recording ongoing AI-assisted code changes.

## Track Changes Through Context

Treat the current session context as the primary change record.

After making code changes, reconstruct the actual changes from the work performed during the session. Record the meaningful result rather than merely listing individual file edits.

Prefer describing:

- **What** changed
- **Why** it changed
- The important implementation details
- The user-visible or developer-visible impact
- Any relevant limitations, compatibility considerations, or follow-up concerns
- The relevant files involved

Do not invent details that cannot be established from the session or repository.

## Use Tools When Necessary

When session context is insufficient, inspect the repository to establish what actually changed.

Useful evidence includes:

- `git diff`
- `git status`
- Relevant source files
- Existing configuration
- Tests or build output
- Other repository metadata

Tool use is for observation and verification only.

> Except for updating the root `CHANGELOG.md`, do **not** write to the repository while performing this skill.

## Document Meaningful Changes

Focus on changes that explain the evolution of the codebase.

Good entries answer:

| Question | Description |
| ---------- | ------------- |
| **What changed?** | Describe the implementation or behavior that changed. |
| **Why?** | Explain the problem, goal, or reason for the change. |
| **Impact** | Explain what the change affects, fixes, enables, or potentially changes. |

Avoid noisy entries such as:

- "Changed a variable"
- "Edited a file"
- "Fixed code"
- "Updated function"

Prefer entries that preserve useful engineering context.

**Example:**

> Fixed Vulkan model initialization failing on Android by ensuring the selected Vulkan device is initialized before model execution. This prevents the backend from attempting inference against an unavailable device and allows the Quest runtime to reach model loading successfully.

## Group Related Changes

When several edits belong to the same logical task, document them as one coherent changelog entry rather than producing a separate entry for every file.

For example, a feature involving:

- A new API
- Supporting internal logic
- Configuration changes
- Tests

should normally be represented as **one feature entry** describing the overall change.

Separate entries when changes are genuinely unrelated.

## Preserve Chronology

Append new entries in chronological order according to the existing conventions of the changelog.

Do not rewrite or reorder historical entries unless the task explicitly requires correcting the changelog itself.

New entries should clearly distinguish recent AI-agent changes from historical project information when the existing changelog format permits it.

## Attribution

The changelog should make it clear that the recorded change was made by an AI agent when the project convention supports attribution.

Use concise attribution such as:

> **Author:** AI Agent

Do not attribute work to a human developer unless that attribution is explicitly established by the repository or session context.

## Avoid False Certainty

Only document what can actually be established.

Do **not** claim:

- Tests passed when they were not run
- A bug is completely fixed when that has not been established
- Performance improved without evidence
- Compatibility exists without verification
- A feature works in environments that were not tested

When verification is incomplete, state that clearly.

**Examples:**

- `Implemented; runtime verification remains pending.`
- `Build succeeds, but the behavior has not yet been tested on hardware.`
- `The root cause appears to be X; this remains unconfirmed.`

## Update the Changelog Promptly

After completing a meaningful code change, update `CHANGELOG.md` before considering the stenography task complete.

The changelog should describe the final state produced by the agent's work, not merely an intention to make a change.

When multiple related changes occur during one session, update the changelog with a coherent summary rather than waiting until details are likely to be forgotten.

## Output Format

Use the repository's existing format when one exists.

When no established format exists, use entries structured like this:

```markdown
## YYYY-MM-DD-HH-MM
Year>Month>Day>Hour>Minute

### <Change Title>

- **What:** <what changed>
- **Why:** <why the change was made>
- **Impact:** <important behavioral or architectural impact>
- **Verification:** <tests/checks performed, or state that verification is pending>
- **Author:** AI Agent


## Scope

Stenography is strictly scoped to:

- Observing codebase changes
- Understanding changes made during the current AI session
- Recording those changes
- Updating the root `CHANGELOG.md`

### Write Restriction

The skill has exactly **one** permitted write target:

> `CHANGELOG.md` at the root of the project repository.

Do **not** write to:

- Source files
- Tests
- Configuration files

## Completion Criteria

Stenography is complete when:

- The root CHANGELOG.md has been inspected.
- The meaningful code changes made by the AI agent have been identified.
- Related changes have been grouped coherently.
- The reason and impact of the changes have been recorded where known.
- The entry has been written to the root CHANGELOG.md.
- No other repository files have been modified by the stenography workflow

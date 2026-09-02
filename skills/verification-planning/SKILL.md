---
name: verification-planning
description: Build evidence paths for claims about code behavior
---

# Verification Planning

Build evidence paths for claims about code behavior.

## Build an Evidence Path

### 1. Frame the Claim

Start by clearly stating what you're claiming:

- What behavior are you asserting?
- Under what conditions?
- What would prove it wrong?

### 2. Design the Evidence Path

Plan how you'll prove the claim:

- What tests or checks will you run?
- What output will you look for?
- What constitutes success or failure?

### 3. Set a Verification Budget

Determine how much effort verification deserves:

- Critical path: thorough verification
- Nice-to-have: basic checks
- Experimental: minimal verification

### 4. Create a Verification Affordance When Needed

If existing tests don't cover the claim:

- Write a test that proves it
- Add logging that demonstrates it
- Create a script that verifies it

### 5. Research When the Path is Unknown

If you don't know how to verify:

- Look for existing test patterns
- Research how others verify similar behavior
- Ask for help if needed

### 6. Make the Path Runnable

Ensure verification can be executed:

- Tests are in the right location
- Scripts are executable
- Commands work as expected

### 7. Close the Evidence Path

Document what you've proven:

- What tests passed
- What evidence you gathered
- What remains uncertain

## Scope

Verification planning is scoped to:

- Code changes you've made or are reviewing
- Bugs you're debugging
- Features you're implementing
- Behavior you're documenting

## Example

**Claim**: "The auth middleware correctly validates JWT tokens"

**Evidence Path**:

1. Run existing auth tests
2. Add test for expired token rejection
3. Add test for invalid signature rejection
4. Add test for valid token acceptance
5. Run all tests and document results

**Verification Budget**: High (critical security path)

**Result**: All tests pass, claim verified

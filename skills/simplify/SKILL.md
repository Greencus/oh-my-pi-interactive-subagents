---
name: simplify
description: Code simplification following five key principles
---

# Code Simplification

## Overview

Code simplification skill that follows five key principles.

## When to Use

- After implementing features
- During code review
- When code feels complex
- When refactoring existing code

## The Five Principles

### 1. Preserve Behavior Exactly

- Never change what the code does
- Only change how it does it
- Verify behavior is identical before and after

### 2. Follow Project Conventions

- Match the existing code style
- Use the same patterns as surrounding code
- Don't introduce new conventions without good reason

### 3. Prefer Clarity Over Cleverness

- Simple code that anyone can understand
- Avoid tricks, one-liners, or "clever" solutions
- If you need to explain it, it's too complex

### 4. Maintain Balance

- Don't over-simplify to the point of duplication
- Don't under-simplify leaving obvious complexity
- Find the right level of abstraction

### 5. Scope to What Changed

- Only simplify code you're already touching
- Don't refactor unrelated code
- Keep changes focused and reviewable

## Process

### Step 1: Understand Before Touching

- Read the code thoroughly
- Understand what it does and why
- Identify the actual complexity (not just perceived)

### Step 2: Look for Simplification Opportunities

- Duplicate logic that could be extracted
- Unnecessary abstractions
- Overly complex control flow
- Dead code or unused parameters
- Confusing naming

### Step 3: Apply Changes Incrementally

- Make one simplification at a time
- Verify behavior after each change
- Don't combine multiple simplifications

### Step 4: Verify the Result

- Run tests if available
- Verify the code still does what it should
- Check that readability improved

## Guidance for This Repository

- Follow existing patterns
- Don't introduce new abstractions without good reason
- Keep changes small and focused

## Final-state Verification

- All tests pass (if applicable)
- Code is easier to read than before
- Behavior is unchanged
- No new complexity introduced

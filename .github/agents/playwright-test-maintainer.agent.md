---
name: playwright-test-maintainer
description: Maintain Playwright coverage from application changes without duplicating existing tests.
---

# Mission

Maintain the repository's Playwright test suite based on source-code changes.

## Source of truth

Inspect:

- git diff
- specs/
- tests/
- src/
- playwright.config.ts
- package.json

## Rules

### Existing tests

Never delete an existing passing test unless the tested behavior was intentionally removed.

Never create a duplicate test for an already-covered scenario.

### Changed behavior

When a changed implementation modifies behavior covered by an existing test:

1. Locate the existing test.
2. Determine whether its assertions/locators need updating.
3. Update only what is necessary.

### New behavior

When the diff introduces genuinely new user-visible behavior:

1. Create a corresponding test plan scenario.
2. Generate a new Playwright test.
3. Put it in the appropriate feature directory.
4. Use one scenario per file.

### Non-user-visible changes

Do not generate E2E tests for:

- formatting
- refactors with identical behavior
- internal implementation changes with no observable behavior
- dependency lockfile changes
- CI-only changes

## Change classification

For every changed file, classify the change as exactly one of:

1. user-visible behavior change
2. existing user-visible behavior modification
3. non-user-visible implementation change
4. test-only change
5. specification-only change
6. infrastructure/configuration change

Only categories 1 and 2 require application E2E coverage.

Never create a test solely because lines of code changed.

### Validation

After changes:

1. Run the generated tests.
2. Run the full Playwright suite.
3. If a test fails, determine whether the failure is caused by:
   - application behavior
   - selector
   - assertion
   - timing
   - test environment
4. Fix tests when appropriate.
5. Never modify application code merely to make a generated test pass.

### Safety

Only modify:

- tests/\*\*
- specs/\*\*

unless explicitly instructed otherwise.

## Forbidden modifications

Never modify:

- src/\*\*
- public/\*\*
- package.json
- pnpm-lock.yaml
- playwright.config.ts
- vite.config.ts
- GitHub Actions workflows
- secrets
- environment files

unless the workflow explicitly requests such a change.

### Failure policy

Never use test.fixme(), test.skip(), or test.describe.skip()
to hide a failure.

If a test cannot be repaired confidently:

- leave the test present
- report the failure
- fail the maintenance workflow

Before editing any tests, create a coverage decision for every
behaviorally relevant code change.

For each change record:

- changed file
- changed behavior
- existing test coverage
- affected test file
- decision: create / update / no-op
- reason

Only create Playwright E2E tests for externally observable behavior.

Do not create E2E tests merely for:
- helper functions
- constants
- internal state implementation
- renamed variables
- component refactors
- CSS refactors with no behavioral change
# Counter Feature Test Plan

## Application Overview

Test plan for the interactive counter on the React/Vite starter page. The counter begins at zero and increments by one each time it is activated.

## Test Scenarios

### 1. Counter

**Seed:** `tests/seed.spec.ts`

#### 1.1. Increment counter from the initial value

**File:** `tests/counter/increment-counter.spec.ts`

**Steps:**
  1. Open the application at the root URL from a fresh page state.
    - expect: The page loads successfully.
    - expect: A button named "Count is 0" is visible and enabled.
  2. Activate the counter button once.
    - expect: The button label changes to "Count is 1".
    - expect: No navigation occurs and the rest of the page remains visible.
  3. Activate the counter button four more times.
    - expect: The button label changes to "Count is 5".
    - expect: The displayed count equals the number of activations.

# Counter Feature Test Plan

## Application Overview

Test plan for the interactive counter on the React/Vite starter page. The counter begins at zero and changes by one each time an increment or decrement control is activated.

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

#### 1.2. Decrease counter from the initial value

**File:** `tests/counter/decrease-counter.spec.ts`

**Steps:**
  1. Open the application at the root URL from a fresh page state.
    - expect: The page loads successfully.
    - expect: A button named "Decrease Count" is visible and enabled.
    - expect: A button named "Count is 0" is visible.
  2. Activate the decrease button once.
    - expect: The button label changes to "Count is -1".
    - expect: No navigation occurs and the rest of the page remains visible.

#### 1.3. Reset the counter after changing its value

**File:** `tests/counter/reset-counter.spec.ts`

**Steps:**
  1. Open the application at the root URL from a fresh page state.
    - expect: A button named "Count is 0" is visible.
    - expect: A button named "Reset Count" is visible and enabled.
  2. Activate the counter button three times.
    - expect: The button label changes to "Count is 3".
  3. Activate the reset button.
    - expect: The button label changes to "Count is 0".
    - expect: The page remains visible and usable.

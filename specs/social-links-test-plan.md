# Social Links Test Plan

## Application Overview

Test plan for the Connect with us section and its Vite community links.

## Test Scenarios

### 1. Social Links

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify community links and destinations

**File:** `tests/social/social-links.spec.ts`

**Steps:**
  1. Open the application at the root URL from a fresh page state.
    - expect: A Connect with us section is visible.
    - expect: The section includes the text "Join the Vite community".
    - expect: Links labeled "GitHub", "Discord", "X.com", and "Bluesky" are visible and enabled.
  2. For each of the four community links, inspect its href and activate it in a new browsing context.
    - expect: GitHub points to the Vite GitHub repository.
    - expect: Discord points to the Vite chat site.
    - expect: X.com points to the Vite X profile.
    - expect: Bluesky points to the Vite Bluesky profile.
    - expect: Each link opens in a new browsing context and does not navigate the original application page.
  3. Reload the original application page after visiting the links.
    - expect: The page loads normally.
    - expect: All four community links are present again.
    - expect: No visited-link state prevents activation.

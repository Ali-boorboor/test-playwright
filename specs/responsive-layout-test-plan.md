# Responsive Layout Test Plan

## Application Overview

Test plan for the page shell, hero assets, responsive layout, and color-scheme presentation behavior.

## Test Scenarios

### 1. Responsive Layout

**Seed:** `tests/seed.spec.ts`

#### 1.1. Render the complete page in the default viewport

**File:** `tests/layout/default-render.spec.ts`

**Steps:**
  1. Open the application at the root URL from a fresh page state.
    - expect: The application loads without a blank or broken view.
    - expect: The hero image, React logo, and Vite logo render with their intended accessible image behavior.
    - expect: The Get started heading, counter, Documentation section, Connect with us section, divider markers, and bottom spacer are visible.

#### 1.2. Use the stacked mobile layout

**File:** `tests/layout/mobile-layout.spec.ts`

**Steps:**
  1. Open the application in a viewport narrower than 1024 CSS pixels.
    - expect: The Documentation and Connect with us sections stack vertically.
    - expect: The divider between the sections becomes horizontal rather than vertical.
    - expect: Social and documentation links wrap within the viewport without horizontal overflow.
    - expect: The counter remains visible, enabled, and usable.

#### 1.3. Use the two-column desktop layout

**File:** `tests/layout/desktop-layout.spec.ts`

**Steps:**
  1. Open the application in a viewport at least 1024 CSS pixels wide.
    - expect: Documentation and Connect with us appear side by side.
    - expect: The section content remains within the centered page shell.
    - expect: The page has no unintended horizontal scrollbar.

#### 1.4. Respect the system color scheme

**File:** `tests/layout/color-scheme.spec.ts`

**Steps:**
  1. Open the application with a light color-scheme preference.
    - expect: The light background, text, borders, and link styling are readable.
    - expect: All interactive controls remain distinguishable and usable.
  2. Open the application with a dark color-scheme preference.
    - expect: The dark background and text remain readable.
    - expect: The social icons remain visible against the dark theme.
    - expect: All interactive controls remain distinguishable and usable.

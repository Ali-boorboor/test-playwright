// spec: specs/counter-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Counter", () => {
  test("Decrease counter from the initial value", async ({ page }) => {
    // 1. Open the application at the root URL from a fresh page state.
    await page.goto("/");

    const decreaseButton = page.getByRole("button", { name: "Decrease Count" });
    await expect(decreaseButton).toBeVisible();
    await expect(decreaseButton).toBeEnabled();
    await expect(page.getByRole("button", { name: "Count is 0" })).toBeVisible();

    // 2. Activate the decrease button once.
    await decreaseButton.click();
    await expect(page.getByRole("button", { name: "Count is -1" })).toBeVisible();
  });
});

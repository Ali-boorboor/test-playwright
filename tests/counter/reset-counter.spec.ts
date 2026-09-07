// spec: specs/counter-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Counter", () => {
  test("Reset the counter after changing its value", async ({ page }) => {
    // 1. Open the application at the root URL from a fresh page state.
    await page.goto("/");

    const counter = page.getByRole("button", { name: "Count is 0" });
    const resetButton = page.getByRole("button", { name: "Reset Count" });
    await expect(counter).toBeVisible();
    await expect(resetButton).toBeVisible();
    await expect(resetButton).toBeEnabled();

    // 2. Activate the counter button three times.
    await counter.click();
    await page.getByRole("button", { name: "Count is 1" }).click();
    await page.getByRole("button", { name: "Count is 2" }).click();
    await expect(page.getByRole("button", { name: "Count is 3" })).toBeVisible();

    // 3. Activate the reset button.
    await resetButton.click();
    await expect(page.getByRole("button", { name: "Count is 0" })).toBeVisible();
    await expect(resetButton).toBeVisible();
  });
});

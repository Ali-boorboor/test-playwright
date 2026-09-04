// spec: specs/counter-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Counter", () => {
  test("Increment counter from the initial value", async ({ page }) => {
    // 1. Open the application at the root URL from a fresh page state.
    await page.goto("/");
    const counter = page.getByRole("button", { name: "Count is 0" });
    await expect(counter).toBeVisible();
    await expect(counter).toBeEnabled();

    // 2. Activate the counter button once.
    await counter.click();
    await expect(page.getByRole("button", { name: "Count is 1" })).toBeVisible();

    // 3. Activate the counter button four more times.
    const updatedCounter = page.getByRole("button", { name: "Count is 1" });
    await updatedCounter.click();
    await page.getByRole("button", { name: "Count is 2" }).click();
    await page.getByRole("button", { name: "Count is 3" }).click();
    await page.getByRole("button", { name: "Count is 4" }).click();
    await expect(page.getByRole("button", { name: "Count is 5" })).toBeVisible();
  });
});

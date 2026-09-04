// spec: specs/responsive-layout-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Responsive Layout", () => {
  test("Render the complete page in the default viewport", async ({ page }) => {
    // 1. Open the application at the root URL from a fresh page state.
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Get started" })).toBeVisible();
    await expect(page.getByRole("button", { name: /Count is 0/ })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Documentation" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Connect with us" })).toBeVisible();
    await expect(page.locator(".hero img")).toHaveCount(3);
    await expect(page.locator(".ticks")).toHaveCount(2);
    await expect(page.locator("#spacer")).toBeVisible();
  });
});

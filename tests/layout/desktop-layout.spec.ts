// spec: specs/responsive-layout-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Responsive Layout", () => {
  test("Use the two-column desktop layout", async ({ page }) => {
    // 1. Open the application in a viewport at least 1024 CSS pixels wide.
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");

    await expect(page.locator("#next-steps")).toHaveCSS("flex-direction", "row");
    await expect(page.locator("#docs")).toBeVisible();
    await expect(page.locator("#social")).toBeVisible();

    const rootBox = await page.locator("#root").boundingBox();
    expect(rootBox).not.toBeNull();
    expect(rootBox!.width).toBeGreaterThan(0);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const innerWidth = await page.evaluate(() => window.innerWidth);
    expect(scrollWidth).toBeLessThanOrEqual(innerWidth + 1);
  });
});

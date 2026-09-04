// spec: specs/responsive-layout-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from "@playwright/test";

test.describe("Responsive Layout", () => {
  test("Use the stacked mobile layout", async ({ page }) => {
    // 1. Open the application in a viewport narrower than 1024 CSS pixels.
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    await expect(page.locator("#next-steps")).toHaveCSS(
      "flex-direction",
      "column",
    );
    await expect(
      page.getByRole("button", { name: /Count is 0/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Count is 0/ }),
    ).toBeEnabled();
    await expect(page.locator("#docs")).toBeVisible();
    await expect(page.locator("#social")).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(() => {
      return (
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth
      );
    });

    expect(hasHorizontalOverflow).toBe(false);
  });
});

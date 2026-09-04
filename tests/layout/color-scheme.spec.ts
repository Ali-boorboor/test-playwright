// spec: specs/responsive-layout-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from "@playwright/test";

test.describe("Responsive Layout", () => {
  test("Respect the light color scheme", async ({ page }) => {
    // 1. Open the application with a light color-scheme preference.
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Get started" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /Count is 0/ }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "GitHub" })).toBeVisible();
  });

  test("Respect the dark color scheme", async ({ page }) => {
    // 2. Open the application with a dark color-scheme preference.
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Connect with us" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "GitHub" })).toBeVisible();
    const socialIcons = page.locator("#social .button-icon");
    await expect(socialIcons).toHaveCount(4);
    await expect(socialIcons.first()).toBeVisible();
  });
});

// spec: specs/social-links-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from "@playwright/test";

test.describe("Social Links", () => {
  test("Verify community links and destinations", async ({ page }) => {
    // 1. Open the application at the root URL from a fresh page state.
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Connect with us" }),
    ).toBeVisible();
    await expect(page.getByText("Join the Vite community")).toBeVisible();

    const expectedLinks = [
      { name: "GitHub", href: "https://github.com/vitejs/vite" },
      { name: "Discord", href: "https://chat.vite.dev/" },
      { name: "X.com", href: "https://x.com/vite_js" },
      { name: "Bluesky", href: "https://bsky.app/profile/vite.dev" },
    ];

    for (const linkInfo of expectedLinks) {
      const link = page.getByRole("link", { name: linkInfo.name });
      await expect(link).toHaveAttribute("href", linkInfo.href);
      await expect(link).toHaveAttribute("target", "_blank");
    }
  });
});

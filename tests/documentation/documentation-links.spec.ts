// spec: specs/documentation-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Documentation", () => {
  test("Verify documentation section content and destinations", async ({ page, context }) => {
    // 1. Open the application at the root URL from a fresh page state.
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Documentation" })).toBeVisible();
    await expect(page.getByText("Your questions, answered")).toBeVisible();

    const exploreVite = page.getByRole("link", { name: "Explore Vite" });
    const learnMore = page.getByRole("link", { name: "Learn more" });
    await expect(exploreVite).toBeVisible();
    await expect(learnMore).toBeVisible();
    await expect(exploreVite).toBeEnabled();
    await expect(learnMore).toBeEnabled();

    // 2. Inspect the "Explore Vite" link target and activate it.
    await expect(exploreVite).toHaveAttribute("href", "https://vite.dev/");
    await expect(exploreVite).toHaveAttribute("target", "_blank");
    const vitePagePromise = context.waitForEvent("page");
    await exploreVite.click();
    const vitePage = await vitePagePromise;
    await expect(vitePage).toHaveURL("https://vite.dev/");
    await vitePage.close();

    // 3. Inspect the "Learn more" link target and activate it.
    await expect(learnMore).toHaveAttribute("href", "https://react.dev/");
    await expect(learnMore).toHaveAttribute("target", "_blank");
    const reactPagePromise = context.waitForEvent("page");
    await learnMore.click();
    const reactPage = await reactPagePromise;
    await expect(reactPage).toHaveURL("https://react.dev/");
    await reactPage.close();

    // 4. Return focus to the application page and verify the Documentation links are still available.
    await expect(page.getByRole("heading", { name: "Documentation" })).toBeVisible();
    await expect(exploreVite).toBeVisible();
    await expect(learnMore).toBeVisible();
  });
});

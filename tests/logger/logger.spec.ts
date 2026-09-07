// spec: specs/logger-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Logger", () => {
  test("Log a message when the Logger control is activated", async ({ page }) => {
    // 1. Open the application at the root URL from a fresh page state.
    await page.goto("/");

    const logger = page.getByRole("button", { name: "Logger" });
    await expect(logger).toBeVisible();
    await expect(logger).toBeEnabled();

    // 2. Activate the Logger button.
    const consoleMessagePromise = page.waitForEvent("console");
    await logger.click();
    const consoleMessage = await consoleMessagePromise;
    expect(consoleMessage.type()).toBe("log");
    expect(consoleMessage.text()).toBe("logger log");
    await expect(logger).toBeVisible();
  });
});

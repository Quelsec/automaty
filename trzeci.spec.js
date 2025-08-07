
const { test, expect } = require("@playwright/test");
test('waiting', async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForSelector('h1');
  await expect(page.locator('h1')).toBeVisible();
});
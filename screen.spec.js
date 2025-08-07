const { test, expect } = require("@playwright/test");
test('making a screenshot', async ({ page }) => {
  await page.goto('https://google.com');
  await page.screenshot({ path: 'screen.png' });
});
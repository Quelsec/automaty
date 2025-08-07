const { test, expect } = require("@playwright/test");
test.use({ viewport: { width: 375, height: 667 } }); 
test('mobile view layout', async ({ page }) => {
  await page.goto('https://facebook.pl');
});

test('wait for cookies', async ({ page }) => {
  await page.goto('https://facebook.pl');
  await page.waitForSelector('button', {name:'Odrzuć opcjonalne pliki cookie'});
  await expect(page.locator('button', {name:'Odrzuć opcjonalne pliki cookie'})).toBeVisible();
});
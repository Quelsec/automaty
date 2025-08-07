const { test, expect } = require("@playwright/test");
test("logowanie do fb @slow", async ({ page }) => {
    await page.goto('https://www.facebook.pl/login.php/');
    await page.getByRole('button', {name: 'Odrzuć opcjonalne pliki cookie'}) .click();
    await page.getByPlaceholder("Adres e-mail lub numer telefonu") .fill("xxx");
    await page.getByPlaceholder("Hasło") .fill("xxx");
    await page.locator('button[name="login"]') .click();
});
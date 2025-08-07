import { test, expect } from '@playwright/test';

test('test @slow', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('button', { name: 'Decline optional cookies' }).click();
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('xxx');
  await page.getByTestId('royal-pass').click();
  await page.getByTestId('royal-pass').press('CapsLock');
  await page.getByTestId('royal-pass').fill('J');
  await page.getByTestId('royal-pass').press('CapsLock');
  await page.getByTestId('royal-pass').fill('xxx');
  await page.getByTestId('royal-login-button').click();
});
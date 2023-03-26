import { test, expect } from '@playwright/test';

test('new customer registration link to be visible', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.pause()
  await expect(page.getByRole('link', { name: 'Continue' })).toBeVisible()
});

test('email password to be visible', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.pause()
  await expect(page.getByPlaceholder('Password')).toBeVisible()
  await expect(page.getByPlaceholder('E-Mail Address')).toBeVisible()
});

test('forgotten password to be visible', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  await page.pause()
  await expect(page.getByRole('link', { name: 'Forgotten Password', exact: true })).toBeVisible()
});

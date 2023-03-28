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

test('dynamic element', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57');
  await page.mouse.wheel(0, 50)
  await page.getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC Touch HD HTC Touch HD' }).hover()
  await page.locator('button:nth-child(3)').first().click();
  await page.getByRole('button', { name: 'Increase quantity' }).click({clickCount: 5});
  await expect(page.getByRole("spinbutton", { name :'Qty' })).toHaveValue('6')
  await expect(page.locator('#image-gallery-212946').getByRole('link', { name: 'HTC Touch HD' })).toHaveCount(5)
  await page.pause()
});

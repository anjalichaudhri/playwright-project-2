//@ts-check

import { test, expect } from '@playwright/test';

test('OrangeHRM CodeGen', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('heading', { name: 'Dashboard' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'client brand banner' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page.getByRole('link', { name: 'client brand banner' })).toBeVisible();
});
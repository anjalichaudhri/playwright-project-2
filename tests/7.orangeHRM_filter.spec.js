import { test, expect } from '@playwright/test';

test('Filter the locators', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  
  await page.getByPlaceholder("Username").fill("admin");
  await page.waitForTimeout(10000);
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole('button', {name: 'Login'}).click();
  test.setTimeout(40000);
  await page.waitForTimeout(10000);

  // filter by text
  // await page.getByRole("listitem").filter({hasText: 'Leave'}).click();

  // filter by child descendent
  await page.getByRole("listitem").filter({has: page.getByRole("link", {name: 'Leave'})}).click();
  
});
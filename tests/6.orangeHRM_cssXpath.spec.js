import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  
  page.getByLabel('Password');

  await page.locator("xpath=//input[@name='username']").fill("Admin");
  // await page.locator("//input[@name='username']").fill("admin");
  await page.waitForTimeout(10000);
  await page.locator("css=input[placeholder='Password']").fill("admin123");
  await page.waitForTimeout(10000);
  await page.getByRole('button', {name: 'Login'}).click();
  // await page.waitForTimeout(10000);

  // await page.getByAltText("profile picture").click();
  // await page.getByText("logout").click();
});
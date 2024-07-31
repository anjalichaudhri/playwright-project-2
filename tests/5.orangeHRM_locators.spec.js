import { test, expect } from '@playwright/test';

test('Locators - microsoft locators', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  
  page.getByLabel('Password');

  await page.getByPlaceholder("Username").fill("admin");
  await page.waitForTimeout(10000);
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole('button', {name: 'Login'}).click();
  await page.waitForTimeout(10000);

  await page.getByAltText("profile picture").click();
  await page.getByText("logout").click();
});

// get by role - role can be heading, link, textbox, button, checkbox, table, list etc.

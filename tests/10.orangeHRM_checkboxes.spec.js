import { test, expect } from '@playwright/test';
// used this file for debugging purpose by using the trace viewer by simply adding the command --trace on in the script command to e
// to execute the files.
test('Filter the locators', async ({ page }) => {

  await page.goto("https://demoqa.com/automation-practice-form");
  
  await page.locator("css=label[for$='hobbies-checkbox-1']").click();
  await page.locator("css=label[for$='hobbies-checkbox-2']").check();
  await page.locator("css=label[for$='hobbies-checkbox-2']").uncheck();
  await page.locator("css=label[for$='hobbies-checkbox-3']").check();
  await page.locator("css=label[for$='hobbies-checkbox-3']").isChecked();
});
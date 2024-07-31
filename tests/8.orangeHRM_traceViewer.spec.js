import { test, expect } from '@playwright/test';
// used this file for debugging purpose by using the trace viewer by simply adding the command --trace on in the script command to e
// to execute the files.
test('Filter the locators', async ({ page, context }) => {
  await context.tracing.start({screenshots: true, snapshots:true});

  await page.goto("https://opensource-demo.orangehrmlive.com/");
  
  await page.getByPlaceholder("Username").fill("admin");
  await page.waitForTimeout(10000);
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole('button', {name: 'Login'}).click();
  // test.setTimeout(40000);
  await page.waitForTimeout(10000);

  // filter by text
  // await page.getByRole("listitem").filter({hasText: 'Leave'}).click();

  // filter by child descendent
  await page.getByRole("listitem").filter({has: page.getByRole("link", {name: 'Leave'})}).click();
  await context.tracing.stop({path: 'tracing.zip'});
});

test('Filter the locators 2', async ({ page, context }) => {
  await context.tracing.start({screenshots: true, snapshots:true});

  await page.goto("https://opensource-demo.orangehrmlive.com/");
  
  await page.getByPlaceholder("Username").fill("admin");
  
});
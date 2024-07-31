//@ts-check
// applied ts check
// this spec validates the title of the site.
import { expect, test } from "@playwright/test";

test("Validate Orange HRM Title", async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page).toHaveTitle(/OrangeHRM/);
})


// run the command to execute spec : npx playwright test orangeHRM_Title.spec.js --headed
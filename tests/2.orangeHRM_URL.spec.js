//@ts-check

import { expect, test } from "@playwright/test";

test("Validate the URL", async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    // the url must contain the orangehrmlive as part of url.
    await expect(page).toHaveURL(/.*orangehrmlive/);
    await expect(page).toHaveURL(/.*live/);
})

// run the command to execute spec : npx playwright test orangeHRM_Title.spec.js --headed
// to see the report: npx playwright show-report
// access report at localhost: http://localhost:9323/

// run tests in parallel
// add workers - more


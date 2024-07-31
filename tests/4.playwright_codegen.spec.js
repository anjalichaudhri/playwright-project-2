import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM0NTVqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Google Google https://www.' }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: 'Java', exact: true }).click();
  await page.getByRole('button', { name: 'Java' }).click();
  await page.getByRole('link', { name: 'Python' }).click();
  await page.getByRole('button', { name: 'Python' }).click();
  await page.getByRole('link', { name: 'Node.js' }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
  await page.getByRole('heading', { name: 'Installing PlaywrightDirect' }).click();
  await expect(page.getByText('init playwright@latest')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Generating tests' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Generating tests' })).toBeVisible();
  await page.getByRole('link', { name: 'Trace viewer' }).first().click();
  await page.getByRole('link', { name: 'Generating tests' }).click();
  await page.getByRole('link', { name: 'Running and debugging tests', exact: true }).click();
  await page.getByRole('link', { name: 'Docs' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
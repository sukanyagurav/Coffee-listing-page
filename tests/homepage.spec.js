import { test, expect } from '@playwright/test';

test.describe('homepage testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://coffeelisting5867.netlify.app/');
  });
  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Coffee Listing/i);
  });

  test('homepage loads', async ({ page }) => {
    await expect(page.locator('#heading')).toHaveText(/our collection/i);
  });
});

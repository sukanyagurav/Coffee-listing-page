import { test, expect } from '@playwright/test';

test.describe('checking tabs', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://coffeelisting5867.netlify.app/');
  });
  test('have 2 buttons', async ({ page }) => {
    const tabButtons = page.locator('#tabs button');
    await expect(tabButtons.nth(0)).toHaveText('All products');
    await expect(tabButtons.nth(1)).toHaveText('Available now');
  });
  
});

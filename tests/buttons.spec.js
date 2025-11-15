import { test, expect } from '@playwright/test';
const coffee_api =
  'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json';
const fakeProducts = [
  {
    id: 1,
    name: 'Chocolate Coffee',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg',
    price: '$4.00',
    rating: '4.65',
    votes: 122,
    popular: false,
    available: false,
  },
  {
    id: 2,
    name: 'Valentine Special',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/valentine-special.jpg',
    price: '$5.50',
    rating: null,
    votes: 0,
    popular: false,
    available: true,
  },
  {
    id: 3,
    name: 'House Coffee',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg',
    price: '$3.50',
    rating: 4.85,
    votes: 15,
    popular: true,
    available: true,
  },
];
test.describe('Coffee filtering test', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(coffee_api, async (route) => {
      const fakeResponse = fakeProducts;

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(fakeResponse),
      });
    });

    await page.goto('http://localhost:5173/');
  });
  test('All products tab shows all coffees', async ({ page }) => {
    const allProductBtn = page.locator('button', { hasText: 'All products' });
    await allProductBtn.click();
    const items = page.locator('#coffee_container .coffee-card');
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });
  test('Available now tab shows ONLY available coffees', async ({ page }) => {
    const availableNowBtn = page.locator('button', {
      hasText: 'Available now',
    });
    await availableNowBtn.click();

    const items = page.locator('#coffee_container .coffee-card');
    await expect(items).toHaveCount(2);
  });
  test.only('Unavailable items are hidden when on Available now tab',async({page})=>{
    const availableNowBtn = page.locator('button', {
      hasText: 'Available now',
    });
    await availableNowBtn.click();
    const soldOutProduct = page.locator('#coffee_container .coffee-card:has-text("Sold Out")');
    await expect(soldOutProduct).toHaveCount(0);
  })
});

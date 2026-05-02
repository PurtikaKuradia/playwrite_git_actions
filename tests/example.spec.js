const { test, expect } = require('@playwright/test');

test.describe('Wikipedia workflow tests', () => {
  test('homepage title includes Wikipedia', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await expect(page).toHaveTitle(/Wikipedia/);
  });

  test('search for Playwright returns Playwright page', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.locator('input[name="search"]').fill('Playwright');
    await page.locator('button.pure-button').click();
    await expect(page.locator('#firstHeading')).toContainText(/Playwright/);
  });

  test('English language portal loads correctly', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.locator('a#js-link-box-en').click();
    await expect(page).toHaveURL(/en\.wikipedia\.org/);
    await expect(page.locator('input[name="search"]')).toBeVisible();
  });

  test('footer contains Privacy policy link', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    const footer = page.locator('footer');
    await expect(footer).toContainText('Privacy policy');
  });

  test('search suggestions appear while typing', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.locator('input[name="search"]').click();
    await page.locator('input[name="search"]').fill('test automation');
    await expect(page.locator('.suggestions-dropdown')).toBeVisible();
  });
});

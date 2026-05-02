const { test, expect } = require('@playwright/test');

test.describe('workflow tests', () => {
  test('test', async ({ page }) => {
    await expect(10).toBe(10);
  });

});

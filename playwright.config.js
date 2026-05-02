const config = {
  testDir: './tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
};
module.exports = config;

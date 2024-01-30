import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests/ui/specs',
  fullyParallel: true,
  timeout: 3 * 60 * 1000,  
  use: {
    baseURL: "https://parabank.parasoft.com/parabank",
    headless: false,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 }
      },
    },
  ],
  expect: {
    timeout: 10000,

    toHaveScreenshot: {
      maxDiffPixels: 10,
    },

    toMatchSnapshot: {
      maxDiffPixelRatio: 0.1,
    },
  }
});
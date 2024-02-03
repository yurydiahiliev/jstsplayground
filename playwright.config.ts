import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests/ui/specs',
  fullyParallel: true,
  timeout: 3 * 60 * 1000,  
  use: {
    baseURL: "https://parabank.parasoft.com",
    headless: false,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    extraHTTPHeaders: {
      'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
    }
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
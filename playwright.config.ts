import {defineConfig, devices} from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests',
    timeout: 5_000,
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        trace: 'on-first-retry',
        video: 'on'
    },
    projects: [
        /* Test with a mobile viewport */
        {
            name: 'Mobile Chrome',
            use: {...devices['Pixel 7']},
        },
    ],
});

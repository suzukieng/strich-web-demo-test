import { defineConfig } from 'checkly'
import { Frequency } from 'checkly/constructs';

const config = defineConfig({
    logicalId: 'strich-web-demo-test',
    projectName: 'strich-web-demo-test',
    checks: {
        playwrightConfigPath: './playwright.config.ts',
        playwrightChecks: [
            {
                logicalId: 'strich-web-demo-test',
                name: 'Basic Scanning Test',
                testCommand: 'npx playwright test ',
                locations: [
                    'eu-central-1',
                ],
                frequency: Frequency.EVERY_24H, // a custom per-check frequency
            },
        ],
        frequency: Frequency.EVERY_24H, // a global default frequency
        locations: [
            'eu-central-1', // a global default location
        ],
        // include test-videos to test barcode scanning from camera
        include: '**/test-videos/*'
    },
    cli: {
        runLocation: 'eu-central-1', // where test and pw-test will run
    },
})

export default config

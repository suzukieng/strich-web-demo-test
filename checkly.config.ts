import {defineConfig} from 'checkly'
import {Frequency} from 'checkly/constructs'

export default defineConfig({
    projectName: 'strich-web-demo-test',
    logicalId: 'trich-web-demo-test',
    repoUrl: 'https://github.com/suzukieng/strich-web-demo-test',
    checks: {
        playwrightConfigPath: './playwright.config.ts',
        // include test-videos to test barcode scanning from camera
        include: '**/test-videos/*'
    },
    cli: {
        runLocation: 'eu-west-1',
        retries: 0
    }
})

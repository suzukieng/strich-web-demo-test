import {defineConfig} from 'checkly'
import {Frequency} from 'checkly/constructs'

export default defineConfig({
    projectName: 'strich-web-demo-test',
    logicalId: 'trich-web-demo-test',
    repoUrl: 'https://github.com/suzukieng/strich-web-demo-test',
    checks: {
        playwrightConfigPath: './playwright.config.ts',
    },
    cli: {
        runLocation: 'eu-west-1',
        retries: 0
    }
})

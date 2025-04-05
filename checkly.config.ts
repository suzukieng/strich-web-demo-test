import { defineConfig } from 'checkly'
import { Frequency } from 'checkly/constructs'

export default defineConfig({
 projectName: 'Website Monitoring',
 logicalId: 'website-monitoring-1',
 repoUrl: 'https://github.com/acme/website',
 checks: {
   activated: true,
   muted: false,
   runtimeId: '2022.10',
   frequency: Frequency.EVERY_5M,
   locations: ['us-east-1', 'eu-west-1'],
   tags: ['website', 'api'],
   checkMatch: '**/*.check.js',
   browserChecks: {
     frequency: Frequency.EVERY_10M,
     testMatch: 'browsers/**/*.spec.js',
   },
   multiStepChecks: {
     testMatch: 'multistep/**/*.spec.js',
   },
 },
 cli: {
   runLocation: 'eu-west-1',
   privateRunLocation: 'private-dc1'
 }
})

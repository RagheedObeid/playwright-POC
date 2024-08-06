// playwright.config.js
import { defineConfig } from 'playwright/test';

module.exports = defineConfig({
  webServer: {
    command: 'npm run serve',
    port: 8080,
    timeout: 120 * 1000,
    reuseExistingServer: true
  },
  use: {
    baseURL: 'http://localhost:8080',
  },
});

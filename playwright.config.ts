import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	use: {
		baseURL: 'http://127.0.0.1:4322',
		trace: 'retain-on-failure',
	},
	projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], colorScheme: 'light' } }],
	webServer: {
		command: 'pnpm preview --host 127.0.0.1 --port 4322 --ignore-lock',
		url: 'http://127.0.0.1:4322',
	},
});

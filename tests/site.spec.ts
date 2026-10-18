import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

for (const path of ['/', '/experience/', '/404.html']) {
	for (const colorScheme of ['light', 'dark'] as const) {
		test(`${path} loads accessibly in ${colorScheme} mode`, async ({ page }) => {
			await page.emulateMedia({ colorScheme });
			const response = await page.goto(path);
			expect(response?.status()).toBe(200);
			await expect(page.getByRole('main')).toBeVisible();
			await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
			await page.evaluate(() => document.fonts.ready);
			const results = await new AxeBuilder({ page }).analyze();
			expect(results.violations).toEqual([]);
		});
	}
}

test('navigation and theme preference survive page changes and reloads', async ({ page }) => {
	await page.goto('/');
	const html = page.locator('html');
	const toggle = page.getByRole('button', { name: 'Toggle colour theme' });
	await expect(html).toHaveAttribute('data-theme', 'light');
	await toggle.click();
	await expect(html).toHaveAttribute('data-theme', 'dark');
	await page.getByRole('navigation', { name: 'Main' }).getByRole('link', { name: 'Experience' }).click();
	await expect(page).toHaveURL('/experience/');
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('The road so far');
	await expect(html).toHaveAttribute('data-theme', 'dark');
	await page.reload();
	await expect(html).toHaveAttribute('data-theme', 'dark');
	await toggle.click();
	await expect(html).toHaveAttribute('data-theme', 'light');
});

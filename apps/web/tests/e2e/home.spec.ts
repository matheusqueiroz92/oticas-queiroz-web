import { expect, test } from '@playwright/test';

test('home page loads with hero', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Óticas Queiroz/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(
    page.getByRole('link', { name: /saúde visual|solicitar horário/i }).first(),
  ).toBeVisible();
});

test('navigation links are accessible by keyboard', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab'); // skip link
  await expect(page.getByRole('link', { name: /pular para o conteúdo/i })).toBeFocused();
});

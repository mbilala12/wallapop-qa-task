import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/');
  }

  // Uses the exact visible button text you used
  async rejectCookiesIfPresent() {
    const btn = this.page.getByRole('button', { name: 'Rechazar todo' });
    if (await btn.isVisible().catch(() => false)) {
      await btn.click();
    }
  }

  async openAuthDialog() {
    await this.page.getByRole('button', { name: 'Regístrate o inicia sesión' }).click();
  }
}

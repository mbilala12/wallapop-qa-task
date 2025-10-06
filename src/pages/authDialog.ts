// pages/AuthDialog.ts
import { Page, expect } from '@playwright/test';
import { dismissOneTrust } from '../utils/cookies';

export class AuthDialog {
  constructor(private page: Page) {}

  async clickIniciarSesion() {
    const btn = this.page.getByRole('button', { name: 'Iniciar sesión' });

    // clear banner right before the click
    await dismissOneTrust(this.page);
    await expect(btn).toBeVisible();
    await btn.scrollIntoViewIfNeeded();

    // probe for intercept; if blocked, dismiss and retry
    try {
      await btn.click({ trial: true, timeout: 1000 });
    } catch {
      await dismissOneTrust(this.page);
    }
    await btn.click(); // actual click
  }
}

// src/pages/LoginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async loginWithEmail(email: string, password: string) {
    // Match your working selectors exactly
    await this.page.getByText('Dirección de e-mail').click();
    await this.page.getByRole('textbox', { name: 'Dirección de e-mail' }).fill(email);

    await this.page.getByText('Contraseña', { exact: true }).click();
    await this.page.getByRole('textbox', { name: 'Contraseña' }).fill(password);

    await this.page.getByRole('button', { name: 'Acceder a Wallapop' }).click();
  }
}

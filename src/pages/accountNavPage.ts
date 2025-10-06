// src/pages/AccountNavPage.ts
import { Page } from '@playwright/test';

export class AccountNavPage {
  constructor(private page: Page) {}

  async openFromHeader() {
    await this.page.getByRole('link', { name: 'User avatar Tú' }).click();
  }

  async goToVacationMode() {
    await this.page.getByRole('link', { name: 'Nuevo Modo vacaciones' }).click();
  }
}

import { Page, expect } from '@playwright/test';

export class VacationModePage {
  constructor(private page: Page) {}
  private datepicker() {
    return this.page.locator('[data-testid="datepicker"], ngb-datepicker').first();
  }

  async toggleOn() {
    const track = this.page.locator('wallapop-toggle span').nth(2);
    await expect(track).toBeVisible();
    await track.click();
  }

  async pickDay(day: number) {
    const dp = this.datepicker();
    await expect(dp).toBeVisible();

    // Match by ARIA role + accessible name containing the day number.
    const cell = dp
      .getByRole('gridcell', { name: new RegExp(`\\b${day}\\b`) })
      .filter({
        hasNot: this.page.locator('[aria-disabled="true"], .disabled, .hidden'),
      })
      .first();

    await expect(cell).toBeVisible({ timeout: 7000 });
    await cell.scrollIntoViewIfNeeded();

    try {
      await cell.click({ timeout: 3000 });
    } catch {
      // If a row intercepts pointer events, force as last resort.
      await cell.click({ force: true });
    }
  }

  async confirm() {
    const btn = this.page.getByRole('button', { name: /confirmar|confirm/i }).first();
    await expect(btn).toBeEnabled({ timeout: 5000 });
    await btn.click();
  }

  async change() {
    const btn = this.page.getByRole('button', { name: /cambiar|change/i }).first();
    await expect(btn).toBeVisible();
    await btn.click();
  }

  async selectMonthByNumber(month1to12: number) {
    const select = this.page.getByLabel('Seleccionar mes');
    await expect(select).toBeVisible();
    await select.selectOption(String(month1to12));
  }
}

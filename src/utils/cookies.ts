// utils/cookies.ts
import { Page } from '@playwright/test';

export async function dismissOneTrust(page: Page) {
  //   const shell = page.locator('#onetrust-consent-sdk:visible, [role="dialog"]:has-text("Privacidad")');
  //   if (!(await shell.isVisible().catch(() => false))) return;

  //   const reject = page.locator('#onetrust-reject-all-handler, button:has-text("Rechazar todo")').first();
  //   const accept = page.locator('#onetrust-accept-btn-handler, button:has-text("Aceptar todo")').first();

  //   if (await reject.isVisible().catch(() => false)) {
  //     await reject.click({ timeout: 2000 });
  //   } else if (await accept.isVisible().catch(() => false)) {
  //     await accept.click({ timeout: 2000 });
  //   }

  //   // ensure overlay is gone before proceeding
  //   await expect(shell).toBeHidden({ timeout: 3000 });

  await page.getByRole('button', { name: 'Rechazar todo' }).click();
}

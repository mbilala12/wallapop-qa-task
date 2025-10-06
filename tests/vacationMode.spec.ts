import { test, expect } from '@playwright/test';
import { getTodayDay, getCurrentMonthNumber } from '../src/utils/helpers';
import { HomePage } from '../src/pages/homePage';
import { AuthDialog } from '../src/pages/authDialog';
import { LoginPage } from '../src/pages/loginPage';
import { AccountNavPage } from '../src/pages/accountNavPage';
import { VacationModePage } from '../src/pages/vacationModePage';
import creds from '../src/testData/users.json';

test('vacation mode e2e', async ({ page }) => {
  const { email, password } = creds.qa;
  const home = new HomePage(page);
  const auth = new AuthDialog(page);
  const login = new LoginPage(page);
  const account = new AccountNavPage(page);
  const vacation = new VacationModePage(page);

  await home.open();
  await home.rejectCookiesIfPresent();

  await home.openAuthDialog();
  await auth.clickIniciarSesion();

  await login.loginWithEmail(email, password);

  // ✅ Logged-in state: the “Tú” avatar link should be visible
  await expect(page.getByRole('link', { name: /tú/i })).toBeVisible();

  await account.openFromHeader();
  await account.goToVacationMode();

  // ✅ On the correct page
  await expect(page.getByRole('heading', { name: /modo vacaciones/i })).toBeVisible();

  await vacation.toggleOn();

  // ✅ Datepicker dialog is shown after toggling on
  const dialog = page.getByRole('dialog', { name: /finaliza a las 23:59/i });
  await expect(dialog).toBeVisible();

  // Pick today
  await vacation.pickDay(getTodayDay());
  await vacation.confirm();

  // ✅ Dialog closed and “Cambiar” action available (means vacation mode is active)
  await expect(dialog).toBeHidden();
  const changeBtn = page.getByRole('button', { name: /cambiar/i });
  await expect(changeBtn).toBeVisible();

  // Change date
  await vacation.change();
  await vacation.selectMonthByNumber(getCurrentMonthNumber()); // same-month change
  await page.getByText('9', { exact: true }).click();
  await vacation.confirm();

  // ✅ Dialog closed again after change
  await expect(dialog).toBeHidden();

  //disable vacation mode
  await page.locator('wallapop-toggle span').nth(2).click();

  // ✅ When disabled, “Cambiar” should disappear (or at least not be visible)
  await expect(changeBtn).toBeHidden();
});

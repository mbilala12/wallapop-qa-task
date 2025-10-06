# Wallapop E2E (Playwright + TypeScript)

End-to-end tests for the Wallapop vacation mode flow using a Page Object Model (POM).  
Includes robust locators, cookie-banner handling (OneTrust), test data via JSON, and ESLint.

## 📁 Project Structure

.
├─ src/
│ ├─ pages/
│ │ ├─ homePage.ts
│ │ ├─ authDialog.ts
│ │ ├─ loginPage.ts
│ │ ├─ accountNavPage.ts
│ │ └─ vacationModePage.ts
│ ├─ utils/
│ │ ├─ helpers.ts
│ │ └─ cookies.ts
│ └─ testData/
│ └─ users.json
├─ tests/
│ ├─ login.spec.ts
│ └─ vacationMode.spec.ts
├─ playwright.config.ts
├─ eslint.config.cjs
├─ package.json
└─ .github/
└─ workflows/
└─ ci.yml

## 🧰 Prerequisites

- Node.js **20+**
- Playwright browsers: `npx playwright install`

## ⚙️ Setup

```bash
npm ci
npx playwright install --with-deps

Environment

create .env file or rename .env.example and uncomment baseURL


Test Data

src/testData/users.json



▶️ Run
using scripts:
npm run test

All tests: npx playwright test

UI mode: npx playwright test --ui

Single file: npx playwright test tests/vacationMode.spec.ts

Headed for debugging: npx playwright test --headed

✅ Lint

Lint: npm run lint

Fix: npm run lint:fix


🧪 What’s Covered

Login via Auth dialog → “Iniciar sesión”

OneTrust cookie banner dismissal (role-based, works across renders)

Navigate to “Nuevo Modo vacaciones”

Enable vacation mode → pick date → confirm → change date → confirm

Disable vacation mode

Assertions favor role/name selectors and visible state, e.g.:

Avatar link Tú visible after login

Heading “Modo vacaciones” visible on target page

Dialog open/closed for datepicker actions

“Cambiar” visible only when vacation mode is active



🤖 CI (GitHub Actions)

/.github/workflows/playwright.yml runs:

npm ci

npx playwright install --with-deps

npm run lint

npx playwright test --project=chromium

Uploads the HTML report and traces as artifacts.

Optionally set BASE_URL as a repo Variable (Settings → Variables → Actions).
If not set, the tests use the default URL from code.



🧭 Conventions / Best Practices

Use POM classes to encapsulate flows.

Prefer getByRole/accessible-name selectors.

Assert visibility before actions where flakiness is likely.

Avoid page.evaluate; prefer DOM-level interactions.

OneTrust: always dismiss just before critical clicks.



Happy testing! 🚀
```

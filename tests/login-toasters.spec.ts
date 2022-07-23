import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login-page'

let loginPage: LoginPage

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page)
})

test('senha incorreta', async ({ page }) => {

  await loginPage.go()
  await loginPage.signIn('qa', 'error')

  const target = page.locator('.toast-message div[role=status]')
  await expect(target).toHaveText('Oops! Credenciais inválidas :(')

  //Temporario
  // await page.waitForTimeout(1500)
  // const contentPage = await page.content()

  // const fs = require('fs')
  // fs.writeFileSync('temp.html', contentPage)

});

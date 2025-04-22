// @ts-check
import { test, expect } from '@playwright/test';

// test('to have title',async ({page})=>{
//   await page.goto('https://sfcc.petfoodking.com/');
//   await expect(page).toHaveTitle(/Playwright/);
// })

test.use({
  httpCredentials:{
    username: "storefront",
    password: "fBYc2AZa9esN2b4C"
  }
});

test("Verify the Page Title", async({page})=>{
  await page.goto('https://sfcc.petfoodking.com/');
  const logo = page.locator('.logo-home');
  await expect(logo).toBeVisible();
})

test("Redirection to Sign In Page", async({page})=>{
  await page.goto('https://sfcc.petfoodking.com/');
  await page.hover(".user-text");
  await page.click('a[href="/signin"]');
  const loginPage = page.locator('.login-header');

  // await expect(page.url()).toContain("/signin");
  await expect(page.getByText('Existing Customer')).toBeVisible();
})

//   test("Verify that is able to login", async({page})=>{
//     await page.goto('https://sfcc.petfoodking.com/');
//     await page.hover(".user-text");
//     await page.click('a[href="/signin"]');
//     await page.locator('#login-form-email').fill('ntest23@gmail.com');
//     // email.fill('mansoor24test@gmail.com');
//     await page.locator('#login-form-password').fill('Admin@123');
//     page.locator('[title="login form"]').click();
//     await page.waitForTimeout(3000);
//     await expect(page.locator('.title-block')).toHaveText(/Welcome to Allivet!/);
// })

test("Verify that is able to login", async({page})=>{
      await page.goto('https://sfcc.fetchrxtest.com');
      await page.hover("#myaccount");
      await page.click('a[href="/signin"]');
      await page.fill('#login-form-email','ntest2@gmail.com');
      await page.fill('#login-form-password','Admin@123');
      await page.locator("button[title='login form']").click();
      await page.waitForTimeout(3000);
      await expect(page.locator("div[class='title-block']")).toHaveText(/We are happy to welcome you!/);
  })
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
  await page.goto('https://sfcc.fetchrxtest.com');
  const logo = page.locator(".logo-home.logo-desktop");
  await expect(logo).toBeVisible();
})

test("Redirection to Sign In Page", async({page})=>{
  await page.goto('https://sfcc.fetchrxtest.com');
  await page.hover("#myaccount");
  await page.click('a[href="/signin"]');
  const loginPageContent = page.locator('p[class="returning-customer"]');
  await expect(loginPageContent.getByText('Returning customer:')).toBeVisible();
})


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
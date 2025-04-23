import { test, expect } from '@playwright/test';


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

test("Verify login functionlity", async({page})=>{
      await page.goto('https://sfcc.fetchrxtest.com');
      await page.hover("#myaccount");
      await page.click('a[href="/signin"]');
      await page.fill('#login-form-email','ntest2@gmail.com');
      await page.fill('#login-form-password','Admin@123');
      await page.locator("button[title='login form']").click();
      await page.waitForTimeout(3000);
      await expect(page.locator("div[class='title-block']")).toHaveText(/We are happy to welcome you!/);
  })

test("Verify user can place an OTC order", async({page})=>{
  await page.goto("https://sfcc.fetchrxtest.com");
  await page.hover("#myaccount");
  await page.click('a[href="/signin"]');
  await page.fill('input[id="login-form-email"]', 'ntest2@gmail.com');
  await page.fill('input[id="login-form-password"]', 'Admin@123');
  await page.click('button[title="login form"]');
  await page.fill('input[id="search-results"]', "52592");
  await page.click("//a[@aria-label='Tomlyn Pill-Masker Cat, 4 oz']");
  await page.click("//span[@class='add-to-cart-label']");
  await page.click("//div[@class='cart-checkout-btn-wrapper']//a[@role='button'][normalize-space()='Checkout']");
  await page.click("//button[normalize-space()='Continue to payment method']");
  await page.click("//button[normalize-space()='Save and continue']");
  await page.click("//button[normalize-space()='Place order >']");
  await expect(page.locator('h2[normalize-space()="Thank you for your order!"]')).toBeVisible(); 
})

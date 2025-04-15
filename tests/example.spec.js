// @ts-check
import { test, expect } from '@playwright/test';

// test('to have title',async ({page})=>{
//   await page.goto('https://sfcc.petfoodking.com/');
//   await expect(page).toHaveTitle(/Playwright/);
// })

test.use({
  httpCredentials:{
    username: "storefront",
    password: "KATUjwEny4Nya29u"
  }
});

test("Verify the Page Title", async({page})=>{
  await page.goto('https://sfcc.petfoodking.com/');
  const logo = page.locator('.logo-home');
  await expect(logo).toBeVisible();
})

test("Redirection to SIgn In Page", async({page})=>{
  await page.goto('https://sfcc.petfoodking.com/');
  await page.hover(".user-text");
  await page.click('a[href="/signin"]');
  const loginPage = page.locator('.login-header');
  // use one of the below assertion 
  await expect(page.url()).toContain("/signin");
  // await expect(page.getByText('Existing Customer')).toBeVisible();

})



// test("click on Get Started button", async({page})=>{
//   await page.goto('https://playwright.dev/');
//   await page.getByRole('link',{name: 'Get Started'}).click();
//   await expect(page.getByRole('heading',{name: 'Installation'})).toBeVisible();
// })

// test("click on .NET link", async({page})=>{
//   await page.goto('https://playwright.dev/');
//   await page.getByRole('link',{name: '.NET'}).click();
// })

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

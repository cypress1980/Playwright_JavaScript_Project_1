// @ts-check
const { test, expect } = require("@playwright/test");

test("Open the site 'qaautomationlabs.com 'and verify the title and Click on Menu Blogs", async ({
  page,
}) => {
  await page.goto("https://qaautomationlabs.com/");
  await expect(page).toHaveTitle(/About Us - QAAutomationLabs/);
  const blogs = page.locator("//span[text()='Blogs']");
  await blogs.last().click();
});

test("Serach the Blog with text 'Playwright  ", async ({ page }) => {
  await page.goto("https://qaautomationlabs.com/");
  const blogs = page.locator("//span[text()='Blogs']");
  const search = page.locator("id=wp-block-search__input-2");
  const searchIcon = page.locator("id=search-icon");
  await blogs.last().click();
  await search.type("Playwright");
  await searchIcon.click();
});
test.only("Login into https://www.saucedemo.com/ and logout  ", async ({
  page,
}) => {
  await page.goto("https://www.saucedemo.com/");
  const userName = page.locator("id=user-name");
  const password = page.locator("id=password");
  const submitButton = page.locator("id=login-button");
  const humBurger = page.locator("id=react-burger-menu-btn");
  const logout = page.locator("id=logout_sidebar_link");
  await userName.click();
  await userName.type("standard_user");
  await password.click();
  await password.type("secret_sauce");
  await submitButton.click();
  await humBurger.click();
  await logout.click();
});

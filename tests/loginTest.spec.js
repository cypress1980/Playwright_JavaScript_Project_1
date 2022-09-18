// @ts-check
const { test, expect } = require("@playwright/test");

test("Login into www.saucedemo and logout  ", async ({ page }) => {
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

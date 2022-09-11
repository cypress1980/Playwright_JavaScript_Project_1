// @ts-check
const { test, expect } = require("@playwright/test");

test("Open the site and verify the title and Click on Menu Blogs", async ({
  page,
}) => {
  await page.goto("https://qaautomationlabs.com/");
  await expect(page).toHaveTitle(/About Us - QAAutomationLabs/);
  const blogs = page.locator("//span[text()='Blogs']");
  await blogs.last().click();
});

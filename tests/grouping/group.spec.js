import { test, expect } from '@playwright/test';
let username="student";
let password="Password123";
test.describe('Smoke Tests', () => {
    test('Login test', async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/');
        await page.locator("#username").fill(username);
        await page.locator("#password").fill(password);
        await page.getByRole('button',{name:'Submit'}).click();
    });

    test('Dashboard test', async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/');
        await expect(page.locator("h2")).toHaveText("Test login");
    });
});

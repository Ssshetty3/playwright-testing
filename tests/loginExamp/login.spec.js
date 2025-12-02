const {test, expect}=require("@playwright/test");

test('Login', async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    //let title= await page.title();
    //console.log(title);

    let username="student";
    let password="Password123";

    await page.locator("#username").fill(username);
    await page.locator("#password").fill(password);
    await page.getByRole('button',{name:'Submit'}).click();

})




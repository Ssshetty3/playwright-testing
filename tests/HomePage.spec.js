//test is used to define individual test cases.
//expect is used for assertions to verify if the actual results match expected results.
const {test, expect}=require("@playwright/test");

//Home Page - defined as test named
//page represents a single browser tab or window passed in anouymnous functionalmost 
// all the commands you use to interact with a webpage—like navigating, clicking, typing, 
// reading text, taking screenshots—are methods of the page object.. - like driver in selenium
test('Home Page',async({page})=>{
    await page.goto("https://www.google.com/");
    let title=await page.title();
    console.log(title);

})

test('practice', async({page})=>{
    await page.goto("https://www.gmail.com/");
    let title=await page.title();
    console.log(title);
})






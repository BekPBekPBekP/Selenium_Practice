require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");


describe("jordan react selenium test 2", function () { 
    this.timeout(40_000);


it.skip("button should + 1 to the value in the counter when pressed", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/testing/ex2");

        for(let i=0; i<5; i++){
        const search = await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)")).click();
        }
        const result = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
        expect(await result.getAttribute("value")).to.equal("5");
    } finally {
        await driver.quit();
    }
    },)

})
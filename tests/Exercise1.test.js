require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");


describe("jordan react selenium tests", function () { 
    this.timeout(40_000);


it.skip("should multiply miles value by 1.6 to get km value", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/testing/ex1");
        const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
        await search.sendKeys("10");
        const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
        expect(await result.getAttribute("value")).to.equal("16");
    } finally {
        await driver.quit();
    }
    },)

it.skip("should divide km value by 1.6 to get miles value", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/testing/ex1");
        const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
        await search.sendKeys("16");
        const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
        expect(await result.getAttribute("value")).to.equal("10");
        
} finally {
    await driver.quit();
}
})
})
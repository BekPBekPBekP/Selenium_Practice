require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");


describe("jordan react selenium test 3", function () {
    this.timeout(40_000);

it("should find Interstellar film", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://localhost:3000/testing/ex3");
        const search = await driver.findElement(By.id("filmTitle"));
        await search.sendKeys("Interstellar");
        await driver.findElement(By.css("#root > div > div.container > form > div > div > button")).click();
        const result = await driver.findElement(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > div > div"));
        expect(await result.getText()).to.equal("Interstellar");
} finally {
    await driver.quit();
}
});






})
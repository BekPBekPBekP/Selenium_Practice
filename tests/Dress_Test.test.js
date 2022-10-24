require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");


describe("selenium practice tests", function () {
    this.timeout(30_000);

it.skip("should find dress", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
        await driver.get("http://automationpractice.com/index.php?");
        const search = await driver.findElement(By.id("search_query_top"));
        await search.sendKeys("dress");
        await driver.findElement(By.name("submit_search")).click();
        const result = await driver.findElement(By.css("#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a"));
        expect(await result.getText()).to.equal("Printed Summer Dress");
} finally {
    await driver.quit();
}
});







})
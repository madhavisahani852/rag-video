const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
    });

    console.log("Browser launched");

    const page = await browser.newPage();

    await page.goto("https://example.com");

    console.log(await page.title());

    await browser.close();
})();
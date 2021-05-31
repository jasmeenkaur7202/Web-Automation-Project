const puppy = require("puppeteer");
const mb_No = "9773880758";
const pass = "april@2021";
const productName = "Sling Bag";

async function main() {
    let browser = await puppy.launch({
        headless : false,
        defaultViewport : false,
        args: ["--start-maximized"]
    });

    let tabs = await browser.pages(); //create a new page
    let tab = tabs[0];
    //await page.setDefaultNavigationTimeout(0);  // configure the navigation timeout
    await tab.goto("https://www.flipkart.com/", {
        waitUntil : 'networkidle2',
        timeout : 0
    });
    await tab.type("._2IX_2-.VJZDxU", mb_No);
    await tab.type("._2IX_2-._3mctLh.VJZDxU", pass);
    await tab.click("._2KpZ6l._2HKlqd._3AWRsL");
    await tab.type("._3704LK", productName);
    await tab.keyboard.press("Enter");
    await tab.waitForSelector("._1YAKP4 ._2YxCDZ",{visible : true});
    await tab.select("._1YAKP4 ._2YxCDZ", "1000");
    
    //Filter for Choosing a Brand
    await tab.waitForSelector("._2gmUFU._3V8rao", {visible: true});
    let brandFilter = await tab.$$("._2gmUFU._3V8rao");
    brandFilter[0].click();

    await tab.waitForSelector("._2pBqj6 ._34uFYj", {visible: true});
    await tab.type("._34uFYj", "Baggit"); //typing brandname in the Search box
    await tab.waitForSelector("._24_Dny", {visible: true});
    let brandName = await tab.$$eval("._24_Dny", checkboxes => {
        checkboxes.forEach(chbox => chbox.click());
    });

    await tab.waitForSelector("._2w_U27._2fYv1H", {visible: true});
    let showFilter = await tab.$("._2w_U27._2fYv1H");
    await showFilter.click();
    
    await tab.waitForSelector("._10UF8M", {visible: true});
    let priceLowToHigh = await tab.$$("._10UF8M"); //clicking on priceLowToHigh
    await priceLowToHigh[2].click();

    //clicking on that sling bag
    await tab.waitForSelector("._312yBx.SFzpgZ", {visible: true});
    let slingBagButton = await tab.$$("._312yBx.SFzpgZ");
    slingBagButton[2].click();
   
    await tab.goto("https://www.flipkart.com/baggit-tan-black-sling-bag/p/itm3bf3fdd5646ad?pid=SLBFHPPAGP4SDHAQ&lid=LSTSLBFHPPAGP4SDHAQSHI6KV&marketplace=FLIPKART&q=Sling+Bag&store=reh%2Fihu%2Fmf2&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=133d63a0-8a65-4c18-a001-7cbb02249240.SLBFHPPAGP4SDHAQ.SEARCH&ppt=sp&ppn=sp&ssid=pbx6ay5nog0000001618418420518&qH=8486f7a3d56a5fe5");
    await tab.waitForSelector("._1AtVbE.col-12-12 ._2KpZ6l._2U9uOA.ihZ75k._3AWRsL");
    await tab.click("._2KpZ6l._2U9uOA.ihZ75k._3AWRsL"); //clicking on BUY NOW

    await tab.waitForSelector(".McovBK #to-payment",{visible: true});
    await tab.click(".McovBK #to-payment"); //clicking on CONTINUE

    await tab.waitForSelector("._3Pt-f4 ._2KpZ6l.qhlwny._3AWRsL", {visible: true});
    await tab.click("._3Pt-f4 ._2KpZ6l.qhlwny._3AWRsL");

    // await tab.waitForSelector("._24_Dny", {visible: true});
    // let brandName = await tab.$$eval("._24_Dny", checkboxes => {
    //     checkboxes.forEach(chbox => chbox.click());
    // });
    
}

main();
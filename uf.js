import puppeteer from "puppeteer";

async function precioUF(){
    const browser = await puppeteer.launch({
        headless: false,
        // slowMode: 200
    })
    const page = await browser.newPage()

    await page.goto('https://valoruf.cl/')
    const result = await page.evaluate(() => {
        const uf = document.querySelector("body > div > div.container > div:nth-child(1) > div > span.vpr").innerText
        return{
            uf: uf
        }
    })
    console.log(result)

    await browser.close()
}
precioUF();
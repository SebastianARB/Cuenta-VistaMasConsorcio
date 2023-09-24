const puppeteer = require("puppeteer");
const fs = require("fs").promises;

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto("https://www.ufaldia.cl/");

    const precioUf = await page.evaluate(() => {
      const items = document.querySelectorAll('[id="vlr-dolar"]');
      const arr = [];

      for (let item of items) {
        const uf = {};
        uf.name = item.querySelector('[id="valor_uf"]').innerText;

        arr.push(uf);
      }
      return arr;
    });

    await browser.close();

    const jsonData = JSON.stringify(precioUf, null, 2);
    await fs.writeFile("precioUf.json", jsonData);
    console.log("Datos guardados en precioUf.json");
  } catch (error) {
    console.error("Error:", error);
  }
})();

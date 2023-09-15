const puppeteer = require("puppeteer");
const fs = require("fs").promises; // Importa el módulo fs para trabajar con archivos con promesas

(async () => {
  try {
    // Iniciar el navegador
    const browser = await puppeteer.launch({
      headless: false, // Muestra el navegador en pantalla
      defaultViewport: null, // Usa la configuración de vista predeterminada
    });

    // Abrir una nueva página
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 }); // Puedes ajustar el ancho y alto según tus necesidades
    await page.goto("https://www.ufaldia.cl/");

    // Recopilar datos
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

    // Cerrar el navegador
    await browser.close();

    // Guardar los datos en un archivo JSON
    const jsonData = JSON.stringify(precioUf, null, 2); // Formatea con sangría
    await fs.writeFile("precioUf.json", jsonData);
    console.log("Datos guardados en precioUf.json");

    // Cargar los datos JSON en el HTML
    const response = await fs.readFile("precioUf.json", "utf8");
    const data = JSON.parse(response);

    const valorUf = document.getElementById('getPrecioUF');
    // Suponemos que el valor de la UF se encuentra en el primer objeto del JSON
    const valorUF = parseFloat(data[0].name.replace(',', '.')).toFixed(3);
    valorUf.textContent = valorUF; // Actualizamos el contenido del elemento con el valor de la UF

  } catch (error) {
    console.error("Error:", error);
  }
})();

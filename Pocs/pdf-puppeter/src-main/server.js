// Criando servidor
import express, { response } from "express";
import ejs from "ejs";
import path, { format } from "path";
import { fileURLToPath } from "url";
import pdf from "html-pdf";
import puppeteer from "puppeteer";
import fs from "fs";
const app = express();

// Deixando o browser aberto até que o servidor seja encerrado
let browser;

// Caso o headless esteja como true, ele vai abrir o navegador de forma oculta
(async () => {
  browser = await puppeteer.launch({ headless: false });
})();

// import.meta.url -> Importa o caminho da URL atual
// fileURLPath -> converte a URL para um caminho de arquivo
// path.dirname() -> extrai o diretório do arquivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const passengers = [
  {
    name: "Joyce",
    flightNumber: 7859,
    time: "18h00",
  },
  {
    name: "Brock",
    flightNumber: 7859,
    time: "18h00",
  },
  {
    name: "Eve",
    flightNumber: 7859,
    time: "18h00",
  },
];

// Essa arrow function será executada ao entrarmos no caminho especificado no primeiro parâmetro
// request e response é o segredo de ao entrarmos fazemos um pedido e logo recebemos uma resposta
app.get("/", async (request, response) => {
  // dirname está oculta porque é como se estivessemos executando tudo dentro de uma função e ela está como parâmetro
  // Na real, no ES Modules isso não funciona, então tive que colocar no código
  const filePath = path.join(__dirname, "print.ejs");
  ejs.renderFile(filePath, { passengers }, async (err, html) => {
    if (err) return response.send("Erro na leitura do arquivo");

    return response.send(html);
    return response.send("Gerou o pdf, eu espero!");

    // Configurando o pdf para html-pdf
    // const options = {
    //   height: "11.25in",
    //   width: "8.5in",
    //   header: {
    //     height: "20mm",
    //   },
    //   footer: {
    //     height: "20mm",
    //   },
    // };
    // criar pdf
    // pdf.create(html, options).toFile("report.pdf", (err, data) => {
    //   if (err) return response.send("Erro ao gerar o PDF");

    //   // enviar para o navegador
    //   return response.send("Arquivo gerado com sucesso!");
    // });
  });
});

app.get("/request-pdf", async (req, res) => {
  const filePath = path.join(__dirname, "print.ejs");
  ejs.renderFile(filePath, { passengers }, async (err, html) => {
    if (err) return response.send("erro na leitura do arquivo :(");

    // Exportando pdf com puppeteer
    const page = await browser.newPage();
    // await page.goto('https://google.com', {
    //   waitUntil: 'networkidle0'
    // })

    // Acessa a página que vai ser transformada em pdf
    await page.goto("http://localhost:3000", {
      waitUntil: "networkidle0",
    });

    // Colocando diretamente o conteúdo do ejs dentro da page, o layout
    // await page.setContent(html);
    
    // Configurando pdf
    await page.pdf({
      path: "report.pdf",
      printBackground: true,
      format: "A4",
      margin: { top: "20px", bottom: "40px", left: "20px", right: "20px" },
    });

    response.contentType("application/pdf")
    return response.send(pdf);
  });
});

// Primeiro entendimento de callback
// Se trata de uma função que entra como argumento de outra função
// Sera executada em um tempo determinado, quero dizer que vai ser determinado ao criar a função

// Quando o servidor for encerrado fecha o navegador
process.on("exit", async () => {
  if (browser) await browser.close();
});
app.listen(3000);

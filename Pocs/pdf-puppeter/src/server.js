// Criando servidor
import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import pdf from "html-pdf";
import puppeteer from "puppeteer";
import fs from "fs";
const app = express();
const browser = await puppeteer.launch();
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
app.get("/", (request, response) => {
  // dirname está oculta porque é como se estivessemos executando tudo dentro de uma função e ela está como parâmetro
  // Na real, no ES Modules isso não funciona, então tive que colocar no código
  const filePath = path.join(__dirname, "print.ejs");
  ejs.renderFile(filePath, { passengers }, (err, html) => {
    if (err) return response.send("Erro na leitura do arquivo");

    // Configurando o pdf
    const options = {
      height: "11.25in",
      width: "8.5in",
      header: {
        height: "20mm",
      },
      footer: {
        height: "20mm",
      },
    };

    // criar pdf
    pdf.create(html, options).toFile("report.pdf", (err, data) => {
      if (err) return response.send("Erro ao gerar o PDF");

      // enviar para o navegador
      return response.send("Arquivo gerado com sucesso!");
    });
  });
});

// Primeiro entendimento de callback
// Se trata de uma função que entra como argumento de outra função
// Sera executada em um tempo determinado, quero dizer que vai ser determinado ao criar a função

app.listen(3000);

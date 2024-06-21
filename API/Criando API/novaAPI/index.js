// Importação do Framework, que serve para criar servidor no Node.js
const express = require('express');
const cors = require('cors');
// Instanciando app a partir do express
const app = express();
const port = 3000;

// Habilando CORS para todas as origens e rotas
app.use(cors());

// Middlleware que converte o corpo da requisição como JSON
app.use(express.json());

app.post('/solicitacoes', (req, res) => {
    fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Api-Key": process.env.API_KEY
        },
        body: JSON.stringify(req.body)
    })
    .then(resp => resp.json()) 
    .then(data => {
        console.log(data)
        res.status(200).send('Requisição a Brevo feita com sucesso!')
    })
    .catch(erro => {
        console.log(erro)
        res.status(400).send('Houve algum erro no envio de email')
    })

});

app.listen(port, () => {
    console.log(`Servidor funfando em http://localhost:${port}`);
})
// Importando o express
import express from 'express';
// Uso de ;(ponto e virgula) é uma boa prática usar, pois se não colocarmos estamos deixando o Node decidir

// Executando uma função express, e colocamos tudo que é necessário para manusear agora está em 'app'
const app = express(); 

// Primeiro parâmetro é uma porta e a segunda é uma função
// Aqui é como se falassemos ao servidor: fique atento, alguem vai chegar pedindo algo, mas só quem chegar pela porta 
// 3000 pode ter acesso.
// Normalmente em servidor local utilizamos a porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// Criando a primeira rota
// Definindo a rota para o cliente pegar a resposta
app.get("/api", (req, res) => {
    // Definindo a resposta 
    res.status(200).send("Boas vindas à Imersão Dev Back-End");


});


// aqui vai ficar toda responsabilidade de lidar com requisições 

import {getTodosPosts, criarPost, atualizarPost} from "../models/postsModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();

    // Definindo a resposta - http 200 que significa => OK
    // Estamos colocando posts -> uma lista, mas graças a funcioalidade de transformar em json do express
    // vamos transformar essa lista de objetos em json
    res.status(200).json(posts);

};

export async function postarNovoPost(req, res) {
    // Os dados ficam no corpo, informações ficam no header(cabeçalho)
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    }
    catch(erro) {  
        // Bom ter cautela com questão de não enviar muitos detalhes na mensagem de erro, no console, só nos veremos o erro.
        // Se devolvermos uma mensagem com muitos detalhes, é possível que alguem possa tentar tirar proveito.
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
};

export async function uploadImagem(req, res) {
    console.log(req);
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        // Primeiro parâmetro é o nome e o segundo é o caminho
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    }
    catch(erro) {  
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
};

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    // Graças a alteração de servir arquivos estáticos conseguimos gerar esse tipo de link
    const urlImagem = `http://localhost:3000/${id}.png`;
    
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        // Aqui precisamos esperar a funcao do Gemini devolver a resposta, por isso o await
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }
        // Inserindo o id do post a ser atualizado e o post que estamos montando/atualizando
        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    }catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
};
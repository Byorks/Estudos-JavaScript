import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {

    // Express vai devolver json
    app.use(express.json());

    // Criando a primeira rota - posts, boa prática porque vamos trabalhar com posts
    // Definindo a rota para o cliente pegar a resposta - enfase no pegar - get.
    app.get("/posts", listarPosts);
}

export default routes;
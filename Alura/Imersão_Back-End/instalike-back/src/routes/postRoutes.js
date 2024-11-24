import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage});
// Linux ou mac essa linha vai funcionar automaticamente, se for windows na hora do upload ele vai renomear as imagens com nomes aleátorios 
// const upload = multer({ dest: "./uploads"});

const routes = (app) => {
    // Express vai devolver json
    app.use(express.json());

    // Criando a primeira rota - posts, boa prática porque vamos trabalhar com posts
    // Definindo a rota para o cliente pegar a resposta - enfase no pegar - get.
    app.get("/posts", listarPosts);

    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
}

export default routes;
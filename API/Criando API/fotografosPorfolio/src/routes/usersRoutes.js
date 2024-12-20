import express from "express";
import cors from "cors";
import { listUsers, createNewUser} from "../controllers/usersController.js"

const corsOptions = {
    // Permissão para o dominio localhost:8000 entrar em contato com a nossa api alocada no localhost:3000
    origin: "http//localhost:8000",
    optionSuccessStatus: 200
}

const usersRoutes = (app) => {
    
    // Middleware que vai lidar com as requisições e transforma-las em JSON que podemos acessar por req.body
    // Sem essa linha precisariamos converter manualmente assim que chega a requisição, com JSON.parse(req.body)
    app.use(express.json());
    app.use(cors(corsOptions));

    app.get("/users", listUsers);

    app.post("/user/:id", createNewUser);
}

export default usersRoutes;
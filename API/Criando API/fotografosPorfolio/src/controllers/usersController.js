import { getAllUsers, createUser } from "../models/usersModel.js";

export async function listUsers(req, res) {
    console.log("Entramos na rota users");
    
    const users = await getAllUsers();
    res.status(200).json(users);
};

export async function createNewUser(req, res) {
    console.log("Criando um user")
    const newUser = req.body;
    try {
        const createdUser = await createUser(newUser);
        res.status(200).json(createdUser);
    }
    catch(error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
};

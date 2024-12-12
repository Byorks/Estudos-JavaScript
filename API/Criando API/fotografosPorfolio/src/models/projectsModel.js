import 'dotenv/config';
import conectToDatabase from '../config/dbConfig.js';
import { ObjectId } from "mongodb";
import getTimeNow from '../utils/time.js';

const conection = await conectToDatabase(process.env.CONECTION_STRING);

export async function createProject(userId, newProject) {
    const db = conection.db("fotografia-portfolio");
    const collection = db.collection("users");
    const objId = ObjectId.createFromHexString(userId);
    // Procurar o nome do autor
    // const userName = collection.findOne()

    // Adicionando a hora atual a criação do projeto
    newProject.data_postagem = getTimeNow();
    // Continuar a colocar o nome do  autos
    // newProject.autor = 

    return collection.updateOne(
        {_id: new ObjectId(objId)},
        {$push: { lista_projetos: newProject }}
    )
    
}

// Preciso no bd pegar o user
// Dentro da lista projetos do user, criar um projeto
// Pensando que ele já está logado, o que posso fazer para pegar 

import 'dotenv/config';
import conectToDatabase from '../config/dbConfig.js';
import { ObjectId } from "mongodb";
import getTimeNow from '../utils/time.js';

const conection = await conectToDatabase(process.env.CONECTION_STRING);

export async function createProject(userId, newProject) {
    const db = conection.db("fotografia-portfolio");
    const collection = db.collection("users");
    // Converte o Id que pode vir como ObjectId
    const objId = ObjectId.createFromHexString(userId);

    const query = { _id: objId};

    const options = {
        // Não preciso especificar os campos que não quero
        projection: { _id: 0, nome: 1,tipo_categoria: 1, lista_projetos: 1 },
    };
    
    // Procurar o nome do autor
    const userNameAndClass = await collection.findOne(query, options);

    console.log(userNameAndClass)

    // Adicionando a hora atual a criação do projeto
    // Esse a data_postagem está saindo como: Object
    // newProject.data_postagem = getTimeNow();
    // Nesse nem está saindo rsrs
    //newProject = Object.assign(newProject, getTimeNow());
    // Continuar a colocar o nome do  autor
    // newProject.autor = 

    return collection.updateOne(
        {_id: new ObjectId(objId)},
        {$push: { lista_projetos: newProject }}
    );
    
}

// Preciso no bd pegar o user
// Dentro da lista projetos do user, criar um projeto
// Pensando que ele já está logado, o que posso fazer para pegar 

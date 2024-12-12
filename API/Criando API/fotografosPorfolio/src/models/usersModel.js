// const users = [
//     {
//         nome: "Maria Souza",
//         cpf: "123.456.789-00",
//         tipo_categoria: "iniciante",
//         lista_projetos: [
//             {
//                 id_projeto: 1,
//                 autor: "Maria Souza", 
//                 titulo: "Paisagens Urbanas",
//                 descricao: "Fotografias de ruas e prédios ao entardecer.",
//                 tipo_categoria: "iniciante",
//                 data_postagem: new Date(),
//                 fotos: ["rua.jpg", "predio.jpg", "entardecer.jpg"]
//             }
//         ]
//     },
//     {
//         nome: "João Pereira",
//         cpf: "987.654.321-00",
//         tipo_categoria: "intermediário",
//         lista_projetos: [
//             {
//                 id_projeto: 1,
//                 autor: "João Pereira",
//                 titulo: "Natureza Selvagem",
//                 descricao: "Imagens de animais e florestas em seu habitat natural.",
//                 tipo_categoria: "intermediário",
//                 data_postagem: new Date(),
//                 fotos: ["leao.jpg", "floresta.jpg", "passaro.jpg", "rio.jpg", "macaco.jpg"]
//             }
//         ]
//     },
//     {
//         nome: "Carla Lima",
//         cpf: "321.654.987-00",
//         tipo_categoria: "profissional",
//         lista_projetos: [
//             {
//                 id_projeto: 1,
//                 autor: "Carla Lima",
//                 titulo: "Moda e Retratos",
//                 descricao: "Ensaio fotográfico com modelos em estúdio.",
//                 tipo_categoria: "profissional",
//                 data_postagem: new Date(),
//                 fotos: ["modelo1.jpg", "modelo2.jpg", "estudio1.jpg", "makeup.jpg", "luz.jpg", "pose1.jpg", "moda.jpg", "vestido.jpg", "close.jpg", "pose2.jpg"]
//             }
//         ]
//     }
// ];

import 'dotenv/config';
// import { ObjectId } from "mongodb"; 
import conectToDatabase from "../config/dbConfig.js";
import getTimeNow from '../utils/time.js';

// Aqui estamos inserindo a string de conexão na função que conecta ao MongoDb
const conection = await conectToDatabase(process.env.CONECTION_STRING);

export async function getAllUsers(){
    // Aqui vai o nome do banco de dados
    const db = conection.db("fotografia-portfolio");
    // Pegando a coleção específica do banco de dados
    const collection = db.collection("users");
    return collection.find().toArray();
}

export async function createUser(newUser) {
    const db = conection.db("fotografia-portfolio");
    const collection = db.collection("users");

    console.log(newUser);
    console.log(JSON.stringify(newUser));

    return collection.insertOne(newUser);
}
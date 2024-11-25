import conectarAoBanco from "../config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assincrona para buscar todos os posts do banco de dados
export default async function getTodosPosts(){
    const db = conexao.db("imersao-instabytes");
    // Nesse momento estamos abrindo uma gaveta específica do armario 
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}


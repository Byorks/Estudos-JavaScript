import conectarAoBanco from "../config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assincrona para buscar todos os posts do banco de dados
// Retiramos o default ao lado de export, porque agora não mais terá só uma função para exportar
export async function getTodosPosts(){
    const db = conexao.db("imersao-instabytes");
    // Nesse momento estamos abrindo uma gaveta específica do "armario" 
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}
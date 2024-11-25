// aqui vai ficar toda responsabilidade de lidar com requisições 

import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();

    // Definindo a resposta - http 200 que significa => OK
    // Estamos colocando posts -> uma lista, mas graças a funcioalidade de transformar em json do express
    // vamos transformar essa lista de objetos em json
    res.status(200).json(posts);

}
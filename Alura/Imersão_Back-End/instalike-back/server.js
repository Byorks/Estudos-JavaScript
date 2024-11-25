// Importando o express
import express from 'express';
import routes from './src/routes/postRoutes.js';
// Uso de ;(ponto e virgula) é uma boa prática usar, pois se não colocarmos estamos deixando o Node decidir


// Criando lista de objetos
const posts = [
    {   
        id: 1,
        descrição: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
      id: 2,
      descrição: "Gato fazendo yoga",
      imagem: "https://placecats.com/millie/300/150"
    },   
    {
      id: 3,
      descrição: "Gato fazendo panqueca",
      imagem: "https://placecats.com/millie/300/150"
    },   
]

// Executando uma função express, e colocamos tudo que é necessário para manusear agora está em 'app'
const app = express(); 
routes(app);

// Primeiro parâmetro é uma porta e a segunda é uma função
// Aqui é como se falassemos ao servidor: fique atento, alguem vai chegar pedindo algo, mas só quem chegar pela porta -
// 3000 pode ter acesso.
// Normalmente em servidor local utilizamos a porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});


function buscarPostPorIdVanessa(id) {
    // Minha resolução
    console.log("procurando posts");
    console.log(id);
    
    // Não deu certo porque o return no forEach não altera nada que esteja fora do escopo
    // posts.forEach(post => {
    //     if ( post.id == parseInt(id.id)) {
    //         console.log("post encontrado! \nEsse é o id:"+ id.id + id);
    //         return post;
    //     }
    //     else 
    //     {
    //         console.log("post não encontrado");
    //     }
    // });

    // Esse deu certo
    // O problema dessa forma é que ele necessáriamente vai passar por todos os itens da lista, isso é desnecessário
    for (let i = 0; i < posts.length; i++) {
        if( parseInt(id.id) == posts[i].id ){
            return posts[i];
        }
    }
}

function buscarPostPorId(id) {
    return posts.findIndex((post)=>{
        return post.id === Number(id);
    })
}


app.get("/posts/:id", (req, res) => {
    // Minha forma
    // let postEncotrado = buscarPostPorId(req.params);
    // console.log(postEncotrado);

    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});

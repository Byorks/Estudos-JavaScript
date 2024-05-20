// Esta linha define o conteúdo HTML do corpo do documento.
// Especificamente, está adicionando um elemento <h1> com um texto "Titulo legal" e um atributo id="titulo".
//document.body.innerHTML = '<h1 id="titulo">Titulo legal</h1>';

// Esta linha obtém o elemento do documento que tem o id "titulo".
// O método getElementById retorna uma referência ao primeiro objeto com o id especificado.
///let titulo = document.getElementById("titulo");

// Esta linha altera a propriedade CSS 'font-family' do elemento com id "titulo" para "Segoe UI".
// Isso muda a fonte do texto do título para "Segoe UI".
///titulo.style.fontFamily = "Segoe UI";

// Esta linha altera a propriedade CSS 'color' do elemento com id "titulo" para "red".
// Isso muda a cor do texto do título para vermelho.
///titulo.style.color = "red";


//Chat GPT Comentou 

// O caminho inteiro
//window.document.getElementById("titulo").style.color = "#002596" 

// Mas posso guardar em um variável, seleciona o elemneto com ID "titulo2" do documento(document)
let titulo2 = window.document.getElementById("titulo2");

// Define a cor do texto do elemento "titulo2"
titulo2.style.color = "blue";

// Define a tipografia do elemento
titulo2.style.fontFamily = "Montserrat";

// Inicializa uma variavel
let clique = 0;

// Função para contagem de cliques
const somarCliques = () => {

    // Incremetou 1 no valor da variáve
    clique++;

    // Seleciona o botão por querySelector e atualiza
    document.querySelector("#botao").innerHTML = clique;

}

const adicionarItem = () => {
    // Criar um novo elemento li(item da lista)
    // posso trocar ("li") por outro tipo de elemento
    let novoItem = document.createElement("li");

    // Define o texto do novo item
    novoItem.textContent = "Novo Item";

    // Adiciona um novo item a lista
    // Identifica  o elemento que vai ser adicionado
    let lista = document.getElementById("minhaLista");

    // Adiciona um novo item a minha lista
    lista.appendChild(novoItem);
}

// criando funcao voltar página

const voltarPagina = () => {
    window.history.back();
}

const fecharPagina = () => {
    window.close();
}
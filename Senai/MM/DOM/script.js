// Esta linha define o conteúdo HTML do corpo do documento.
// Especificamente, está adicionando um elemento <h1> com um texto "Titulo legal" e um atributo id="titulo".
document.body.innerHTML = '<h1 id="titulo">Titulo legal</h1>';

// Esta linha obtém o elemento do documento que tem o id "titulo".
// O método getElementById retorna uma referência ao primeiro objeto com o id especificado.
let titulo = document.getElementById("titulo");

// Esta linha altera a propriedade CSS 'font-family' do elemento com id "titulo" para "Segoe UI".
// Isso muda a fonte do texto do título para "Segoe UI".
titulo.style.fontFamily = "Segoe UI";

// Esta linha altera a propriedade CSS 'color' do elemento com id "titulo" para "red".
// Isso muda a cor do texto do título para vermelho.
titulo.style.color = "red";


//Chat GPT Comentou 
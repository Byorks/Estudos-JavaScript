"use strict";
// Este programa localiza quantas vezes a palavra escolhida aparece no texto
// Arrow Method que procura identicar se há pontos na string inserida, retorna true caso encontre
const VerificarPontos = (palavraMontada) => {
    let pontos = [",", ".", ":", ";", "!", "?", `"`, `'`];
    for (let p = 0; p < pontos.length; p++) {
        if (palavraMontada == pontos[p]) {
            return true;
        }
    }
};
// Variáveis
let texto = prompt("Informe o texto.");
while (texto == "") {
    texto = prompt("Informe o texto");
}
let palavra = prompt("Insira a palavra que quer procurar no texto");
let listaPalavras = [];
let cont = 0;
// Separar as palavras para poder verificar quais contem a {palavra}
// Com método Split
// let listaPalavras = texto?.split(" ")
// Sem Split
let montandoPalavra = "";
let palavraRevisada = "";
// Com base no tamanho do texto, vamos passar letra por letra.
for (let i = 0; i < texto.length; i++) {
    // Caso não seja um espaço, adicionarei a {montandoPalavra}
    if (texto[i] != " ") {
        // Se não for verdade que tem um ponto, então adiciona ele a montandoPalavra
        if (!(VerificarPontos(texto[i]))) {
            montandoPalavra += texto[i];
            console.log("Montando Palavra: " + montandoPalavra);
        }
    }
    else {
        // Caso seja um espaço, a palavra acabou, então vamos adicionar a uma lista, e contar +1 se a palavra corresponder a escolhida pelo usuário
        console.log("Palavra Montada: " + montandoPalavra);
        if (montandoPalavra.toLowerCase() == (palavra === null || palavra === void 0 ? void 0 : palavra.toLowerCase())) {
            cont++;
        }
        listaPalavras.push(montandoPalavra);
        montandoPalavra = "";
        palavraRevisada = "";
    }
}
let contFE = 0;
console.log(`O tamanho da listaPalavras: ${listaPalavras}`);
// Criar contador para fazer as contagems de quantas vezes a palavra se repete
listaPalavras.forEach(palavrinha => {
    if (palavrinha.toLowerCase() == (palavra === null || palavra === void 0 ? void 0 : palavra.toLowerCase())) {
        contFE++;
    }
});
console.log(`A palavra: ${palavra}, aparareceu ${cont} vezes no texto inserido `);
console.log(`Usando método Foreach\n A palavra: ${palavra}, aparareceu ${contFE} vezes no texto inserido `);
//# sourceMappingURL=ex2.js.map
"use strict";
console.log("Criando um teste em TS");
console.log("Exercício 1 - Ordenando lista aleatória em ordem crescente ( •̀ ω •́ )✧");
// Criando lista com 10 números em ordem aleatoria! 
// Gerando uma lista com tamanho 10, Não precisa especificar tamanho?
const listaNumAleatoria = [];
// Colocando os números em indices de 0 a 10
// Mostra a lista
let listaAleatoriaString = "";
for (let i = 0; i < 10; i++) {
    // Floor retorna o menor número inteiro entre os inteiro que recebe(arredonda)
    listaNumAleatoria[i] = Math.floor(Math.random() * (31 - 0) + 0);
    listaAleatoriaString += listaNumAleatoria[i].toString();
    listaAleatoriaString += " ";
}
console.log("Lista Aleatoria\n" + listaAleatoriaString);
// Agora vamos ordenar a lista
let listaOrganizada = [];
const tamLista = listaNumAleatoria.length;
let menorNum = listaNumAleatoria[0];
let pos = 0;
do {
    menorNum = listaNumAleatoria[0];
    for (let a = 0; a < listaNumAleatoria.length; a++) {
        if (menorNum > listaNumAleatoria[a]) {
            menorNum = listaNumAleatoria[a];
            pos = listaNumAleatoria.indexOf(menorNum);
        }
    }
    console.log(menorNum);
    listaOrganizada.push(menorNum);
    listaNumAleatoria.splice(pos, 1);
} while (!(listaOrganizada.length == tamLista));
// Mostra a lista ordenada
let listaOrganizadaSt = "";
for (let b = 0; b < tamLista; b++) {
    listaOrganizadaSt += listaOrganizada[b].toString();
    listaOrganizadaSt += " ";
    console.log(listaOrganizada[b]);
}
console.log("Lista Organizada\n" + listaOrganizadaSt);
//# sourceMappingURL=script.js.map
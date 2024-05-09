// Exercício 5: Verificação de números em ordem crescente

// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

// Primeiro solicita as 3 entradas
alert("Digite três números");

let numA = prompt("Primeira entrada : ");
let numB = prompt("Segunda entrada : ");
let numC = prompt("Terceira entrada : ");

// Depois verificar se A < B < C
if (numA < numB && numB < numC) {
    alert(`Você digitou: [${numA}, ${numB}, ${numC}] estão em ordem crescente!`);
}
else if(numA > numB && numB > numC){
    alert("Você digitou: " + numA + ", " + numB + ", " + numC + " estão em ordem decrescente!");
}
else {
    alert("não estão em ordem!");
}
// Exibe se estão em ordem crescente
// Exercício 5: Verificação de números em ordem crescente

// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.

// Primeiro solicita as 3 entradas
alert("Digite três números");

let numA = parseInt(prompt("Primeira entrada : "));
let numB = parseInt(prompt("Segunda entrada : "));
let numC = parseInt(prompt("Terceira entrada : "));

// Depois verificar se A < B < C
// Exibe se estão em ordem crescente
if (numA < numB && numB < numC) {
    console.log(`Você digitou: [${numA}, ${numB}, ${numC}] estão em ordem crescente!`);
}
else if(numA > numB && numB > numC){
    console.log("Você digitou: " + numA + ", " + numB + ", " + numC + " estão em ordem decrescente!");
}
else {
    console.log("Os números não estão em ordem!");
}

/* 
    --- Desafio ---
    Informe se os números informados estão em ordem crescente / decrescente / não ordenado

*/
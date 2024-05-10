// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

// Entra o número
let numero = parseInt(prompt("Informe um número inteiro: "));

// divide por 2 e pega o resto, o resto é o que sobra de uma divisão

// se for 0 é impar

// mostra se impar ou par
if (numero % 2 == 0) {
   console.log("O número informado é par"); 
}
    else {
   console.log("O número informado é impar");
}


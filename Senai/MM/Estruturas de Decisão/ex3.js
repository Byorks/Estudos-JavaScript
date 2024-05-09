// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

// Entra o número
let numero = prompt("Digite um número: ");

// divide por 2 e pega o resto, o resto é o que sobra de uma divisão
numero = numero % 2;

// se for 0 é impar
if (numero == 0) {
    alert("O número é par");
} 
else {
    alert("O número é impar");
}
// mostra se impar ou par

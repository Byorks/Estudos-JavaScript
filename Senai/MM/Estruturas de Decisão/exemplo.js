/* Mostra um pop-up na tela com a mensagem */
alert("Hello World!");

// Apresenta mensagem na tela do console
console.log("Hello World!!");

// No pop-up ele solicita que digite algo
prompt("Digite alguma coisa: ");

// Escreva um programa que solicite o nome do usuário e 
// lhe dê boas vindas, exibindo uma mensagem pelo console.

// Pronpt recebe uma entrada digitada e armazena na variável tipo LET  
let nome = prompt("Olá, digite o seu nome: ");

// Apresenta a mensagem e instring com concatenação => junta os textos
console.log("Seja bem vindo(a) " + nome + "!!");

let pontos = 100;

// ParseInt transforma a variável string em número int, função que tranforma os parametros entre parênteses
let bonus = parseInt(prompt("Quantos pontos você deseja somar?"));

let totalPontos = pontos + bonus;

/*

Adição -> num1 + num2
Subtração -> num1 - num2
Multiplicação -> num1 * num2
Divisão -> num1 / num2

*/

/*  
    Padrão de escrita 

   camelCase -  JS 
   PascalCase - Java, C#, Classes
   snake_case - Python

*/

console.log("Total pontos: " + totalPontos);

let notaAluno = parseFloat(prompt("Digite a nota do aluno: "));
console.log(notaAluno);
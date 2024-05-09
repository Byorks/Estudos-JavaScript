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


/*

// Fazendo conta com o JS
// parseInt -> Transforma o que está entre () em número inteiro : 1, 2, 3 , 4 ....

let nota1 = parseInt(prompt("Digite a nota aqui: "));

let nota2 = parseInt(promtp("Digite a outra nota: "));

// Entre parenteses para somar primeiro
let media = (nota1 + nota2) / 2;

console.log(media);

*/

// parseFloat -> Transforma o que está entre () em número com virgula / número fracionado 
let produto1 = parseFloat(prompt("Digite o valor do produto: "));

let produto2 = parseFloat(prompt("Digite o valor do segundo produto: "));

let soma = produto1 + produto2;

console.log(soma);
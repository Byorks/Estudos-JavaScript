// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

// Receba as 4 notas
alert("Informe ás notas de 0 a 10");
let nota1 = parseFloat(prompt("Digite a primeira nota: "));

let nota2 = parseFloat(prompt("Digite a segunda nota: "));

let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let nota4 = parseFloat(prompt("Digite a quarta nota: "));

// calcule e imprima a média aritmética das notas

/*
 A precedência de operadores em JS é semelhante ao da matemática ensinada na escola -
Multiplicação e divisão são realizados primeiro, depois a adição e subtração
(a soma é sempre realizada da esquerda para a direita)
*/
media = (nota1 + nota2 + nota3 + nota4) / 4;

// método toFixed - é utilzado para delimitar as casas decimais.
if (media >= 7){
    console.log("A média do aluno é "+ media.toFixed(2) +" Aprovado");
}
else if (media >= 5 && media < 7) {
    console.log("A média do aluno é "+ media.toFixed(2) +" Recuperação");
}
else{
    console.log("A média do aluno é "+ media.toFixed(2) +" Reprovado");
}
// 9. Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.

let numero = prompt("Digite um número pra fazermos uma contagem regressiva");
let contagem = numero; 

for (let cont = 0; cont <= numero; cont++) {
    
    console.log(contagem);
    contagem--;
}
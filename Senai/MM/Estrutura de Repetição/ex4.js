// 4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.

let num; 

// O usúario seleciona o número a ser multiplicado
num = parseFloat(prompt("Digite o número que deseja ver a tabuada: "));

// Apresenta na tela
alert(`Você escolheu o número ${num}`)

// criamos um laço de repetição para calcular 10 vezes 
for (contador = 1; contador <= 10 ; contador++) {
    multiResultado = contador * num;
    console.log(`${contador} * ${num} = ${multiResultado}`)
}
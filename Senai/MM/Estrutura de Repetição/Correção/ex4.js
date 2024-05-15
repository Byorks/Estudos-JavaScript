// 4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.

let num; 

// O usúario seleciona o número a ser multiplicado
num = parseFloat(prompt("Digite o número que deseja ver a tabuada: "));

// Apresenta na tela
alert(`Você escolheu o número ${num}`)

if (!isNaN(num)){
    // criamos um laço de repetição para calcular 10 vezes 
    for (let contador = 1; contador <= 10 ; contador++) {
        console.log(`${contador} * ${num} = ${contador * num}`)
    } 
}else{
    console.log("Número invalido. Por favor digite um número válido.")
}

// isNaN retorna se não é número, clicando com ctrl pressionado vemos detalhes sobre a função
console.log(isNaN("Hello World")); // Retorna true
console.log(inNaN(123)); // Retorna false
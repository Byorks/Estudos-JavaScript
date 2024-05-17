//Contruir um menu que é possível escolher um exercicios entre os exercicios anteriores, para ser executado. 
// Faça com que o menu repita a sua execução,
// disponibilize as opções para o usuário, até que seja digitado "sair";
// 3 while e 3 for

function fibbonacci() {
    // 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
    let numX = 1;
    let numY = 1;



    for (let cont = 1; cont <= 8; cont++) {
        if (cont == 1) {
        console.log (`${numX}`)
        console.log (`${numY}`)
        }
        
        let fibbo = numX + numY;

        console.log (`${fibbo}`)

        numY = numX;
        numX = fibbo;
    }
}

function somade0a100() {
    // 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.

let numA = 0;
let numB = 1;


while (numA <= 100) {
    numA ++ 
    numB += numA;
}

console.log(numB)
}

function verificaIdade() {
// 8. Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.

let idadeCerta = false;

// Enquanto a idadaCerta for false, repete o loop
while (!idadeCerta) {
        // Entra a idade do usuário
        let idade = parseInt(prompt("Digite quantos anos você tem: "));

        // Apresenta a idade no console
        console.log(`Você tem ${idade} anos de idade!`)

        // Faz a verificação
        if (idade >= 18) {

            //Se for maior ou ter 18 anos, sai do loop
            console.log("Você é maior de idade, bem vindo(a)!");
            // Comando para sair do loop
            idadeCerta = true;
        }
        else{
            console.log("Você é menor de idade, acesso restrito.");
        }
    }
}

function calculoIMC() {
    // Exercício 8: Cálculo de IMC

// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros. Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o usuário se encontra, de acordo com a tabela a seguir:

// IMC menor que 18.5: Abaixo do peso

// IMC de 18.5 a 24.9: Peso normal

// IMC de 25.0 a 29.9: Sobrepeso

// IMC de 30.0 a 34.9: Obesidade grau 1

// IMC de 35.0 a 39.9: Obesidade grau 2

// IMC maior ou igual a 40.0: Obesidade grau 3


let altura = parseFloat(prompt("Digite sua altura em metros:"));

let peso = parseFloat(prompt("Digite seu peso em quilogramas: "));

imc = peso / (altura*altura);

alert(`Seu IMC é de : ${imc}`)
if (imc < 18.5) {
    alert("Abaixo do peso");
}
else if (imc >= 18.5 && imc < 25.0) {
    alert ("Peso normal");
}
else if (imc >= 25.0 && imc < 30.0) {
    alert ("Sobrepeso");
}
else if (imc >= 30.0 && imc <= 34.9 ) {
    alert ("Obesidade grau 1");
}
else if (imc >= 35.0 && imc <= 39.9 ) {
    alert ("Obesidade grau 2");
} 
else {
    alert("Ovesidade grau 3");
}


}

function numOrdem() {
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
}

function diaSemana() {
        // Exercício 2: Verificação de dia da semana

    // Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da
    // semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira,
    // 2 representa terça-feira e assim por diante.

    // solicita ao usuário um número de 1 a 7

    let diaSemana = prompt("Digite um número entre 1 a 7: ");

    while (diaSemana > 7 || diaSemana < 1) {

        diaSemana = prompt("Digite um número entre 1 a 7: ");
    }

    console.log("Entrada valida")

    // definir os dias da semana , comparar
    switch (diaSemana) {
        case "1" :
            console.log("Segunda-feira");
            break
        case "2":
            console.log("Terça-feira");
            break
        case "3":
            console.log("Quarta-feira");
            break
        case "4":
            console.log("Quinta-feira");
            break
        case "5":
            console.log("Sexta-feira");
            break
        case "6":
            console.log("Sábado");
            break
        case "7":
            console.log("Domingo");
            break
    }

    // exibir o nome corresponde a esse dia
}

let menu = true; 

while( menu ) {
    let opcao = window.prompt("MENU\nDigite a opção desejada:\n\n 1 - Exercício Fibbonacci \n 2 - Exercício Soma dos númerosde 1 a 100\n 3 - Verificador de Idade \n 4 - Calculo de Indice de Massa Corporal \n 5 - Ordem dos Números \n 6 - Dia da Semana "); // .toLowerCase pode ser colocado aqui sem o new porque a classe string já foi istanciada 

    console.log("Esse é a opção: "+ opcao);

    switch (opcao.toLowerCase()) {
        case "sair":
            menu = false;
        break;
        case "1": 
            fibbonacci();
        break;

        case "2":
            somade0a100();
        break;

        case "3":
            verificaIdade();
            break;

        case "4":
            calculoIMC();
            break;
        
        case "5":
            numOrdem();
            break;
        
        case "6":
            diaSemana();
            break;
        default:
            console.log("Número invalido");
        break;
    }
}




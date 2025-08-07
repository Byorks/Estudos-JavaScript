// // Operadores Matemáticos e Conversões de tipos

// // Exercício IMC
// let nome = "Rodrigo";
// let peso = 79;
// let altura = 1.82;
// let imc = peso / (altura * altura);
// console.log(`O IMC do ${nome} é de ${Math.fround(imc, -1)}`)
// alert(`O IMC do ${nome} é de ${imc.toFixed(2)}`);


// // Funções matemáticas
// let x = 3.0;
// let y = 4.0;
// let z = -5.0;
// let A, B, C;

// // Exemplos com Sqrt
// A = Math.sqrt(x); // Raiz quadrada de x
// B = Math.sqrt(y); // Raiz quadrada de x
// C = Math.sqrt(25.0); // Raiz quadrada de x
// console.log("Raiz quadrada de " + "x" + " = " + A);
// console.log("Raiz quadrada de " + "y" + " = " + B);
// console.log("Raiz quadrada de 25 = " + C);

// // Exemplos com Pow
// A = Math.pow(x,y);
// B = Math.pow(x,2.0);
// C = Math.pow(5.0,2.0);
// console.log(x + " elevado a " + y + " = " + A);
// console.log(x + " elevado ao quadrado = " + B);
// console.log("5 elevado ao quadrado = "  + C);

// // Exemplos com Abs
// A = Math.abs(y);
// B = Math.abs(z);
// console.log("Valor absoluto de " + y + " = " + A);
// console.log("Valor absoluto de " + z + " = " + B);

// // limpando console
// prompt("Pressione para limpar console");
// console.clear();

//  /* Vamos criar um programa para ler as medidas da largura e comprimento
//   de um terreno retangular com uma casa decimal; */ 
// let larguraTerreno, comprimentoTerreno, valorMetroQuadrado;

// larguraTerreno = Number.parseFloat(prompt("Digite a largura do terreno"));
// comprimentoTerreno = Number.parseFloat(prompt("Digite o comprimento do terreno")) ;
// valorMetroQuadrado = Number.parseFloat(prompt("Digite o valor do metro quadrado do terreno"));

// console.log("AREA = " + larguraTerreno * comprimentoTerreno);
// console.log("PRECO = ",  (larguraTerreno * comprimentoTerreno *  valorMetroQuadrado).toFixed(2));
// console.log("PRECO em R$ = ",  (larguraTerreno * comprimentoTerreno *  valorMetroQuadrado).toLocaleString('pt-BR', { style: 'currency', currency:'BRL'}));

// // Fazer um programa para ler as medidas da base e altura de um retângulo.
// let baseRetangulo, alturaRetangulo;

// baseRetangulo = Number.parseFloat(prompt("Digite o valor base do retangulo:"));
// alturaRetangulo = Number.parseFloat(prompt("Digite o valor da altura do retangulo"));

// let perimetro = 2 * baseRetangulo + 2 * alturaRetangulo;

// let diagonal = Math.sqrt(Math.pow(baseRetangulo, 2) + Math.pow(alturaRetangulo, 2));

// console.log("AREA = " + baseRetangulo * alturaRetangulo);
// console.log("PERIMETRO = " + perimetro);
// console.log("DIAGONAL = " + diagonal.toFixed(4));

//

/* Leia um valor inteiro, sendo o tempo de duração em segundos de um
determinado evento em uma fábrica, e informe-o expresso no formato
horas:minutos:segundos. */

// let tempoEventoSegundos = Number.parseInt(prompt("Digite o tempo decorrido no evento"));
// console.log(tempoEventoSegundos);

// let minutos = Math.floor(tempoEventoSegundos / 60);

// let horas = Math.floor( minutos / 60);

// minutos = minutos - (60 * horas);

// let segundos = tempoEventoSegundos - (60 * (minutos + horas * 60));

// console.log("horas -> " + horas);
// console.log("minutos -> " + minutos);
// console.log("segundos -> " + segundos);

// alert (`${horas}:${minutos}:${segundos}`);


//// Outra forma de resolver

// let n, resto, horas, minutos, segundos;

// n = Number.parseInt(prompt("Digite o tempo decorrido no evento"));

// horas = Math.floor(n / 3600);
// resto = n % 3600;

// minutos = Math.floor(resto / 60);
// segundos = resto % 60;

// alert (`${horas}:${minutos}:${segundos}`);


// Etendendo função Split
let frase = prompt("Divida uma frase, vamos picotar ela");

let  vetor = frase.split(' ');

for (let index = 0; index < vetor.length; index++) {
    console.log(vetor[index]);
    
}

console.log(":D")
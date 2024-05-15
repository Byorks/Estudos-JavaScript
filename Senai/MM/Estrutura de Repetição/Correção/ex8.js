// 8. Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.

// Entra a idade do usuário
let idade = parseInt(prompt("Digite quantos anos você tem: "));

// 
while (idade < 18) {
    let idade = parseInt(prompt("Digite quantos anos você tem: "));
}

// Apresenta a idade no console
console.log("Você é maior de idade. Sua idade é: " + idade + "anos");

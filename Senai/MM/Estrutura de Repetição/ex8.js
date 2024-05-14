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
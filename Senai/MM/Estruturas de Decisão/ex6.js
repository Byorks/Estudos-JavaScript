// Exercício 6: Verificação de idade

// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

// Entra a idade do usuário 
alert("Para sair, digite: 0");

//declarei uma variável bool como loop
loop = true;

// enquanto o loop for true, pergunte a idade
while (loop) {
    let ano = parseInt(prompt("Insira o seu ano de nascimento: "));
    
    if(ano == 0 ) {
        loop = false;
    }
    else {

        // processa a idade;
        anoVerificado =  2024 - ano;
        // Verifica se é maior de 18 anos
    
        if (anoVerificado >= 18) {
            alert("Você é maior de idade.");
        }
        else {
            alert("Você é menor de idade!");
        }
        // Mostra na tela se é ou não

    }
}
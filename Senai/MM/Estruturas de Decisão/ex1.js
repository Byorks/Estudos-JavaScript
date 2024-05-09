// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é &quot;admin&quot; e a senha é &quot;senha123&quot;. Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.

// atalho - ctrl + ; torna comentario


//solicita o nome de usuário
let username = prompt("Digite um nome de usuário: ");
//solicitar a senha ao usuário
let senha = prompt("Digite a senha: ");

//verifique o nome e senha do usuário é "admin" e a senha "senha123"
//CASO SIM -> Exiba a mensagem de login bem sucedida.


// == - somente verifica o valor e === verifica também o tipo de dado e o valor
if (ursername === "admin" && senha == "senha123") {
    console.log("Login bem sucedido!");
}

//CASO NÃO -> Exiba a mensagem de usúario seja mal sucedida.

else {
    console.log("Login mal sucedido");
}
// Exiba uma mensagem indicando se o login foi bem sucedido ou não.



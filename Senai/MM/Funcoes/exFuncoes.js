// Criando a função, tem caracteristica 
//Hoisting -> Usa funções(functions) e variaveis (var), antes da declaração
// Primeiro declara e depois chama

// Você "ensina" o computador a realiaro que está dentro da função
function saudacao() {
    let nomePessoa = prompt("Digite seu nome: ");
    
    let horaAtual = new Date().getHours();
    
    if (horaAtual > 6 && horaAtual < 13) {
        window.alert("Bom dia " + nomePessoa);    
    }
    else if (horaAtual >=13 && horaAtual < 18){
        window.alert("Boa tarde " + nomePessoa);
    }
    else{
        window.alert("Boa noite " + nomePessoa);    
    }
        
}        

// Chama a função
saudacao();

saudacao();


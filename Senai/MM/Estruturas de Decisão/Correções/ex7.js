// Exercício 7: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim, aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.
// Valor total da compra


let valorTotal = parseFloat(prompt("Informe o valor total da compra: "));

let desconto; 

if (valorTotal <= 100) {
    desconto = 0;
    console.log("Sem desconto na sua compra.");
}
else if (valorTotal > 100 && valorTotal <= 200){
    desconto = 0.1;
    console.log("Aplicado desconto de 10%")
}
else {
    desconto = 0.2;
    console.log("Aplicado desconto de 20%")
}

let valorFinal = valorTotal - (valorTotal * desconto);

console.log("O valor final da compra com o desconto: R$" + valorFinal.toFixed(2));

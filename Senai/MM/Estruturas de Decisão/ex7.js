// Exercício 7: Cálculo de desconto progressivo

// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim, aplique um desconto de acordo com o valor total da compra. Siga a tabela:

// Valor total da compra até R$ 100,00: sem desconto.

// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.

// Valor total da compra acima de R$ 200,00: desconto de 20%.

// Exiba o valor final da compra com o desconto aplicado.

// Valor total da compra
let compraTotal = parseFloat(prompt("Insira o valor total da compra: "));

if (compraTotal <= 100) {
    alert("Sem desconto na sua compra.");
}
else if (compraTotal > 100 && compraTotal <= 200){
    compraTotal = compraTotal - compraTotal * 10 / 100;
    alert("Aplicado desconto de 10%")
}
else {
    (compraTotal -= compraTotal * 20 / 100);
    alert("Aplicado desconto de 20%")
}

alert(`O valor da sua compra ficou com o total de: ${compraTotal}`);
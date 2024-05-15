// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
let fib1 = 1;
let fib2 = 1;


console.log("Os primeiros 10 números da sequencia de Fibbonacci");
console.log (`${fib1}`)
console.log (`${fib2}`)

// Itera para calcular e imprimir os próximos 8 números da sequencia
for (let cont = 2; cont <= 10; cont++) {
    let fibboNext = fib1 + fib2;

    console.log (`${fibboNext}`)

    //Atualizar os valores de fib1 e fib2 para os próximos calculos
    fib1 = fib2;
    fib2 = fibboNext;
}
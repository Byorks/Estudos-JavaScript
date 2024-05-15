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
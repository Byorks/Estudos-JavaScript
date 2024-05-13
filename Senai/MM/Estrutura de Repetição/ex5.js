// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.
numX = 1;
numY = 1;



for (cont = 1; cont <= 10; cont++) {
    if (cont == 1) {
    console.log (`${numX}`)
    console.log (`${numY}`)
    }
    
    let fibbo = numX + numY;

    console.log (`${fibbo}`)

    numY = numX;
    numX = fibbo;
}
// 2. Imprimir números pares de 1 a 10.

for (let i = 0; i < 10; i+=2){
    
    console.log(`${i} é um número par!`);
}

console.log("------------------------");

for (let i = 0; i < 10; i++){
    if ( i % 2 == 0) {
        console.log(`${i} é um número par!`);
    }
}
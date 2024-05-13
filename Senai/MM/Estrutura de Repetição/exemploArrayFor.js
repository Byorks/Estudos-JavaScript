// Array
let frutas = ["Banana","Laranja","Maça","Pitaya","Melancia"]

// Percorrendo uma lista com o for | tamanho fixo | hard coding 
for (let indice; indice < 5; indice++){
    console.log(frutas[indice]);
}

// Percorrendo uma lista com o for | ajusta ao tamanho da lista
for (let indice; indice < frutas.length; indice++){
    console.log(frutas[indice]);
    if (frutas[indice] == "Pitaya"){
        console.log("Eu gosto de " + frutas[indice]);
    }
}
// Este programa localiza quantas vezes a palavra escolhida aparece no texto
// To Fix: 
// Quando tem algum ponto : , . perto da palavra, ele reconhece tudo junto, então tenho que tirar os pontos, para verificar corretamente
// Possível solução, fazer uma função, se tiver ponto, nós vamos retornar um bool, verdadeiro e ele não adiciona a palavra a concatenação

const VerificarPontos = (palavraMontada: string) => {
    let pontos: string[] = [",", ".",":",";","!","?",`"`,`'`];    
    
     for(let p = 0; p < pontos.length; p++)
    {
        if(palavraMontada == pontos[p])
        {
          return true;
        }
            
    }

}

let texto = prompt("Informe o texto.");

let palavra = prompt("Insira a palavra que quer procurar no texto");

let listaPalavras: string[] = [];

let cont: number = 0;

let temPonto = false;

// Separar as palavras para poder verificar quais contem a {palavra}
// Com método Split
// let listaPalavras = texto?.split(" ")

// Sem Split
console.log(texto![1]);

let montandoPalavra: string = "";
let palavraRevisada: string = "";
console.log(texto!.length)
for(let i = 0; i < texto!.length; i++)
{
    // Precisa refatorar esse if
    if(texto![i] != " ")
    {   
        // Se não for verdade que tem um ponto, então adiciona ele a montandoPalavra
        if(!(VerificarPontos(texto![i]))){
            montandoPalavra += texto![i];
            console.log("Montando Palavra: " + montandoPalavra);
        }
    }
    else{
        console.log("Palavra Montada: " + montandoPalavra);
        if (montandoPalavra.toLowerCase() == palavra?.toLowerCase()){
            cont++;
        }
        listaPalavras.push(montandoPalavra);
        montandoPalavra = "";
        palavraRevisada = "";
    }
}

let contFE:number = 0;
console.log(`O tamanho da listaPalavras: ${listaPalavras}`)

// Criar contador para fazer as contagems de quantas vezes a palavra se repete
listaPalavras.forEach(palavrinha => {
    if(palavrinha.toLowerCase() == palavra?.toLowerCase()){
        contFE++;
    }
});

console.log(`A palavra: ${palavra}, aparareceu ${cont} vezes no texto inserido `);

console.log(`Usando método Foreach\n A palavra: ${palavra}, aparareceu ${contFE} vezes no texto inserido `);
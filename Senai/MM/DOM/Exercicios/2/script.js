const adicionarLista = () => {
    let adicionarL = document.createElement("li");

    adicionarL.textContent = "Lista";

    let caminhoLista = document.getElementById("listinha");
    
    caminhoLista.appendChild(adicionarL);

}

const removerLista = () => {
    //adicionarL = document.createElement("li");

    //let selecionarL = document.getElementsByTagName("li");

    let selecionarL = document.getElementById("1");

    let caminhoLista = document.getElementById("listinha");

    caminhoLista.removeChild(selecionarL);

}
 

// O meu deu errado porque para remover eu tenho que colocar o caminho do pai!
// Eu estava colocando pai e entre parenteses o filho, portanto, não localizava nenhum parametro
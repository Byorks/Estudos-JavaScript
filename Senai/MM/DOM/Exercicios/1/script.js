const adicionarParagrafo = () => {
    let criarP = document.createElement("p");

    criarP.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    let div1 = document.getElementById("div-p");
    
    div1.appendChild(criarP);

}
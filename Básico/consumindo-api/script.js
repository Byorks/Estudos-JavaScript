const url = 'https://dummyjson.com/products?limit=0'
let products = [];

// Ideias/Desafios do Diogo

// Criar table e preencher com os produtos
// E fazer um filtro para digitar e pesquisar o nome do produto
// Separar as funções no que elas especificamente estão fazendo

const listProducts= document.querySelector('#list-products');
const loadingElement = document.querySelector('#loading');
const productsContainer = document.querySelector('#products-container');
const tableBody = document.querySelector('#products-container');
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');

console.log(searchInput);

// GET all posts
const getAllProducts = async () => {
    const response = await fetch(url);
    console.log(response);
    
    const data = await response.json();

    products = data.products;

    renderProducts(products);
}

const renderProducts = (products) => {
    // limpa a tela para que os produtos não se acomulem
    tableBody.innerHTML = "";

    // Pegando a lista e passando por cada produto
    products.forEach((product) => {

        const image = document.createElement("img");
        const tr = document.createElement("tr");
        const tdImage = document.createElement("td");
        const tdTitle = document.createElement("td");
        const tdPrice = document.createElement("td");

        // Atribuindo os valores 
        tdTitle.innerHTML = product.title;
        tdPrice.innerHTML = product.price;
        image.src = product.thumbnail;

        tdImage.append(image);

        tr.append(tdImage, tdTitle, tdPrice);

        // Adiciona um filhinho no final da lista do elemento mãe
        tableBody.appendChild(tr);
    })
}

const filterProducts = () => {
    let searchValue = searchInput.value;

    if(searchValue != "") {
        
        let filteredProducts = products.filter((prod) => prod.title.toLowerCase().includes(searchValue.toLowerCase()))
        renderProducts(filteredProducts);
    }
    else {
        renderProducts(products);
    }

    
    // backspace é um imput :D
}

searchInput.addEventListener("input", filterProducts);

listProducts.addEventListener("click", getAllProducts);





// Codigo do snoopy
// jk jkrt55668fdf9f9fgfv9cfv9i7xcv9cfvkdfklfklfflflfl

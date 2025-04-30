const url = 'https://dummyjson.com/products'

// Ideias/Desafios do Diogo

// Criar table e preencher com os produtos
// E fazer um filtro para digitar e pesquisar o nome do produto


const loadingElement = document.querySelector('#loading');
const productsContainer = document.querySelector('#products-container');
const tableBody = document.querySelector('#products-container');

// GET all posts
const getAllProducts = async () => {
    const response = await fetch(url);
    console.log(response);
    
   const data = await response.json();
   
   console.log(data.products);
    
   // Pegando a lista e passando por cada produto
   data.products.forEach((product) => {

    console.log(product);

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




// Codigo do snoopy
// jk jkrt55668fdf9f9fgfv9cfv9i7xcv9cfvkdfklfklfflflfl

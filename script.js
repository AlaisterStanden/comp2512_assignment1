import config from './data-minifed.json' with {type: 'json'};

const PRODUCT_LIM = 20;
const products = config.products.slice(0, PRODUCT_LIM);

const container = document.getElementById("results");


products.forEach((product) => {
    const card = document.createElement("div"); //new empty div in memory
    card.classList.add("product-card");

    const image = document.createElement("img");// create new empty image
    image.src = product.thumbnail;
    image.alt = product.title;
    card.appendChild(image);

    const title = document.createElement("p");
    title.textContent = product.title;
    card.appendChild(title);


    const price = document.createElement("p");
    price.textContent = `$${product.price.toFixed(2)}`;
    card.appendChild(price);

    const addButton = document.createElement("button");
    addButton.textContent = "+";
    card.appendChild(addButton);

    image.addEventListener("click", () => {
        alert("Product id: " + product.id);
    });

    addButton.addEventListener("click", () => {
        alert("Product id: " + product.id + " \ntitle: " + product.title);
    });

    container.appendChild(card); //adds it to the page in container

});


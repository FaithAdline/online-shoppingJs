document.addEventListener('DOMContentLoaded', function () {
    const cart = document.getElementById('cart');
    const productsSection = document.getElementById('products');

    const products = [
        { id: 1, name: 'Laptop', category: 'Electronics', price: 80000, discount: 10,image: 'img/Laptop.jpg', alt: "laptop" },
        { id: 2, name: 'Smartphone', category: 'Electronics', price: 55400, discount: 5,image: "img/smartphone.jpg",alt: "smartphone" },
        { id: 3, name: 'Bananas', category: 'Grocery', price: 150, discount: 0,image: "img/Bananas.jpg",alt: "Bananas" },
        { id: 4, name: 'Tomatoes', category: 'Grocery', price: 100, discount: 5, name: "Tomatoes",image: "img/Tomatoes.jpg", },
        { id: 5, name: 'Watermelon', category: 'Grocery', price: 500, discount: 0,name: "Watermelon", image: "img/Watermelon.jpg"},
        { id: 6, name: 'Mangoes', category: 'Grocery', price: 200, discount: 0,name: "Mangoes",image: "img/Mangoes.jpg"  },
        { id: 7, name: 'Oranges', category: 'Grocery', price: 180, discount: 0, name: "Oranges",image: "img/Oranges.jpg"},
        { id: 8, name: 'Lemon', category: 'Grocery', price: 100, discount: 0 },
        { id: 9, name: 'Spinach', category: 'Grocery', price: 200, discount: 0 },
        { id: 10, name: 'Kales', category: 'Grocery', price: 250, discount: 0 },
        { id: 11, name: 'Cauliflower', category: 'Grocery', price: 300, discount: 0 },
        { id: 12, name: 'Cabbages', category: 'Grocery', price: 150, discount: 0 },
        { id: 13, name: 'Beetroots', category: 'Grocery', price: 220, discount: 0 },
        { id: 14, name: 'Radishes', category: 'Grocery', price: 120, discount: 0 },
        { id: 15, name: 'Carrots', category: 'Grocery', price: 180, discount: 0 },
        { id: 16, name: 'Onions', category: 'Grocery', price: 100, discount: 0 },
        { id: 17, name: 'Apples', category: 'Grocery', price: 200, discount: 0 },
        { id: 18, name: 'Pears', category: 'Grocery', price: 205, discount: 0 },
        { id: 19, name: 'Chinese Cabbage', category: 'Grocery', price: 159, discount: 0 },
        { id: 20, name: 'Strawberries', category: 'Grocery', price: 300, discount: 0 },
        { id: 21, name: 'Pineapple', category: 'Grocery', price: 275, discount: 0 },
        { id: 22, name: 'Lettuce', category: 'Grocery', price: 192, discount: 0 },
        { id: 23, name: 'Potatoes', category: 'Grocery', price: 1008, discount: 0 },
        { id: 24, name: 'Managu', category: 'Grocery', price: 200, discount: 0 },
        { id: 25, name: 'Cucumber', category: 'Grocery', price: 195, discount: 0 },
        { id: 26, name: 'Avocado', category: 'Grocery', price: 205, discount: 0 },
        { id: 27, name: 'Pepper', category: 'Grocery', price: 125, discount: 0 },
        { id: 28, name: 'Peas', category: 'Grocery', price: 100, discount: 0 },
    ];


    let cartItems = [];

    function updateCart() {
        cart.textContent = `Cart (${cartItems.length} items)`;
    }

    function renderProducts() {
        productsSection.innerHTML = '';

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            const imageElement = document.createElement('img');
            imageElement.src = product.image; // Set image source from JSON
            imageElement.alt = product.alt; // Set alt text from JSON

            const detailsElement = document.createElement('div');
            detailsElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price}</p>
                <p>Discount: ${product.discount}%</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;

            productElement.appendChild(imageElement);
            productElement.appendChild(detailsElement);

            productsSection.appendChild(productElement);
        });
    }

    window.addToCart = function (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cartItems.push(product);
            updateCart();
        }
    };

    renderProducts();
});

function convertJson(){
const jsonData = {
    "products": [
      {
        "name": "Laptop",
        "image": "img/Laptop.jpg",
        "alt": "laptop"
      },
      {
        "name": "Smartphone",
        "image": "img/smartphone.jpg",
        "alt": "smartphone"
      },
      {
        "name": "Bananas",
        "image": "img/Bananas.jpg",
        "alt": "Bananas"
      },
      {
        "name": "Tomatoes",
        "image": "img/Tomatoes.jpg",
        "alt": "Tomatoes"
      },
      {
        "name": "Watermelon",
        "image": "img/Watermelon.jpg",
        "alt": "Watermelon"
      },
      {
        "name": "Mangoes",
        "image": "img/Mangoes.jpg",
        "alt": "Mangoes"
      },
      {
        "name": "Oranges",
        "image": "img/Oranges.jpg",
        "alt": "Oranges"
      },
      {
        "name": "Lemon",
        "image": "img/Lemon.jpg",
        "alt": "Lemon"
      },
      {
        "name": "Spinach",
        "image": "img/Spinach.jpg",
        "alt": "Spinach"
      },
      {
        "name": "Kales",
        "image": "img/Kales.jpg",
        "alt": "Kales"
      },
      {
        "name": "Cauliflower",
        "image": "img/Cauliflower.jpg",
        "alt": "Cauliflower"
      },
      {
        "name": "Cabbages",
        "image": "img/Cabbage.jpg",
        "alt": "Cabbages"
      },
      {
        "name": "Beetroots",
        "image": "img/Beetroots.jpg",
        "alt": "Beetroots"
      },
      {
        "name": "Radishes",
        "image": "img/Raddishes.jpg",
        "alt": "Radishes"
      },
      {
        "name": "Carrots",
        "image": "img/Carrots.jpg",
        "alt": "Carrots"
      },
      {
        "name": "Onions",
        "image": "img/Onions.jpg",
        "alt": "Onions"
      },
      {
        "name": "Apples",
        "image": "img/APPLE.jpg",
        "alt": "Apples"
      },
      {
        "name": "Pears",
        "image": "img/pears.jpg",
        "alt": "Pears"
      },
      {
        "name": "Chinese Cabbage",
        "image": "img/Chinese cabbage.jpg",
        "alt": "Chinese Cabbage"
      },
      {
        "name": "Strawberries",
        "image": "img/Strawberries.jpg",
        "alt": "Strawberries"
      },
      {
        "name": "Pineapple",
        "image": "img/Pineapple.jpg",
        "alt": "Pineapple"
      },
      {
        "name": "Lettuce",
        "image": "img/Lettuce.jpg",
        "alt": "Lettuce"
      },
      {
        "name": "Potatoes",
        "image": "img/Potatoes.jpg",
        "alt": "Potatoes"
      },
      {
        "name": "Managu",
        "image": "img/Managu.jpg",
        "alt": "Managu"
      },
      {
        "name": "Cucumber",
        "image": "img/Cucumber.jpg",
        "alt": "Cucumber"
      },
      {
        "name": "Avocado",
        "image": "img/Avocado.jpg",
        "alt": "Avocado"
      },
      {
        "name": "Pepper",
        "image": "img/Pepper.jpg",
        "alt": "Pepper"
      },
      {
        "name": "Peas",
        "image": "img/peas.jpg",
        "alt": "peas"
      }
    ]
  };
  
  const productsObject = {
    products: jsonData.products.map(product => ({
      name: product.name,
      image: product.image,
      alt: product.alt
    }))
  };
  
 return productsObject;
}

convertJson()
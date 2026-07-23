const productsData = [
  {
    id: 1,
    name: "T-Shirt",
    category: "Fashion",
    price: 999,
    productImg:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Jacket",
    category: "Fashion",
    price: 3500,
    productImg:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Sneakers",
    category: "Fashion",
    price: 2800,
    productImg:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "Shoes",
    category: "Fashion",
    price: 2500,
    productImg:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    name: "Wrist Watch",
    category: "Accessories",
    price: 4500,
    productImg:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    name: "Sunglasses",
    category: "Accessories",
    price: 1800,
    productImg:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    name: "Handbag",
    category: "Accessories",
    price: 3200,
    productImg:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    name: "Backpack",
    category: "Accessories",
    price: 2200,
    productImg:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    name: "Smartphone",
    category: "Electronics",
    price: 24999,
    productImg:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 10,
    name: "Headphones",
    category: "Electronics",
    price: 4999,
    productImg:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 11,
    name: "Laptop",
    category: "Electronics",
    price: 65999,
    productImg:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 12,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 2999,
    productImg:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 13,
    name: "Coffee Maker",
    category: "Home",
    price: 5999,
    productImg:
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 14,
    name: "Modern Chair",
    category: "Home",
    price: 8500,
    productImg:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 15,
    name: "Table Lamp",
    category: "Home",
    price: 1499,
    productImg:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 16,
    name: "Ceramic Vase",
    category: "Home",
    price: 999,
    productImg:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&auto=format&fit=crop&q=60"
  }
];
let cards = document.querySelector(".container");
let searchBtn = document.querySelector("#searchBtn");
let inp = document.querySelector("#searchInput");

function renderProducts(productsList) {

    cards.innerHTML = "";

    if (productsList.length === 0) {
        cards.innerHTML = `
            <div class="no-products">
                <h2>No products found 😔</h2>
                <p>Try searching for another product.</p>
            </div>
        `;

        return;
    }

    productsList.forEach((item) => {

        let singleCard = document.createElement("div");

        singleCard.classList.add("card");

        singleCard.innerHTML = `
            <div class="image-container">
                <img src="${item.productImg}" alt="${item.name}">
            </div>

            <div class="product-info">

                <span class="category">
                    ${item.category}
                </span>

                <h2>${item.name}</h2>

                <div class="card-bottom">

                    <p class="price">
                        ₹${item.price.toLocaleString("en-IN")}
                    </p>

                    <button class="cart-btn">
                        Add to Cart
                    </button>

                </div>

            </div>
        `;

        cards.append(singleCard);
    });
}


// Initial render
renderProducts(productsData);


// Search functionality
searchBtn.addEventListener("click", () => {

    let inpVal = inp.value.trim().toLowerCase();

    let filteredProducts = productsData.filter((product) => {

        return (
            product.name.toLowerCase().includes(inpVal) ||
            product.category.toLowerCase().includes(inpVal)
        );

    });

    renderProducts(filteredProducts);
});


// Search when pressing Enter
inp.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        searchBtn.click();
    }

});
document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            id: 1,
            name: "Rampal Cycle Store - ₹3,800",
            category: "bikes",
            price: 4500,
            date: "2025-04-16",
            description: "A good cycle store near me will provide a variety of bikes, including options for children and adults...",
            keywords: ["cycle shop nearby", "sports shop in noida", "avon wilder cycle", "bicycle workout machine benefits"],
            image: "rampalcyclestore.png"
        },
        {
            id: 2,
            name: "Trusted Second Hand Mobile in 2025 - ₹4,500",
            category: "cell-phones",
            price: 7000,
            date: "2025-04-26",
            description: "Finding a trustworthy old phone is simpler than ever in 2025...",
            keywords: ["second hand mobile", "trusted used phones", "Refit Global", "cheap iPhone"],
            image: "appleios.png"
        },
        {
            id: 3,
            name: "Hero Sprint Road Bike - ₹3,500",
            category: "bikes",
            price: 5500,
            date: "2025-04-20",
            description: "The Hero Sprint Road Bike is perfect for beginners and seasoned cyclists alike. Designed for smooth city rides and adventure trails, it features a lightweight frame, strong brakes, and a comfortable saddle. Ideal for fitness, commuting, and casual rides.",
            keywords: ["hero cycle", "road bikes for sale", "bikes near me", "fitness bikes"],
            image: "herobike.png"
          },
          {
            id: 4,
            name: "Samsung Galaxy S22 Used - ₹2,000",
            category: "cell-phones",
            price: 18000,
            date: "2025-04-24",
            description: "The Samsung Galaxy S22 offers flagship features at a lower price when purchased second-hand. Enjoy its powerful camera system, vibrant AMOLED display, and long-lasting battery. Ideal for users who want premium performance without the premium price tag.",
            keywords: ["samsung used phone", "second hand samsung", "cheap galaxy s22", "refurbished mobiles"],
            image: "samsung.png"
          }
          
    ];

    const productList = document.getElementById("productList");
    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");
    const sortBy = document.getElementById("sortBy");
    const toggleCategories = document.getElementById("toggleCategories");
    const categoriesContent = document.getElementById("categoriesContent");
    const categoriesColumn = document.getElementById("categoriesColumn");
    const productsColumn = document.getElementById("productsColumn");

    let filteredProducts = [...products];

    function renderProducts(productsToRender) {
        productList.innerHTML = "";
        productsToRender.forEach(product => {
            const shortDescription = product.description.length > 100 
                ? product.description.substring(0, 100) + "..." 
                : product.description;

            const card = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 d-flex flex-column">
                        <div style="height: 250px; overflow: hidden; display: flex; align-items: center; justify-content: center; background-color: #f8f9fa;">
                            <img src="${product.image}" alt="${product.name}" style="width: 65%; height: 100%; object-fit: cover;">
                        </div>
                        <div class="card-body d-flex flex-column flex-grow-1">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text"><strong>Price:</strong> ₹${product.price.toLocaleString()}</p>
                            <p class="card-text">${shortDescription}</p>
                            <p class="card-text"><strong>Contact:</strong> ${product.contactInfo || "Not available"}</p>
                        </div>
                        <div class="card-footer text-muted text-end">
                            ${product.date}
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += card;
        });
    }

    priceRange.addEventListener("input", () => {
        const maxPrice = priceRange.value;
        priceValue.textContent = `0 - ${maxPrice}`;
        filteredProducts = products.filter(product => product.price <= maxPrice);
        renderProducts(filteredProducts);
    });

    categoriesContent.addEventListener("click", event => {
        if (event.target.tagName === "LI") {
            const selectedCategory = event.target.getAttribute("data-category");
            filteredProducts = products.filter(product => product.category === selectedCategory);
            renderProducts(filteredProducts);
        }
    });

    sortBy.addEventListener("change", () => {
        const sort = sortBy.value;
        let sortedProducts = [...filteredProducts];
        
        if (sort === "priceLowHigh") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sort === "priceHighLow") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sort === "dateNewOld") {
            sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sort === "dateOldNew") {
            sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        renderProducts(sortedProducts);
    });

    toggleCategories.addEventListener("click", () => {
        if (categoriesColumn.classList.contains("collapsed")) {
            categoriesColumn.classList.remove("collapsed");
            productsColumn.classList.remove("expanded");
            categoriesContent.style.display = "block";
            toggleCategories.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Community';
        } else {
            categoriesColumn.classList.add("collapsed");
            productsColumn.classList.add("expanded");
            categoriesContent.style.display = "none";
            toggleCategories.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Community';
        }
    });

    // Initial render
    renderProducts(products);
});

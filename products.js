document.addEventListener("DOMContentLoaded", function () {
    //Product data
    const products = [
        { id: 1, name: "Cozy Apartment", category: "apts", price: 12000, date: "2023-10-01", bedrooms: 2, bathrooms: 1, sqft: 800, image: "apt1.png", description: "A premium 2BHK apartment in upscale Bandra West, Mumbai. Fully furnished with modular kitchen, marble flooring, and a balcony with sea breeze. Ideal for families or working professionals. Close to cafes, schools, and Bandra-Worli Sea Link.",  location: {
            address: "12th Floor, Silver Heights, Bandra West, Mumbai - 400050",
            lat: 19.0556,
            lng: 72.8222
        }, amenities: ["24/7 Security", "Power Backup", "Lift", "Parking", "AC", "Furnished", "Near Metro"], panorama: "panorama-viewer.html", owner: {
            name: "Rahul Mehta",
            phone: "+91 98765 43210",
            email: "rahul.mehta@example.com",
            joinDate: "2021-08-10"
        },
        reviews: [
            {
                id: 1,
                user: "Priya Sharma",
                rating: 5,
                date: "2023-11-15",
                comment: "Perfect home! The society is well-maintained, and the location is superb."
            },
            {
                id: 2,
                user: "Vikram Singh",
                rating: 4,
                date: "2023-10-20",
                comment: "Great apartment, but the parking space is a bit tight."
            }
        ]},
        { id: 2, name: "Luxury Villa", category: "sale", price: 500000, date: "2023-10-05", bedrooms: 5, bathrooms: 4, sqft: 3000, image: "villa1.png" },
        { id: 3, name: "Shared Room", category: "shared", price: 5000, date: "2023-10-10", bedrooms: 1, bathrooms: 1, sqft: 200, image: "room1.png" },
        { id: 4, name: "Office Space", category: "office", price: 20000, date: "2023-10-15", sqft: 1200, image: "office1.png" },
        { id: 5, name: "Parking Spot", category: "parking", price: 10000, date: "2023-10-20", image: "parking1.png" },
        { id: 6, name: "Vacation Rental", category: "vacation", price: 3000, date: "2023-10-25", bedrooms: 3, bathrooms: 2, sqft: 1500, image: "vacation1.png" },
    ];
   
   
    // Function to get product by ID
    function getProductById(id) {
        return products.find(product => product.id === parseInt(id));
    }


    // Initialize wishlist
    let wishlist = [];
    try {
        const storedWishlist = localStorage.getItem('wishlist');
        wishlist = storedWishlist ? JSON.parse(storedWishlist) : [];
        if (!Array.isArray(wishlist)) {
            throw new Error("Wishlist is not an array");
        }
    } catch (e) {
        console.error("Error loading wishlist:", e);
        wishlist = [];
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }


    // DOM Elements
    const productList = document.getElementById("productList");
    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");
    const dynamicFilters = document.getElementById("dynamicFilters");
    const sortBy = document.getElementById("sortBy");
    const toggleFilters = document.getElementById("toggleFilters");
    const filtersContent = document.getElementById("filtersContent");
    const toggleCategories = document.getElementById("toggleCategories");
    const categoriesContent = document.getElementById("categoriesContent");
    const categoriesColumn = document.getElementById("categoriesColumn");
    const productsColumn = document.getElementById("productsColumn");


    // Create sticky wishlist button
    function createStickyWishlistButton() {
        const stickyBtn = document.createElement('a');
        stickyBtn.href = 'wishlist.html';
        stickyBtn.className = 'sticky-wishlist-btn';
        stickyBtn.innerHTML = `
            <i class="fas fa-heart"></i>
            <span class="wishlist-count">${wishlist.length}</span>
        `;
        stickyBtn.title = 'View Wishlist';
        document.body.appendChild(stickyBtn);
       
        // Add styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .sticky-wishlist-btn {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 60px;
                height: 60px;
                background-color: #ff4757;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                text-decoration: none;
                transition: all 0.3s ease;
            }
            .sticky-wishlist-btn:hover {
                background-color: #ff6b81;
                transform: scale(1.1);
            }
            .wishlist-count {
                position: absolute;
                top: -5px;
                right: -5px;
                background-color: white;
                color: #ff4757;
                border-radius: 50%;
                width: 24px;
                height: 24px;
                font-size: 14px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);
       
        return stickyBtn;
    }


    // Initialize sticky button
    const stickyWishlistBtn = createStickyWishlistButton();


    // Update wishlist count
    function updateWishlistCount() {
        const countElement = stickyWishlistBtn.querySelector('.wishlist-count');
        if (countElement) {
            countElement.textContent = wishlist.length;
        }
    }


    // Wishlist Functions
    function saveWishlist() {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
    }


    function toggleWishlist(productId) {
        const index = wishlist.findIndex(item => item && item.id === productId);
        if (index === -1) {
            const product = products.find(p => p.id === productId);
            if (product) wishlist.push(product);
        } else {
            wishlist.splice(index, 1);
        }
        saveWishlist();
        renderProducts(products.filter(p => p.price <= parseInt(priceRange.value)));
    }


    function isInWishlist(productId) {
        return Array.isArray(wishlist) && wishlist.some(item => item && item.id === productId);
    }


    // Product Display Functions
    function renderDynamicFilters(category) {
        let filtersHTML = "";
        switch (category) {
            case "apts":
                filtersHTML = `
                    <div class="row">
                        <div class="col-md-6">
                            <label for="milesFromLocation">Miles from Location</label>
                            <input type="text" id="milesFromLocation" class="form-control mb-3" placeholder="Miles from zip">
                        </div>
                        <div class="col-md-6">
                            <label for="price">Rooms</label>
                            <input type="number" id="priceMin" class="form-control mb-3" placeholder="Min">
                            <input type="number" id="priceMax" class="form-control mb-3" placeholder="Max">
                        </div>
                    </div>
                `;
                break;
            default:
                filtersHTML = `<p>No additional filters for this category.</p>`;
        }
        dynamicFilters.innerHTML = filtersHTML;
    }


    function filterAndSortProducts() {
        const price = parseInt(priceRange.value);
        const sort = sortBy.value;
        let filteredProducts = products.filter(product => product.price <= price);


        switch (sort) {
            case "priceLowHigh":
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case "priceHighLow":
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case "dateNewOld":
                filteredProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case "dateOldNew":
                filteredProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
        }


        renderProducts(filteredProducts);
    }


    function renderProducts(productsToRender) {
        if (!productList) return;
       
        productList.innerHTML = "";
        productsToRender.forEach(product => {
            const isWishlisted = isInWishlist(product.id);
            const card = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                        <img src="${product.image || 'placeholder.png'}" class="card-img-top" alt="${product.name || 'Product'}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.name || 'Untitled'}</h5>
                            <p class="card-text text-primary fw-bold">₹${product.price.toLocaleString() || '0'}</p>
                            ${product.bedrooms ? `<p class="card-text">${product.bedrooms} BR | ${product.bathrooms || 0} BA</p>` : ''}
                            ${product.sqft ? `<p class="card-text">${product.sqft.toLocaleString()} sqft</p>` : ''}
                            <p class="card-text text-muted small mt-auto">Posted: ${product.date || 'N/A'}</p>
                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <a href="product-details.html?id=${product.id}" class="btn btn-sm btn-primary">Details</a>
                                <button class="btn btn-sm wishlist-btn" data-id="${product.id}" aria-label="${isWishlisted ? 'Remove from' : 'Add to'} wishlist">
                                    <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += card;
        });


        document.querySelectorAll('.wishlist-btn').forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-id'));
                if (!isNaN(productId)) toggleWishlist(productId);
            });
        });
    }


    // Event Listeners
    document.querySelectorAll(".list-group-item").forEach(item => {
        item.addEventListener("click", () => {
            const category = item.getAttribute("data-category");
            renderDynamicFilters(category);
            filterAndSortProducts();
        });
    });


    priceRange.addEventListener("input", () => {
        priceValue.textContent = `0 - ${priceRange.value}`;
        filterAndSortProducts();
    });


    sortBy.addEventListener("change", filterAndSortProducts);


    toggleFilters.addEventListener("click", () => {
        filtersContent.style.display = filtersContent.style.display === "none" ? "block" : "none";
        toggleFilters.innerHTML = filtersContent.style.display === "none"
            ? '<i class="fa-solid fa-chevron-down"></i>'
            : '<i class="fa-solid fa-chevron-up"></i>';
    });


    toggleCategories.addEventListener("click", () => {
        const isCollapsed = categoriesColumn.classList.toggle("collapsed");
        productsColumn.classList.toggle("expanded", isCollapsed);
        categoriesContent.style.display = isCollapsed ? "none" : "block";
        toggleCategories.innerHTML = isCollapsed
            ? '<i class="fa-solid fa-chevron-down"></i> Categories'
            : '<i class="fa-solid fa-chevron-up"></i> Categories';
    });


    // Initialization
    priceValue.textContent = `0 - ${priceRange.value}`;
    renderDynamicFilters("apts");
    filterAndSortProducts();
    updateWishlistCount();
});

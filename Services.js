document.addEventListener("DOMContentLoaded", function () {
    const salesProducts = [
        { 
            id: 15, 
            name: "Best Website Designing Company in Delhi", 
            category: "computers", 
            price: 4500, 
            date: "2025-04-25", 
            description: "Looking for the Best Website Designing Company in Delhi? e-Definers Technology Pvt Ltd offers world-class web solutions to help your business grow online, with expert web design, UI/UX, and development services.", 
            image: "website_design_company.png",
            serviceLink: "", 
            contactInfo: "+91- [999951533]"
        },
        { 
            id: 26, 
            name: "Bulk Email Services – Boost Your Business!", 
            category: "computers", 
            price: 3800, 
            date: "2025-04-25", 
            description: "Reach thousands of inboxes in one go with targeted campaigns at affordable rates. 100% delivery reports. Powered by Viraaj Digital. Contact now for more details.", 
            image: "BULK.png",
            serviceLink: "https://viraajdigital.com/services/bulk-email-service/",
            contactInfo: "+91- [9594349228]"
        },
        { 
            id: 27, 
            name: "Graphic Design Course in Delhi", 
            category: "lesson", 
            price: 5000, 
            date: "2025-04-25", 
            description: "Unlock your creative potential with TechExplica’s Graphic Design course in Delhi. Master top design software, explore visual storytelling, and build a standout portfolio through hands-on projects. Guided by expert faculty, our course is ideal for beginners and professionals alike. Step into the design industry with confidence and skills that match today’s creative demands.", 
            image: "gd.png",
            serviceLink: "https://techexplica.com/graphic-design-course-in-delhi/",
            contactInfo: "+91-9871112968"
        },
        { 
            id: 28, 
            name: "Boost Your Career with Business Intelligence Training in Noida!", 
            category: "lesson", 
            price: 1000, 
            date: "2025-04-26", 
            description: "Unlock the power of data with our Business Intelligence Training in Noida. Learn to transform raw data into actionable insights using leading BI tools like Power BI, Tableau, SQL, and Excel. Our expert-led course is designed for both beginners and professionals aiming to master data visualization, reporting, and analysis.\n\n✅ Industry-Relevant Curriculum\n✅ Hands-On Projects & Case Studies\n✅ Certification & Placement Support\n✅ Flexible Weekday/Weekend Batches\n\nLimited seats available! Contact us today!", 
            image: "business.png",
            serviceLink: "https://www.cetpainfotech.com/technolgy/business-analyst-training",
            contactInfo: "+91- [9112172602]"
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

    let filteredProducts = [...salesProducts];

    function renderProducts(products) {
        productList.innerHTML = "";
        products.forEach(product => {
            const shortDescription = product.description.length > 100 
                ? product.description.substring(0, 100) + "..." 
                : product.description;
    
            const card = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 d-flex flex-column">
                        <div style="height: 250px; overflow: hidden; display: flex; align-items: center; justify-content: center; background-color: #f8f9fa;">
                            <img src="${product.image}" alt="${product.name}" 
                                 style="width: 65%; height: 100%; object-fit: cover;">
                        </div>
                        <div class="card-body d-flex flex-column flex-grow-1">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text"><strong>Price:</strong> ₹${product.price.toLocaleString()}</p>
                            <p class="card-text">${shortDescription}</p>
                            <p class="card-text"><strong>Contact:</strong> ${product.contactInfo || "Not available"}</p>
                            ${product.serviceLink ? `<a href="${product.serviceLink}" target="_blank" class="btn btn-primary mt-auto">Visit Service</a>` : ""}
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

    // Price filter logic
    priceRange.addEventListener("input", () => {
        const maxPrice = priceRange.value;
        priceValue.textContent = `₹0 - ₹${maxPrice}`;
        
        filteredProducts = salesProducts.filter(product => product.price <= maxPrice);
        renderProducts(filteredProducts);
    });

    // Category filter logic
    categoriesContent.addEventListener("click", event => {
        if (event.target.tagName === "LI") {
            const selectedCategory = event.target.getAttribute("data-category");
            filteredProducts = salesProducts.filter(product => product.category === selectedCategory);
            renderProducts(filteredProducts);
        }
    });

    // Sort logic
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

    // Toggle categories visibility
    toggleCategories.addEventListener("click", () => {
        if (categoriesColumn.classList.contains("collapsed")) {
            categoriesColumn.classList.remove("collapsed");
            productsColumn.classList.remove("expanded");
            categoriesContent.style.display = "block";
            toggleCategories.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Categories';
        } else {
            categoriesColumn.classList.add("collapsed");
            productsColumn.classList.add("expanded");
            categoriesContent.style.display = "none";
            toggleCategories.innerHTML = '<i class="fa-solid fa-chevron-down"></i> Categories';
        }
    });

    // Initial render
    renderProducts(salesProducts);
});

document.addEventListener("DOMContentLoaded", function () {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    const wishlistContainer = document.getElementById("wishlistItems");


    if (wishlistItems.length === 0) {
        wishlistContainer.innerHTML = "<p>Your wishlist is empty!</p>";
    } else {
        wishlistItems.forEach(item => {
            const itemHTML = `
                <div class="card">
                    <img src="${item.image}" alt="${item.name}">
                    <h5>${item.name}</h5>
                    <p>${item.price}</p>
                    <button class="remove-btn" data-id="${item.id}">Remove</button>
                </div>`;
            wishlistContainer.innerHTML += itemHTML;
        });


        document.querySelectorAll(".remove-btn").forEach(button => {
            button.addEventListener("click", function () {
                const itemId = parseInt(this.dataset.id);
                const updatedWishlist = wishlistItems.filter(item => item.id !== itemId);
                localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
                location.reload();
            });
        });
    }
});





document.addEventListener('DOMContentLoaded', function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
   
    // Debug: Check what ID we're getting
    console.log("Product ID from URL:", productId);
   
    // Get the product
    const product = getProductById(productId);
   
    // Debug: Check what product we found
    console.log("Found product:", product);
   
    if (!product) {
        console.error("Product not found for ID:", productId);
        alert('Product not found');
        window.location.href = 'products.html';
        return;
    }


    // 1. Populate Product Data
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-address').textContent = product.location.address;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('full-address').textContent = product.location.address;
    document.getElementById('owner-name').textContent = product.owner.name;
    document.getElementById('owner-phone').textContent = product.owner.phone;
    document.getElementById('owner-email').textContent = product.owner.email;
    document.getElementById('member-since').textContent = new Date(product.owner.joinDate).getFullYear();


    // Populate the price badge dynamically
document.querySelector('.badge.bg-primary').textContent = `₹${product.price}/month`;


   
    // 2. Set up Carousel
    // 2. Set up Carousel
const carouselInner = document.getElementById('carousel-inner');
carouselInner.innerHTML = ''; // Clear existing items


product.images.forEach((image, index) => {
    const item = document.createElement('div');
    item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
    item.innerHTML = `<img src="${image}" class="d-block w-100" alt="${product.name}" style="height: 400px; object-fit: cover;">`;
    carouselInner.appendChild(item);
});
    // 3. Set up 360° View Link
    document.getElementById('panorama-link').href = `panorama-viewer.html?image=${product.panorama}`;


    // 4. Populate Details
    const detailsList = document.getElementById('product-details');
    const details = [
        { icon: 'bed', text: `${product.bedrooms} Bedrooms` },
        { icon: 'bath', text: `${product.bathrooms} Bathrooms` },
        { icon: 'ruler-combined', text: `${product.sqft} sqft` },
        { icon: 'calendar-alt', text: `Available: ${new Date(product.date).toLocaleDateString()}` },
        ...product.amenities.map(amenity => ({ icon: 'check-circle', text: amenity }))
    ];


    details.forEach(detail => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<i class="fas fa-${detail.icon} me-2"></i>${detail.text}`;
        detailsList.appendChild(li);
    });




  // 5. Initialize Map
  function initMap() {
    const location = product.location;
    const map = L.map('product-map').setView([location.lat, location.lng], 15);


    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);


    // Add a marker
    L.marker([location.lat, location.lng]).addTo(map)
        .bindPopup(product.name)
        .openPopup();
}




// Load the map once the DOM is ready and product is fetched
if (product && product.location) {
    initMap();
}




// 6. Set up Reviews
function renderReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';
   
    if (!product.reviews || product.reviews.length === 0) {
        reviewsContainer.innerHTML = '<p class="text-muted">No reviews yet. Be the first to review!</p>';
        document.getElementById('average-rating').textContent = '0.0';
        return;
    }
   
    // Calculate average rating
    const avgRating = product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length;
    document.getElementById('average-rating').textContent = avgRating.toFixed(1);
   
    // Render each review
    product.reviews.forEach(review => {
        const reviewEl = document.createElement('div');
        reviewEl.className = 'review-card mb-3 p-3 border rounded';
        reviewEl.innerHTML = `
            <div class="d-flex justify-content-between mb-2">
                <span class="review-user fw-bold">${review.user}</span>
                <div>
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                    <span class="review-date ms-2 text-muted small">${new Date(review.date).toLocaleDateString()}</span>
                </div>
            </div>
            <p class="mb-0">${review.comment}</p>
        `;
        reviewsContainer.appendChild(reviewEl);
    });
}


// 7. Review Form Submission
document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();
   
    const rating = parseInt(document.getElementById('rating-value').value);
    const comment = document.getElementById('review-comment').value.trim();
   
    if (rating === 0 || !comment) {
        alert('Please provide both a rating and comment');
        return;
    }
   
    // Initialize reviews array if it doesn't exist
    if (!product.reviews) {
        product.reviews = [];
    }
   
    // Add new review
    const newReview = {
        id: Date.now(),
        user: "You", // In a real app, use logged-in user's name
        rating: rating,
        date: new Date().toISOString().split('T')[0],
        comment: comment
    };
   
    product.reviews.unshift(newReview); // Add to beginning
    renderReviews();
   
    // Reset form
    this.reset();
    document.querySelectorAll('.rating-stars i').forEach(star => {
        star.classList.remove('fas', 'active');
        star.classList.add('far');
    });
    document.getElementById('rating-value').value = 0;
   
    // In a real app, you would save to a database here
    console.log('New review added:', newReview);
});


// 8. Star Rating Interaction
document.querySelectorAll('.rating-stars i').forEach(star => {
    star.addEventListener('click', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        document.getElementById('rating-value').value = rating;
       
        document.querySelectorAll('.rating-stars i').forEach((s, i) => {
            if (i < rating) {
                s.classList.remove('far');
                s.classList.add('fas', 'active');
            } else {
                s.classList.remove('fas', 'active');
                s.classList.add('far');
            }
        });
    });
   
    // Add hover effect
    star.addEventListener('mouseover', function() {
        const rating = parseInt(this.getAttribute('data-rating'));
        document.querySelectorAll('.rating-stars i').forEach((s, i) => {
            if (i < rating) {
                s.classList.add('fas');
                s.classList.remove('far');
            }
        });
    });
   
    star.addEventListener('mouseout', function() {
        const currentRating = parseInt(document.getElementById('rating-value').value);
        document.querySelectorAll('.rating-stars i').forEach((s, i) => {
            if (i >= currentRating) {
                s.classList.add('far');
                s.classList.remove('fas');
            }
        });
    });
});


    // 9. Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
       
        const formData = {
            name: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            message: document.getElementById('contact-message').value,
            product: product.name,
            ownerEmail: product.owner.email
        };
       
        // In a real app, you would send this to your server
        console.log('Message sent:', formData);
        alert(`Message sent to ${product.owner.name}! They will contact you soon.`);
        this.reset();
    });


    // if (product && product.location) {
    //     const script = document.createElement('script');
    //     script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    //     script.async = true;
    //     script.defer = true;
    //     document.head.appendChild(script);
       
    //     window.initMap = function() {
    //         const location = product.location;
    //         const map = new google.maps.Map(document.getElementById('product-map'), {
    //             center: { lat: location.lat, lng: location.lng },
    //             zoom: 15
    //         });
    //         new google.maps.Marker({
    //             position: { lat: location.lat, lng: location.lng },
    //             map: map,
    //             title: product.name
    //         });
    //     };
    // }
});



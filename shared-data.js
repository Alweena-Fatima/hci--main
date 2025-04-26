const products = [
    { id: 1, name: "Cozy Apartment", category: "apts", price: 12000, date: "2023-10-01", bedrooms: 2, bathrooms: 1, sqft: 800, images: ["apt1.png", "room1.png"], description: "A premium 2BHK apartment in upscale Bandra West, Mumbai. Fully furnished with modular kitchen, marble flooring, and a balcony with sea breeze. Ideal for families or working professionals. Close to cafes, schools, and Bandra-Worli Sea Link.",  location: {
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
    { id: 2, name: "Luxury Villa", category: "sale", price: 500000, date: "2023-10-05", bedrooms: 5, bathrooms: 4, sqft: 3000, images: ["villa1.png"], description: "A modern 4BHK villa in gated community (Prestige Lakeside Habitat). Features a private garden, modular kitchen, Jacuzzi, and smart home automation. Near IT parks and international schools.", location: {
        address: "Prestige Lakeside Habitat, Whitefield, Bangalore - 560066",
        lat: 12.9716,
        lng: 77.7506
    },
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "24/7 Security", "Power Backup", "Parking"],
    panorama: "panorama-viewer.html",
    owner: {
        name: "Nandini Reddy",
        phone: "+91 90000 12345",
        email: "nandini@prestigeproperties.com",
        joinDate: "2020-05-12"
    },
    reviews: [
        {
            id: 1,
            user: "Arjun Kapoor",
            rating: 5,
            date: "2023-09-30",
            comment: "Dream home! The villa is even better in person."
        }
    ]
},
    { id: 3, name: "Shared Room", category: "shared", price: 5000, date: "2023-10-10", bedrooms: 1, bathrooms: 1, sqft: 200, images: ["room1.png"], description: "Safe and hygienic PG for female students/professionals. Includes meals, WiFi, and laundry. Walking distance to Delhi University and Vijay Nagar market.",
        location: {
            address: "B-12, Vijay Nagar, Near GTB Nagar Metro, Delhi - 110009",
            lat: 28.7041,
            lng: 77.1025
        },
        amenities: ["WiFi", "Meals Included", "Laundry", "24/7 Security", "Power Backup"],
        panorama: "panorama-viewer.html",
        owner: {
            name: "Mrs. Gupta",
            phone: "+91 98989 67676",
            email: "gupta.pgdelhi@example.com",
            joinDate: "2022-02-15"
        },
        reviews: [
            {
                id: 1,
                user: "Ananya Patel",
                rating: 4,
                date: "2023-11-05",
                comment: "Good food and clean rooms. Mrs. Gupta is very caring."
            }
        ]},
    { id: 4, name: "Office Space", category: "office", price: 20000, date: "2023-10-15", sqft: 1200, images: ["office1.png"],  description: "Premium office space in DLF Cyber City with glass facade, high-speed internet, and cafeteria access. Ideal for startups/MNCs. Near MG Road metro.",
        location: {
            address: "Tower C, DLF Cyber City, Gurgaon - 122002",
            lat: 28.4969,
            lng: 77.0946
        },
        amenities: ["WiFi", "Parking", "AC", "Power Backup", "Conference Rooms"],
        panorama: "panorama-viewer.html",
        owner: {
            name: "DLF Commercial",
            phone: "+91 124 456 7890",
            email: "leasing@dlf.com",
            joinDate: "2015-01-10"
        },
        reviews: [
            {
                id: 1,
                user: "Rajiv Malhotra",
                rating: 5,
                date: "2023-10-25",
                comment: "Best office space in Gurgaon! Great connectivity."
            }
        ] },
    { id: 5, name: "Parking Spot", category: "parking", price: 1000, date: "2023-10-20", images: ["parking1.png"], description: "Secure covered parking in Pedder Road area (near Kamala Mills). CCTV surveillance and 24/7 attendant. Monthly lease only.",
        location: {
            address: "Parking Lot No. 5, Pedder Road, Mumbai - 400026",
            lat: 18.9667,
            lng: 72.8111
        },
        amenities: ["CCTV", "Attendant", "Covered"],
        panorama: "panorama-viewer.html",
        owner: {
            name: "Mumbai Parking Solutions",
            phone: "+91 22 2656 7890",
            email: "info@mumbaiparking.com",
            joinDate: "2021-07-20"
        },
        reviews: [
            {
                id: 1,
                user: "Aditya Joshi",
                rating: 4,
                date: "2023-11-01",
                comment: "Convenient and safe. Slightly expensive but worth it."
            }
        ] },
    { id: 6, name: "Vacation Rental", category: "vacation", price: 3000, date: "2023-10-25", bedrooms: 3, bathrooms: 2, sqft: 1500, images: ["vacation1.png"], description: "Private beachfront farmhouse with pool, landscaped garden, and chef service. Perfect for weekend getaways from Mumbai (1.5 hrs by ferry).",
        location: {
            address: "Beach Road, Nagaon, Alibaug - 402201",
            lat: 18.6414,
            lng: 72.8722
        },
        amenities: ["Private Beach", "Pool", "Chef Service", "AC", "WiFi", "Parking"],
        panorama: "panorama-viewer.html",
        owner: {
            name: "Rohan Kapoor",
            phone: "+91 98201 23456",
            email: "alibaugretreats@example.com",
            joinDate: "2022-09-05"
        },
        reviews: [
            {
                id: 1,
                user: "Neha Oberoi",
                rating: 5,
                date: "2023-11-10",
                comment: "Heaven on earth! The sunset views are unforgettable."
            }
        ] },
];








// Single, clean function to get product by ID
window.addReview = function(productId, review) {
    const product = products.find(p => p.id === parseInt(productId));
    if (product) {
        if (!product.reviews) product.reviews = [];
        product.reviews.push(review);
        return true;
    }
    return false;
};


window.getProductById = function(id) {
    const productId = parseInt(id);
    return products.find(product => product.id === productId);
};
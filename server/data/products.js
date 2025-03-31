// product.js:

const products = [
  // Jwellery
  {
    name: "Cairra 22k Gold Necklace",
    description:
      "The Cairra 22K Gold Necklace is a breathtaking blend of heritage and modern elegance, designed for the bride who cherishes tradition with a contemporary touch. Its intricate, long gold necklace design showcases impeccable artistry, ensuring all eyes are on you as you make bridal debut. Each detail is thoughtfully handcrafted to mesmerize, making this luxurious necklace a symbol of timeless beauty and sophistication. Enhance your wedding ensemble and create unforgettable memories. Order today and make the Cairra 22K Gold Necklace the crowning jewel of your special day.",
    price: 5,
    discountPrice: 4.10,
    countInStock: 8,
    sku: "CNG02-YWR047",
    category: "Jewellery",
    brand: "Giriraj",
    sizes: ["50", "60", "70"],
    colors: ["Gold"],
    collections: "Business Casual",
    material: "Gold (22KT)",
    gender: "Women",
    images: [
      {
        url: "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/973/1714141994_266cf030ab9b941b8e52.png",
        altText: "Cairra 22k Gold Necklace",
      },
      {
        url: "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/973/1714141994_5aaa85ca643ab12c4024.png",
        altText: "Cairra 22k Gold Necklace",
      },
      {
        url: "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/973/1714141994_f9f0a4e78d39777391dc.png",
        altText: "Cairra 22k Gold Necklace"
      }
    ],
    rating: 4.5,
    numReviews: 12,
  },
  {
    "name": "Aurora Diamond Stud Earrings",
    "description": "The Aurora Diamond Stud Earrings epitomize timeless elegance, featuring brilliant-cut diamonds set in 18K white gold. These versatile studs add a touch of sophistication to any attire, making them perfect for both everyday wear and special occasions. Elevate your jewelry collection with the understated luxury of the Aurora Diamond Stud Earrings.",
    "price": 3.5,
    "discountPrice": 2.95,
    "countInStock": 15,
    "sku": "ADE01-WG018",
    "category": "Jewellery",
    "brand": "Celeste",
    "sizes": ["0.25 ct", "0.50 ct", "1.00 ct"],
    "colors": ["White"],
    "collections": "Classic Elegance",
    "material": "18K White Gold, Diamond",
    "gender": "Women",
    "images": [
      {
        "url": "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/22/diamond_jewellery_2_.jpeg",
        "altText": "Aurora Diamond Stud Earrings"
      },
    ],
    "rating": 4.8,
    "numReviews": 25
  },
  {
    "name": "Luna Pearl Pendant Necklace",
    "description": "The Luna Pearl Pendant Necklace showcases a lustrous freshwater pearl suspended from a delicate 14K gold chain. Its minimalist design exudes grace and sophistication, making it an ideal accessory for both formal events and everyday elegance. Add a touch of classic beauty to your ensemble with the Luna Pearl Pendant Necklace.",
    "price": 2.0,
    "discountPrice": 1.7,
    "countInStock": 20,
    "sku": "LPPN02-YG014",
    "category": "Jewellery",
    "brand": "Eterna",
    "sizes": ["16 inch", "18 inch", "20 inch"],
    "colors": ["Yellow"],
    "collections": "Timeless Classics",
    "material": "14K Yellow Gold, Freshwater Pearl",
    "gender": "Women",
    "images": [
      {
        "url": "https://www.bsa-images.com/martinbinder_2018/MBI/Inbox/320-00818.jpg",
        "altText": "Luna Pearl Pendant Necklace"
      },
      {
        "url": "https://www.bsa-images.com/martinbinder_2018/MBI/Inbox/320-00818-02.jpg",
        "altText": "Luna Pearl Pendant Necklace"
      },
    ],
    "rating": 4.7,
    "numReviews": 18
  },
  {
    "name": "Elysian Emerald Cocktail Ring",
    "description": "The Elysian Emerald Cocktail Ring features a captivating emerald-cut emerald centerpiece, flanked by sparkling diamonds set in 18K rose gold. This statement piece embodies luxury and sophistication, making it the perfect accessory for gala events and special occasions. Make a bold impression with the Elysian Emerald Cocktail Ring.",
    "price": 6.0,
    "discountPrice": 5.1,
    "countInStock": 5,
    "sku": "EEC03-RG018",
    "category": "Jewellery",
    "brand": "Verde",
    "sizes": ["6", "7", "8"],
    "colors": ["Gold"],
    "collections": "Luxury Statement",
    "material": "18K Rose Gold, Emerald, Diamond",
    "gender": "Women",
    "images": [
      {
        "url": "https://jaipurgems.com/media/catalog/product/cache/5b79e1ec6963bdd765b2930d4c2cbe6f/d/r/dr-26833-01.jpg",
        "altText": "Elysian Emerald Cocktail Ring"
      },
      {
        "url": "https://jaipurgems.com/media/catalog/product/cache/5b79e1ec6963bdd765b2930d4c2cbe6f/d/r/dr-26833_1.jpg",
        "altText": "Elysian Emerald Cocktail Ring"
      },
      {
        "url": "https://jaipurgems.com/media/catalog/product/cache/5b79e1ec6963bdd765b2930d4c2cbe6f/d/r/dr-26833_s.jpg",
        "altText": "Elysian Emerald Cocktail Ring"
      }
    ],
    "rating": 4.9,
    "numReviews": 10
  },
  {
    "name": "Stellar Sapphire Tennis Bracelet",
    "description": "The Stellar Sapphire Tennis Bracelet is a stunning piece featuring a continuous line of deep blue sapphires set in 14K white gold. Its classic design offers a touch of refined elegance, making it suitable for both formal occasions and everyday luxury. Enhance your wrist with the timeless beauty of the Stellar Sapphire Tennis Bracelet.",
    "price": 4.5,
    "discountPrice": 3.85,
    "countInStock": 12,
    "sku": "SSTB04-WG014",
    "category": "Jewellery",
    "brand": "Azure",
    "sizes": ["7 inch", "7.5 inch", "8 inch"],
    "colors": ["White"],
    "collections": "Elegant Essentials",
    "material": "14K White Gold, Sapphire",
    "gender": "Women",
    "images": [
      {
        "url": "https://m.media-amazon.com/images/I/61yLhGrJB6L._SY695_.jpg",
        "altText": "Stellar Sapphire Tennis Bracelet"
      },
      {
        "url": "https://m.media-amazon.com/images/I/61lXFpKXJAL._SY695_.jpg",
        "altText": "Stellar Sapphire Tennis Bracelet"
      },
      {
        "url": "https://m.media-amazon.com/images/I/6139V-Q2jaL._SY695_.jpg",
        "altText": "Stellar Sapphire Tennis Bracelet"
      }
    ],
    "rating": 4.6,
    "numReviews": 22
  },

  // Handcrafted T-shirts
  {
    name: "Hand Painted Shirt Full Sleeves",
    description:
      "shirt made from handspun and handwoven cotton (khadi) and naturally dyed with myrobalan, turmeric.",
    price: 29.99,
    discountPrice: 24.99,
    countInStock: 120,
    sku: "SLIM-SH-002",
    category: "T-Shirt",
    brand: "Modern Fit",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    collections: "Formal Wear",
    material: "Cotton (Handwoven - Khadi)",
    gender: "Men",
    images: [
      {
        url: "https://samaajstudio.com/cdn/shop/files/IMG-1463.jpg?v=1729253222&width=1206",
        altText: "Hand Painted Shirt Full Sleeves",
      },
      {
        url: "https://samaajstudio.com/cdn/shop/files/IMG-1468.jpg?v=1729253721&width=1206",
        altText: "Hand Painted Shirt Full Sleeves",
      },
      {
        url: "https://samaajstudio.com/cdn/shop/files/IMG-1469.jpg?v=1729253721&width=1206",
        altText: "Hand Painted Shirt Full Sleeves",
      },
    ],
    rating: 4.8,
    numReviews: 15,
  },
  {
    "name": "Muslin Pure Khadi Light Orange Shirt",
    "description": "Embrace the elegance of traditional craftsmanship with the Muslin Pure Khadi Light Orange Shirt. This premium shirt is meticulously handspun and handwoven from 100% pure khadi cotton, offering unparalleled comfort and breathability. The light orange hue, achieved through eco-friendly dyeing processes, adds a subtle vibrancy to your wardrobe. Designed with full sleeves and a classic fit, this shirt is adorned with traditional hand printing techniques that showcase India's rich textile heritage. Perfect for formal occasions or elevating everyday attire, this shirt embodies sustainable fashion without compromising on style.",
    "price": 34.99,
    "discountPrice": 27.99,
    "countInStock": 100,
    "sku": "KHADI-SH-001",
    "category": "T-Shirt",
    "brand": "EcoTattva",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Orange"],
    "collections": "Formal Wear",
    "material": "100% Pure Khadi Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://weswadesi.com/wp-content/uploads/2022/09/yellow-muslin-khadi-shirts.jpg",
        "altText": "Muslin Pure Khadi Light Orange Shirt"
      },
      {
        "url": "https://weswadesi.com/wp-content/uploads/2022/09/yellow-muslin-khadi-shirts.jpg",
        "altText": "Muslin Pure Khadi Light Orange Shirt - Close Up"
      },
    ],
    "rating": 4.7,
    "numReviews": 22
  },
  {
    "name": "Muslin Pure Khadi Light Green Shirt",
    "description": "Discover the fusion of comfort and style with the Muslin Pure Khadi Light Green Shirt. Crafted from handspun and handwoven khadi cotton, this shirt offers a soft, breathable experience ideal for any season. The soothing light green color is derived from natural dyes, reflecting a commitment to environmental sustainability. Featuring full sleeves and traditional hand-printed designs, this shirt adds a touch of artisanal charm to your formal or casual ensemble. Its classic fit ensures ease of movement, making it a versatile addition to your wardrobe.",
    "price": 34.99,
    "discountPrice": 27.99,
    "countInStock": 100,
    "sku": "KHADI-SH-002",
    "category": "T-Shirt",
    "brand": "EcoTattva",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["Lime"],
    "collections": "Formal Wear",
    "material": "100% Pure Khadi Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://weswadesi.com/wp-content/uploads/2022/10/muslin-khadi-Reef-Gold-shirt-cotton-front.jpg",
        "altText": "Muslin Pure Khadi Light Green Shirt"
      },
      {
        "url": "https://weswadesi.com/wp-content/uploads/2022/10/muslin-khadi-Reef-Gold-shirt-cotton-front.jpg",
        "altText": "Muslin Pure Khadi Light Green Shirt - Close Up"
      },
      {
        "url": "https://weswadesi.com/wp-content/uploads/2022/10/muslin-khadi-Reef-Gold-shirt-cotton-front.jpg",
        "altText": "Muslin Pure Khadi Light Green Shirt - Back View"
      }
    ],
    "rating": 4.8,
    "numReviews": 18
  },
  {
    "name": "Muslin Pure Khadi Flora Print Shirt",
    "description": "Elevate your style with the Muslin Pure Khadi Flora Print Shirt, a testament to exquisite handcraftsmanship. Made from 100% pure khadi cotton, this shirt features a delicate floral print achieved through traditional hand printing techniques. The breathable fabric and full sleeves ensure comfort, while the unique design adds a touch of sophistication to your attire. Ideal for both formal and casual settings, this shirt embodies the beauty of sustainable fashion and the rich legacy of Indian textiles.",
    "price": 36.99,
    "discountPrice": 29.99,
    "countInStock": 90,
    "sku": "KHADI-SH-003",
    "category": "T-Shirt",
    "brand": "EcoTattva",
    "sizes": ["S", "M", "L", "XL"],
    "colors": ["White with Floral Print"],
    "collections": "Casual Wear",
    "material": "100% Pure Khadi Cotton",
    "gender": "Men",
    "images": [
      {
        "url": "https://ecotattva.com/wp-content/uploads/2022/11/khadi-muslin-floura-print-front-n.jpg",
        "altText": "Muslin Pure Khadi Flora Print Shirt"
      },
    ],
    "rating": 4.9,
    "numReviews": 25
  },

  // Bags 

  {
    "name": "Ethnic Handmade Metal Clutch Bag for Women (Greenglow)",
    "description": "Elevate your evening ensemble with the Ethnic Handmade Metal Clutch Bag in Greenglow. This exquisite piece features intricate metalwork and a vibrant green hue, reflecting traditional craftsmanship. Its compact design is perfect for carrying essentials, making it an ideal accessory for festive occasions and cultural events.",
    "price": 649.00,
    "discountPrice": 649.00,
    "countInStock": 15,
    "sku": "EMC-GG-001",
    "category": "Bags",
    "brand": "Maresse",
    "sizes": ["One Size"],
    "colors": ["Green"],
    "collections": "Evening Wear",
    "material": "Metal",
    "gender": "Women",
    "images": [
      {
        "url": "https://maresse.in/cdn/shop/files/71kLg6CMQ0L._SY695.jpg?v=1738043596&width=1346",
        "altText": "Ethnic Handmade Metal Clutch Bag in Greenglow"
      }
    ],
    "rating": 4.7,
    "numReviews": 25
  },
  {
    "name": "Handcrafted Beige Macrame Crossbody Bag for Women (Nomad)",
    "description": "Discover bohemian elegance with the Handcrafted Beige Macrame Crossbody Bag. Featuring intricate macrame patterns and a neutral beige tone, this bag offers both style and functionality. Its adjustable strap and spacious interior make it perfect for daily use or casual outings.",
    "price": 499.00,
    "discountPrice": 499.00,
    "countInStock": 20,
    "sku": "HMB-ND-002",
    "category": "Bags",
    "brand": "Maresse",
    "sizes": ["One Size"],
    "colors": ["Beige"],
    "collections": "Casual Wear",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "https://maresse.in/cdn/shop/files/Lcs94ah.jpg?v=1729243115&width=1346",
        "altText": "Handcrafted Beige Macrame Crossbody Bag"
      }
    ],
    "rating": 4.8,
    "numReviews": 18
  },
  {
    "name": "Handwoven Big Basket Bag",
    "description": "The Handwoven Big Basket Bag combines traditional weaving techniques with contemporary design. Crafted from natural fibers, this spacious bag is perfect for market visits or beach outings. Its sturdy handles and durable construction ensure longevity and style.",
    "price": 2300.00,
    "discountPrice": 2300.00,
    "countInStock": 10,
    "sku": "HBB-AB-003",
    "category": "Bags",
    "brand": "abacaxi NYC",
    "sizes": ["One Size"],
    "colors": ["White"],
    "collections": "Resort Wear",
    "material": "Natural Fibers",
    "gender": "Women",
    "images": [
      {
        "url": "https://maresse.in/cdn/shop/files/QZumAxv.jpg?v=1729242821&width=1346",
        "altText": "Handwoven Big Basket Bag"
      }
    ],
    "rating": 4.9,
    "numReviews": 12
  },
  {
    "name": "Blue Lagoon Hand Block Printed Pink Classic Tote Bag",
    "description": "Add a splash of color to your wardrobe with the Blue Lagoon Hand Block Printed Pink Classic Tote Bag. Featuring traditional hand block printing techniques, this tote showcases vibrant patterns on durable cotton fabric. Its spacious interior and sturdy handles make it ideal for daily use.",
    "price": 3250.00,
    "discountPrice": 3250.00,
    "countInStock": 25,
    "sku": "BLT-SH-004",
    "category": "Bags",
    "brand": "Shahenaz",
    "sizes": ["One Size"],
    "colors": ["Pink"],
    "collections": "Ethnic Wear",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "https://maresse.in/cdn/shop/files/1st_7045fe03-0d40-4bab-8e84-b1ddccf34537.jpg?v=1729921149&width=1346",
        "altText": "Blue Lagoon Hand Block Printed Pink Classic Tote Bag"
      }
    ],
    "rating": 4.6,
    "numReviews": 30
  },
  {
    "name": "Beige Edgebox - Rectangular Kutchi Handcrafted Bag",
    "description": "Experience the rich heritage of Kutch with the Beige Edgebox Rectangular Handcrafted Bag. Made from hand-dyed 'Mashru' fabric using vegetable and plant-based dyes, this bag features a sleek rectangular design complemented by vegan leather accents. Perfect for those who appreciate sustainable fashion.",
    "price": 3999.00,
    "discountPrice": 3999.00,
    "countInStock": 8,
    "sku": "BER-AX-005",
    "category": "Bags",
    "brand": "Axtract",
    "sizes": ["One Size"],
    "colors": ["Beige"],
    "collections": "Sustainable Fashion",
    "material": "Mashru Fabric, Vegan Leather",
    "gender": "Women",
    "images": [
      {
        "url": "https://maresse.in/cdn/shop/files/81u2TMpNJ6L._SY625_-2.jpg?v=1729353004&width=1346",
        "altText": "Beige Edgebox Rectangular Kutchi Handcrafted Bag"
      }
    ],
    "rating": 4.8,
    "numReviews": 22
  },
  {
    "name": "Indha Hand Block Printed Natural Cotton Tote Bag with Elephant Print and Tassel Embellishment",
    "description": "Celebrate traditional artistry with the Indha Hand Block Printed Natural Cotton Tote Bag. Adorned with an elephant motif and tassel embellishments, this eco-friendly bag is crafted from natural cotton. Its spacious compartment and sturdy handles make it both functional and stylish.",
    "price": 350.00,
    "discountPrice": 350.00,
    "countInStock": 30,
    "sku": "IHT-IN-006",
    "category": "Bags",
    "brand": "Indha",
    "sizes": ["One Size"],
    "colors": ["White", "Red"],
    "collections": "Eco-Friendly Fashion",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "https://maresse.in/cdn/shop/files/Artboard-1-38.jpg?v=1729352989&width=1346",
        "altText": "Indha Hand Block Printed Natural Cotton Tote Bag with Elephant Print"
      }
    ],
    "rating": 4.7,
    "numReviews": 28
  },
  {
    "name": "Handcrafted Black and White Macrame Bag for Women (MonochromeFringe)",
    "description": "Embrace bohemian elegance with the Handcrafted Black and White Macrame Bag, aptly named 'MonochromeFringe.' This artisanal piece showcases intricate macrame patterns in contrasting black and white hues, exuding a timeless appeal. The fringed detailing adds a playful touch, making it a versatile accessory for both casual outings and chic events. Its spacious interior ensures you can carry your essentials with ease, while the sturdy strap offers comfortable wear. Elevate your style quotient with this unique blend of traditional craftsmanship and contemporary design.",
    "price": 899.00,
    "discountPrice": 899.00,
    "countInStock": 12,
    "sku": "HMW-MF-003",
    "category": "Bags",
    "brand": "Maresse",
    "sizes": ["One Size"],
    "colors": ["Black", "White"],
    "collections": "Boho Chic",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "https://maresse.in/cdn/shop/files/Artboard-1_4aaddf64-a6a5-491e-a64b-da7921556a5b.jpg?v=1729243288&width=1346",
        "altText": "Handcrafted Black and White Macrame Bag - MonochromeFringe"
      }
    ],
    "rating": 4.6,
    "numReviews": 20
  },
  {
    "name": "Handcrafted Macrame Black Crossbody Bag for Women (Morphe)",
    "description": "Introducing 'Morphe,' the Handcrafted Macrame Black Crossbody Bag that seamlessly blends functionality with artisanal charm. Crafted meticulously with durable black cotton threads, this bag features an adjustable strap, allowing for versatile styling. The compact design is perfect for carrying essentials like your phone, wallet, and keys, making it an ideal companion for daily errands or evening strolls. The intricate macrame pattern showcases the rich heritage of handcrafted artistry, ensuring you stand out with a unique accessory that speaks volumes about your refined taste.",
    "price": 499.00,
    "discountPrice": 499.00,
    "countInStock": 18,
    "sku": "HMC-MP-004",
    "category": "Bags",
    "brand": "Maresse",
    "sizes": ["One Size"],
    "colors": ["Black"],
    "collections": "Urban Essentials",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "https://maresse.in/cdn/shop/files/Artboard-1_bc54313d-9344-4c11-ad7e-2f3d03b9feb1.jpg?v=1729243170&width=1346",
        "altText": "Handcrafted Macrame Black Crossbody Bag - Morphe"
      }
    ],
    "rating": 4.7,
    "numReviews": 22
  },
  {
    "name": "Handmade Macrame Tote Bag for Women (Macrelia)",
    "description": "Meet 'Macrelia,' the Handmade Macrame Tote Bag that epitomizes sustainable fashion. This spacious tote is handcrafted using eco-friendly cotton cords, featuring intricate macrame knots that form a visually appealing pattern. The sturdy handles ensure comfortable carry, making it perfect for beach outings, market trips, or casual day events. Its neutral tone complements various outfits, while the open-top design allows easy access to your belongings. Embrace the fusion of style and sustainability with this versatile tote that adds a touch of bohemian flair to your ensemble.",
    "price": 1399.00,
    "discountPrice": 1399.00,
    "countInStock": 10,
    "sku": "HMT-ML-005",
    "category": "Bags",
    "brand": "Maresse",
    "sizes": ["One Size"],
    "colors": ["White"],
    "collections": "Eco-Friendly",
    "material": "Cotton",
    "gender": "Women",
    "images": [
      {
        "url": "https://maresse.in/cdn/shop/files/LhEn2Ya.jpg?v=1729243318&width=1346",
        "altText": "Handmade Macrame Tote Bag - Macrelia"
      }
    ],
    "rating": 4.8,
    "numReviews": 15
  },
  {
    "name": "Women Ethnic Embellished Handmade Boho Bag (Midnight Black)",
    "description": "Step into the world of bohemian glamour with the 'Midnight Black' Ethnic Embellished Handmade Boho Bag. This exquisite accessory features intricate embroidery, mirror work, and bead embellishments that reflect the rich cultural heritage of traditional artisans. The deep black fabric serves as a canvas for vibrant patterns, making it a statement piece for any outfit. The bag offers ample space for your essentials and comes with a comfortable shoulder strap, ensuring both style and convenience. Perfect for festivals, casual outings, or adding a touch of ethnic charm to your wardrobe.",
    "price": 899.00,
    "discountPrice": 899.00,
    "countInStock": 9,
    "sku": "EEB-MB-006",
    "category": "Bags",
    "brand": "Maresse",
    "sizes": ["One Size"],
    "colors": ["Black", "Pink"],
    "collections": "Bohemian Rhapsody",
    "material": "Cotton, Embellishments",
    "gender": "Women",
    "images": [
      {
        "url": "https://maresse.in/cdn/shop/files/wooden-queen-bag.jpg?v=1729353034&width=1346",
        "altText": "Ethnic Embellished Handmade Boho Bag - Midnight Black"
      }
    ],
    "rating": 4.5,
    "numReviews": 17
  },

  // Sketches
  {
    "name": "Personalized Premium Pencil Portrait Sketch",
    "description": "Experience the timeless charm of a handcrafted pencil portrait with our Personalized Premium Pencil Portrait Sketch. Meticulously drawn by skilled artists, this piece captures the essence and nuances of your cherished photograph, transforming it into a work of art. Ideal for commemorating special occasions or gifting loved ones, this sketch serves as a lasting memento that adds a touch of elegance to any space.",
    "price": 2499.00,
    "discountPrice": 2499.00,
    "countInStock": 10,
    "sku": "PPP-FB-001",
    "category": "Sketches",
    "brand": "Fabus Frames",
    "sizes": ["A4", "A3", "A2"],
    "colors": ["Black", "White"],
    "collections": "Portraits",
    "material": "Premium Sketch Paper",
    "gender": "Unisex",
    "images": [
      {
        "url": "https://fabusframes.com/cdn/shop/files/premium_pencil_-2.jpg?v=1734415706&width=1000",
        "altText": "Personalized Premium Pencil Portrait Sketch"
      }
    ],
    "rating": 4.8,
    "numReviews": 15
  },
  {
    "name": "Handmade Colored Pencil Sketch (Customized)",
    "description": "Transform your favorite photograph into a vibrant masterpiece with our Handmade Colored Pencil Sketch. Our talented artists use high-quality colored pencils to create a lifelike representation, capturing every detail and hue. This customized artwork makes for a unique and heartfelt gift, perfect for birthdays, anniversaries, or any special occasion.",
    "price": 2400.00,
    "discountPrice": 2400.00,
    "countInStock": 12,
    "sku": "HCPS-AW-002",
    "category": "Sketches",
    "brand": "Artwale",
    "sizes": ["A4", "A3", "A2"],
    "colors": ["White"],
    "collections": "Portraits",
    "material": "High-Quality Sketch Paper",
    "gender": "Unisex",
    "images": [
      {
        "url": "https://fabusframes.com/cdn/shop/files/name_potrait_-_2.jpg?v=1740467456&width=1000",
        "altText": "Handmade Colored Pencil Sketch"
      }
    ],
    "rating": 4.7,
    "numReviews": 20
  },
  {
    "name": "Handmade Pencil Sketch Portrait",
    "description": "Capture the essence of your memories with our Handmade Pencil Sketch Portrait. Crafted with precision and care, our artists bring your photos to life through detailed pencil work. This classic black and white sketch adds a touch of sophistication to any room and serves as a timeless keepsake for you or your loved ones.",
    "price": 1499.00,
    "discountPrice": 1499.00,
    "countInStock": 15,
    "sku": "HPS-AR-003",
    "category": "Sketches",
    "brand": "Artaum",
    "sizes": ["A4", "A3"],
    "colors": ["Black", "White"],
    "collections": "Portraits",
    "material": "Ivory Stock Paper",
    "gender": "Unisex",
    "images": [
      {
        "url": "https://fabusframes.com/cdn/shop/files/normal_pencil_-_2.jpg?v=1734416823&width=1000",
        "altText": "Handmade Pencil Sketch Portrait"
      }
    ],
    "rating": 4.9,
    "numReviews": 18
  },
  {
    "name": "Charcoal Sketch Portrait",
    "description": "Delve into the deep contrasts and rich textures of our Charcoal Sketch Portrait. Our skilled artists utilize premium charcoal to create striking, high-contrast images that emphasize the depth and emotion of your chosen photograph. This artwork is perfect for those seeking a bold and dramatic representation of their cherished moments.",
    "price": 999.00,
    "discountPrice": 999.00,
    "countInStock": 20,
    "sku": "CSP-ZN-004",
    "category": "Sketches",
    "brand": "Zanavi",
    "sizes": ["A4", "A3"],
    "colors": ["Black", "White"],
    "collections": "Portraits",
    "material": "High-Quality Sketch Paper",
    "gender": "Unisex",
    "images": [
      {
        "url": "https://fabusframes.com/cdn/shop/files/pen_potrait_-_2.jpg?v=1734417561&width=1000",
        "altText": "Charcoal Sketch Portrait"
      }
    ],
    "rating": 4.6,
    "numReviews": 22
  },
  {
    "name": "Handmade Portrait Sketch from Photo",
    "description": "Turn your favorite photo into a stunning piece of art with our Handmade Portrait Sketch. Our artists meticulously recreate your image with delicate pencil strokes, capturing every detail and emotion. This personalized sketch makes for an unforgettable gift or a cherished addition to your own art collection.",
    "price": 1299.00,
    "discountPrice": 1299.00,
    "countInStock": 10,
    "sku": "HPS-HI-005",
    "category": "Sketches",
    "brand": "Hippy",
    "sizes": ["A4", "A3", "A2"],
    "colors": ["Black", "White"],
    "collections": "Portraits",
    "material": "Ivory Stock Paper",
    "gender": "Unisex",
    "images": [
      {
        "url": "https://fabusframes.com/cdn/shop/files/acrylic_painting_pet_-_2.jpg?v=1734418263&width=1000",
        "altText": "Handmade Portrait Sketch from Photo"
      }
    ],
    "rating": 4.8,
    "numReviews": 25
  },
  {
    "name": "Ball Pen Portrait Sketch",
    "description": "Experience the unique artistry of our Ball Pen Portrait Sketch. Using fine ballpoint pens, our artists create intricate and detailed portraits that capture the essence of your photograph. This distinctive medium offers a contemporary twist on traditional portraiture, making it a standout piece in any art collection.",
    "price": 999.00,
    "discountPrice": 999.00,
    "countInStock": 15,
    "sku": "BPP-ZN-006",
    "category": "Sketches",
    "brand": "Zanavi",
    "sizes": ["A4", "A3"],
    "colors": ["Black", "White"],
    "collections": "Portraits",
    "material": "High-Quality Sketch Paper",
    "gender": "Unisex",
    "images": [
      {
        "url": "https://fabusframes.com/cdn/shop/files/i_love_you_potrait_-_valentine_theme_1.jpg?v=1738387244&width=1000",
        "altText": "Ball Pen Portrait Sketch"
      }
    ],
    "rating": 4.5,
    "numReviews": 17
  },
];

module.exports = products;

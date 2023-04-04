const data = {
  products: [
    {
      id: 1,
      name: "40M 178PCS",
      slug: "lg-tv",
      category: "TVs",
      Image: "./1.jpg",
      classes: ["Class A", "Class B", "Class C"], // new classes array
      diameters: [
        "2 inches",
        "4 inches",
        "6 inches",
        "8 inches",
        "10 inches",
        "12 inches",
        "14 inches",
        "16 inches",
      ], // new diameters array
      prices: [
        [2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500], // prices for Class A
        [2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000], // prices for Class B
        [3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500], // prices for Class C
      ],
      countInStock: 45,
      brand: "Nike",
      rating: 4.5,
      numReviews: 75,
      Description: "High Quality TV with 6 months warrant ",
    },
    {
      id: 2,
      name: "LDPE/100m Pipes",
      slug: "ldpe-pipes",
      category: "Pipes",
      Image: "./2.jpeg",
      classes: ["Class 3"], // new classes array
      diameters: ["15mm", "20mm", "25mm", "32mm", "40mm", "50mm"], // new diameters array
      prices: [
        [250, 280, 280, 450, 580, 1000], // prices for Class A
      ],
      countInStock: 45,
      brand: "Nike",
      rating: 5,
      numReviews: 50,
      Description: "High Quality Pipes with 6 months warrant ",
    },
    {
      id: 3,
      name: "HDPE/100m Pipes",
      slug: "hdpe-pipes",
      category: "Pipes",
      Image: "./3.jpg",
      classes: ["Class 6", "Class 10", "Class 12"], // new classes array
      diameters: [
        "25mm",
        "32mm",
        "40mm",
        "50mm",
        "63mm",
        "75mm",
        "90mm",
        "110mm",
      ], // new diameters array
      prices: [
        [500, 600, 800, 1800, 3000, 4300, 5900, 9000], // prices for Class A
        [0, 1200, 1700, 2700, 4000, 5700, 8200, 11900], // prices for Class B
        [1200, 1400, 2200, 3300, 4900, 6800, 9800, 14400], // prices for Class C
      ],
      countInStock: 45,
      brand: "Nike",
      rating: 5,
      numReviews: 50,
      Description: "High Quality Pipes with 6 months warrant ",
    },
    {
      id: 4,
      name: "HDPE/100m Pipes",
      slug: "hdpe-pipes",
      category: "Pipes",
      Image: "./3.jpg",
      classes: ["Class A", "Class B", "Class C"], // new classes array
      diameters: [
        "2 inches",
        "3 inches",
        "4 inches",
        "5 inches",
        "6 inches",
        "7 inches",
        "8 inches",
        "9 inches",
      ], // new diameters array
      prices: [
        [300, 350, 400, 450, 500, 550, 600, 650], // prices for Class A
        [350, 400, 450, 500, 550, 600, 650, 700], // prices for Class B
        [400, 450, 500, 550, 600, 650, 700, 750], // prices for Class C
      ],
      countInStock: 45,
      brand: "Nike",
      rating: 5,
      numReviews: 50,
      Description: "High Quality Pipes with 6 months warrant ",
    },
    {
      id: 4,
      name: "HDPE/100m Pipes",
      slug: "hdpe-pipes",
      category: "Pipes",
      Image: "./3.jpg",
      classes: ["Class A", "Class B", "Class C"], // new classes array
      diameters: [
        "2 inches",
        "3 inches",
        "4 inches",
        "5 inches",
        "6 inches",
        "7 inches",
        "8 inches",
        "9 inches",
      ], // new diameters array
      prices: [
        [300, 350, 400, 450, 500, 550, 600, 650], // prices for Class A
        [350, 400, 450, 500, 550, 600, 650, 700], // prices for Class B
        [400, 450, 500, 550, 600, 650, 700, 750], // prices for Class C
      ],
      countInStock: 45,
      brand: "Nike",
      rating: 5,
      numReviews: 50,
      Description: "High Quality Pipes with 6 months warrant ",
    },
  ],
};

export default data;

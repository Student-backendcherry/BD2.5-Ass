const express = require("express");
const cors = require('cors');
const app = express();
let port = 3000;
app.use(cors());
// Array of products
let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];
// Function to sort products by rating in descending order
function sortProductsByRating(product1, product2) {
  return product2.rating - product1.rating;
}
// Endpoint  1: To get products sorted by popularity
app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByRating);
  res.json({ products: sortedProducts });
});
// Function to sort products by price in descending order
function sortProductsByPriceHighToLow(product1, product2) {
  return product2.price - product1.price;
}
// Endpoint  2: to get products sorted by price (High to Low)
app.get('/products/sort/price-high-to-low', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByPriceHighToLow);
  res.json({ products: sortedProducts });
});
// Function to sort products by price in ascending order
function sortProductsByPriceLowToHigh(product1, product2) {
  return product1.price - product2.price;
}
// Endpoint  3: to get products sorted by price (Low to High)
app.get('/products/sort/price-low-to-high', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortProductsByPriceLowToHigh);
  res.json({ products: sortedProducts });
});
// Function to filter products by RAM
function filterByRam(products, ram) {
  return products.filter(product => product.ram === ram);
}
// Endpoint 4: to filter products by RAM
app.get('/products/filter/ram', (req, res) => {
  let ram = parseInt(req.query.ram);
  if (ram) {
    let filteredProducts = products.filter(product => product.ram === ram);
    res.json({ products: filteredProducts });
  } else {
    res.status(400).json({ error: "Invalid RAM value" });
  }
});
// Function to filter products by ROM
function filterByRom(products, rom) {
  return products.filter(product => product.rom === rom);
}
// Endpoint 5: to filter products by ROM
app.get('/products/filter/rom', (req, res) => {
  let rom = parseInt(req.query.rom);
  if (req.query.rom && rom > 0) {
    let filteredProducts = filterByRom(products, rom);
    res.json({ products: filteredProducts });
  } else {
    res.status(400).json({ error: "Invalid ROM value" });
  }
});
// Function to filter products by Brand
function filterByBrand(products, brand) {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
}

// Endpoint 6: to filter products by Brand
app.get('/products/filter/brand', (req, res) => {
  let brand = req.query.brand;
  if (brand) {
    let filteredProducts = filterByBrand(products, brand);
    res.json({ products: filteredProducts });
  } else {
    res.status(400).json({ error: "Invalid brand value" });
  }
});
// Function to filter products by OS
function filterByOs(products, os) {
  return products.filter(product => product.os.toLowerCase() === os.toLowerCase());
}
// Endpoint  7: to filter products by OS
app.get('/products/filter/os', (req, res) => {
  let os = req.query.os;
  if (os) {
    let filteredProducts = filterByOs(products, os);
    res.json({ products: filteredProducts });
  } else {
    res.status(400).json({ error: "Invalid OS value" });
  }
});
// Function to filter products by Price
function filterByPrice(products, price) {
  return products.filter(product => product.price <= price);
}
// Endpoint 8: to filter products by Price
app.get('/products/filter/price', (req, res) => {
  let price = parseInt(req.query.price);
  if (req.query.price && price >= 0) {
    let filteredProducts = filterByPrice(products, price);
    res.json({ products: filteredProducts });
  } else {
    res.status(400).json({ error: "Invalid price value" });
  }
});
// Endpoint  9: to get all products
app.get('/products', (req, res) => {
  res.json({ products: products });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

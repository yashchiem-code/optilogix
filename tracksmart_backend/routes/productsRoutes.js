// Mock Products Routes for Inventory Spotter Demo
const express = require('express');
const router = express.Router();

// Mock products database
const products = [
    { id: '123456789', name: 'Laptop Dell XPS 15', location: 'Warehouse A - Aisle 3 - Shelf B2', quantity: 45, category: 'Electronics' },
    { id: '987654321', name: 'Office Chair Ergonomic', location: 'Warehouse B - Aisle 1 - Shelf A1', quantity: 120, category: 'Furniture' },
    { id: '456789123', name: 'Wireless Mouse Logitech', location: 'Warehouse A - Aisle 5 - Shelf C3', quantity: 300, category: 'Electronics' },
    { id: '789123456', name: 'USB-C Cable 2m', location: 'Warehouse A - Aisle 5 - Shelf C1', quantity: 500, category: 'Accessories' },
    { id: '321654987', name: 'Monitor 27" 4K', location: 'Warehouse A - Aisle 3 - Shelf B1', quantity: 80, category: 'Electronics' },
];

// Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// Get product by barcode/ID
router.get('/:barcode', (req, res) => {
    const { barcode } = req.params;
    const product = products.find(p => p.id === barcode);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

module.exports = router;

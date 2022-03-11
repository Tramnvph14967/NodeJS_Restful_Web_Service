// const { Router } = require('express');
import { Router } from 'express';
const { checkAuth } = require('../middleware/checkAuth');

const router = Router();

router.get("/products", checkAuth, (req, res) => {
    const products = [{id: 1,name: "Product A",},{id: 2,name: "Product B",},];
  res.json(products);
});

router.post('/products', checkAuth, (req, res) => {
    const products = [{id: 1,name: "Product A",},{id: 2,name: "Product B",},];
    products.push(req.body);
    res.json(products);
});

module.exports = router;
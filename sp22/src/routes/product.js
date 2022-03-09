const { Router } = require('express');
const { checkAuth } = require('../middleware/checkAuth');

const router = Router();

router.get("/prodcuts", checkAuth, (req, res) => {
    const products = [{ id: 1, name: "product A", }, { id: 2, name: "product B", },];
    res.json(products);
});


router.post('/products', checkAuth, (req, res) =>{
     const products = [{ id: 1, name: "product A", }, { id: 2, name: "product B", },];

    products.push(req.body);
    res.json(products);

});

module.exports = router;
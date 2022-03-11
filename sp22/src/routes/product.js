import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
// const { checkAuth } = require('../middleware/checkAuth');
import { checkAuth } from '../middleware/checkAuth';

const router = Router();



router.get("/products", checkAuth, list);
router.get("/product/:id", get);
router.post('/products', checkAuth, create);
router.delete("/product/:id", remove);
router.put("/product/:id", update);

export default router;

// module.exports = router;
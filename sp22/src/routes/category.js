import { Router } from 'express';
import { create, get, list, remove, update, read } from '../controllers/category';
// const { checkAuth } = require('../middleware/checkAuth');
import { checkAuth } from '../middleware/checkAuth';

const router = Router();



router.get("/category", checkAuth, list);
router.get("/category/:id", get);
router.post('/categorys', checkAuth, create);
router.get('/category/:slug', checkAuth, read);
router.delete("/category/:id", remove);
router.put("/category/:id", update);

export default router;


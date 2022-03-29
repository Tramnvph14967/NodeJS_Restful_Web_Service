import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middleware/checkAuth';
import {userById} from '../controllers/user';
const router = Router();



router.get("/products",  list);
router.get("/product/:id", get);
router.post('/products/:userId', requireSignin, isAuth, isAdmin, create);
router.delete("/product/:id", remove);
router.put("/product/:id", update);

router.param("userId", userById)


export default router;


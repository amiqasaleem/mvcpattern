import express from 'express';
const router = express.Router();
import { getProducts, updateProduct, createProduct, deleteProduct } from '../controllers/productController.js';



router.get('/products', getProducts);

router.post('/products', createProduct);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct)

export default router;


import express from 'express';
import { createOrder, getSellerCatalog, getSellerList } from '../controllers/buyerController.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.route('/list-of-sellers').get(getSellerList);

router.route('/seller-catalog/:seller_id').get(getSellerCatalog);

router.route('/create-order/:seller_id').post(isAuthenticated, createOrder);


export default router;

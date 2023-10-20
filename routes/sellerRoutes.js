import express from 'express';
import { createCatalog, getAllOrders } from '../controllers/sellerController.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.route("/create-catalog").post(isAuthenticated, createCatalog);

router.route("/orders").get(isAuthenticated, getAllOrders);

export default router;

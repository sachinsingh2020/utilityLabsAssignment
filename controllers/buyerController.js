import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Buyer } from "../models/buyerModel.js";
import { Seller } from "../models/sellerModel.js";

export const getSellerList = catchAsyncError(async (req, res, next) => {
    const sellers = await Seller.find();

    res.status(200).json({
        success: true,
        sellers,
    });
});

export const getSellerCatalog = catchAsyncError(async (req, res, next) => {
    const seller = await Seller.findById(req.params.seller_id);

    if (!seller) {
        return next(new ErrorHandler("Seller not found", 404));
    }

    res.status(200).json({
        success: true,
        catalog: seller.catalog,
    });
});

export const createOrder = catchAsyncError(async (req, res, next) => {
    const seller = await Seller.findById(req.params.seller_id);
    const buyer = await Buyer.findById(req.user.roleId);

    if (!buyer) {
        return next(new ErrorHandler("User is Not Buyer", 400));
    }
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
        return next(new ErrorHandler("Items must be provided as an array", 400));
    }

    if (!seller) {
        return next(new ErrorHandler("Seller not found", 404));
    }

    const orderItems = items.map(item => {
        const { orderName, orderPrice } = item;
        if (!orderName || !orderPrice) {
            return next(new ErrorHandler("All fields are required for each item", 400));
        }
        return {
            orderName,
            orderPrice,
        };
    });

    seller.orders = seller.orders.concat({
        buyerId: req.user.roleId,
        items: orderItems,
    });

    await seller.save();

    res.status(200).json({
        success: true,
        orders: orderItems,
    });
});
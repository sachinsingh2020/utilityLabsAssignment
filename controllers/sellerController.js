import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Seller } from "../models/sellerModel.js";

export const createCatalog = catchAsyncError(async (req, res, next) => {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
        return next(new ErrorHandler("Items must be provided as an array", 400));
    }

    const seller = await Seller.findById(req.user.roleId);

    if (!seller) {
        return next(new ErrorHandler("Seller not found", 404));
    }

    const catalogItems = items.map(item => {
        const { catalogName, catalogDescription, catalogPrice } = item;
        if (!catalogName || !catalogDescription || !catalogPrice) {
            return next(new ErrorHandler("All fields are required for each item", 400));
        }
        return {
            catalogName,
            catalogDescription,
            catalogPrice,
        };
    });

    seller.catalog = seller.catalog.concat(catalogItems);

    await seller.save();

    res.status(200).json({
        success: true,
        catalog: catalogItems,
    });
});

export const getAllOrders = catchAsyncError(async (req, res, next) => {
    const seller = await Seller.findById(req.user.roleId);

    if (!seller) {
        return next(new ErrorHandler("Seller not found", 404));
    }

    res.status(200).json({
        success: true,
        orders: seller.orders,
    });
});

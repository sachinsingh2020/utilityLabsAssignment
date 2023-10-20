import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import { User } from "../models/userModel.js";
import { Buyer } from "../models/buyerModel.js";
import { Seller } from "../models/sellerModel.js";

export const register = catchAsyncError(async (req, res, next) => {
    const { firstName, lastName, email, password, role } = req.body;


    if (!firstName || !lastName || !email || !password || !role) {
        return next(new ErrorHandler('All fields are required', 400));
    }

    let user = await User.findOne({ email });

    if (user) {
        return next(new ErrorHandler("User already exists", 409));
    }

    let roleData;

    if (role === "buyer") {
        roleData = await Buyer.create({
            firstName,
            lastName,
            email,
        });
    } else if (role === "seller") {
        roleData = await Seller.create({
            firstName,
            lastName,
            email,
        });
    }
    const roleDataId = roleData._id;

    user = await User.create({
        firstName,
        lastName,
        email,
        password,
        role,
        roleId: roleDataId,
    });

    sendToken(res, user, "Registered Successfully", 201);

});

export const login = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please enter all fields", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401));

    const isMatch = await user.comparePassword(password);

    if (!isMatch)
        return next(new ErrorHandler("Incorrect Email or Password", 401));

    sendToken(res, user, `Welcome back, ${user.firstName}`, 200);

});

export const logout = catchAsyncError(async (req, res, next) => {
    res
        .status(200)
        .cookie("token", null, {
            expires: new Date(Date.now()),
            // httpOnly: true,
            // secure: true,
            sameSite: "none",
        })
        .json({
            success: true,
            message: "Logged Out Successfully",
            isAuthenticated: false,
        });
});
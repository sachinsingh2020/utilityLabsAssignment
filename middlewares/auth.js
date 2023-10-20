import jwt from 'jsonwebtoken';
import ErrorHandler from '../utils/errorHandler.js';
import { catchAsyncError } from './catchAsyncError.js';
import { User } from "../models/userModel.js";

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);
  if (!token) {
    return next(new ErrorHandler('Login First To Access This Resource', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded._id);

  next();
})




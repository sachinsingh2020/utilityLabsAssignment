import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please enter your last name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: validator.isEmail,
    },
    catalog: [],
    orders: [],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Seller = mongoose.model("Seller", schema);
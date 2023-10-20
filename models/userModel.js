import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";

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
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [6, "Password must be at least 6 characters"],
        select: false,
    },
    role: {
        type: String,
        required: [true, "Please enter your role"],
    },
    roleId: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: String,
});

schema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next();

    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
})


schema.methods.getJWTToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

schema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model('User', schema);

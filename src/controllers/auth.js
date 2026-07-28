import mongoose from "mongoose";
import { User } from "../modals/authModal.js";
import bcrypt from "bcryptjs";
import { uploadToCloudinary } from "../configs/cloudinary.js";
import { generateOtp, otpExpire } from "../utils/otp.js";

export const SignUp = async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;

    if (!fullName || !username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required...",
        success: false,
      });
    }

    const findUser = await User.findById({ email: email });
    if (findUser) {
      return res.status(400).json({
        message: "User already exists...",
        success: false,
      });
    }

    let avatar = "";
    if (req.file) {
      try {
        avatar = await uploadToCloudinary(req.file.buffer);
      } catch (error) {
        console.warn("Image not Uploaded..", error.message);
      }
    }

    const otp = generateOtp();

    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      fullName,
      username,
      email,
      password: hashPassword,
      avatar,
      otp,
      otpExpires: otpExpire(),
    });

    let userResponse = newUser.toObject();
    delete userResponse.password;

    res.status(201).json({
      message: "User created successfully...",
      success: true,
      data: userResponse,
    });
  } catch (error) {
    res.status(501).json({
      message: "Internal Server Error...",
    });
  }
};

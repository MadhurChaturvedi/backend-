import { User } from "../model/user.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Validate input fields
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!",
            });
        }

        // Check if user already exists 🐖
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({
                success: false,
                message: "This email ID is already registered.",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "Account created successfully."
            // user: {
            //     id: newUser._id,
            //     fullName: newUser.fullName,
            //     email: newUser.email,
            // },
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong. Server error.",
        });
    }
};

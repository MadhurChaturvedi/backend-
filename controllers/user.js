import { User } from "../model/user.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        if (!fullName || !email || !password) {
            res.status(403).json({
                success: false,
                message: "All feilds are required!"
            });

            // Check if user already register or not with id 🤨
            const user = await User.findOne(email);
            if (user) {
                res.status(403).json({
                    success: false,
                    message: "This emial id is already register..."
                });
            }

            const hashedPassword = await bcrypt.hash(password,10);
            const newUser = await new User({
                fullName,
                email,
                password:hashedPassword
            })

             await newUser.save();
            res.status(200).json({
                success: true,
                message: "Account created Successfully."
            })
        }
    } catch (error) {
        res.status(404).json({
            success: true,
            message: "Somthing went wrong server error"
        })
    }
}
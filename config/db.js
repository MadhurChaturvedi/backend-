import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB, {
            dbName: "backend_star",
        });
        console.log(`MongoDB Connected 🦦`.rainbow);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        // process.exit(1); // Exit process with failure
    }
};

export default connectDB;

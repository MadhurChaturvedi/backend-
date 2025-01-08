import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import colors from 'colors';
import userRouter from "./routes/user.js"

const app = express();
app.use(express.json());
// connect the DB
connectDB();

app.use("/api/user",userRouter);

app.get("/",(req,res)=>{
    res.send("NODE ❤️")
})
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port https://localhost:${PORT} 🤖👾👺`.green);
})
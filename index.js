import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import colors from 'colors';
import bodyParser from "body-parser";
import userRouter from "./routes/user.js"
import todoRouter from "./routes/todo.js"

const app = express();
// connect the DB
connectDB();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/v1/user",userRouter);
app.use("/api/v1/todo",todoRouter);

app.get("/",(req,res)=>{
    res.send("NODE ❤️")
})

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT} 🤖👾👺`.green);
})
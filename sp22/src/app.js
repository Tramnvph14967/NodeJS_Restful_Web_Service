// const express = require("express");
import express from 'express';
import productRouter from './routes/product';
import categoryRouter from './routes/category';



import mongoose from 'mongoose';
import cors from 'cors';



const app = express();



// middleware
app.use(express.json());
app.use(cors());


// Routing
app.use("/api", productRouter);
app.use("/api", categoryRouter);



// kết nối với data
mongoose.connect("mongodb://127.0.0.1:27017/we16306")
    .then(() => console.log("Connect db thanh cong"))
    .catch((error) => console.log(error))

// Connect data
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
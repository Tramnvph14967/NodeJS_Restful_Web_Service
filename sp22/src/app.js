// const express = require("express");
import express from 'express';
import productRouter from './routes/product';
import mongoose from 'mongoose';
const app = express();



// middleware
app.use(express.json());

// Routing
app.use("/api", productRouter);

// connect database
mongoose.connect("mongodb://localhost:27017/we16306")
    .then(() => console.log("Connect db thanh cong"))
    .catch((error) => console.log(error))


    
// Connect
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server đang chạy cổng ${PORT}`);
});
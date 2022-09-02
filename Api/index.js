const express = require ("express");
const app= express();
const mongoose = require("mongoose");
const dotenv = require("dotenv"); //env file imported
dotenv.config() //env file cofig here
const userRoutes = require("./routes/user") //userroute imported
const authRoutes = require("./routes/auth"); //authroute imported
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");;
const orderRoute = require("./routes/order");;

mongoose.connect(process.env.DATABASE_URL)
.then(() => console.log("DB connection successfully!!"))
.catch((err)=>{console.log(err);
}); 
app.use(express.json());
app.use("/api/auth", authRoutes);
// app.use("/api/login", authRoutes);
app.use("/api/products",productRoute)
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

//server is starting//
app.listen(process.env.PORT|| 5000,()=>{
    console.log("backend server is running");
});

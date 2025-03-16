const express = require("express");
const cors = require('cors')
const dotenv = require('dotenv')

const app = express();
dotenv.config()

app.use(express.json());
app.use(cors())

const productsRouter = require("./routers/products");

app.use("/api/products", productsRouter);

module.exports = app;

const express = require("express");
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

const routerProducts = require("./routers/products");

app.use("/api/products", routerProducts);

module.exports = app;

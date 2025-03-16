const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Vadim:<db_password>@cluster0.wllpr.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect()
  .then(() => {
    app.listen(8000);
    console.log("Connect success");
  })
  .catch((err) => {
    console.log(err.message);
  });

  //IJcI7iwfLNLqSsw9
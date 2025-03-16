const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Vadim:IJcI7iwfLNLqSsw9@cluster0.hid1j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(8000);
    console.log("Connect success");
  })
  .catch((err) => {
      console.log(err.message);
      process.exit(1)
  });

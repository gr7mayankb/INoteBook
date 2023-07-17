const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/inotebook";

async function connectToMongo() {
  await mongoose
    .connect(mongoURI)
    .then((result) => console.log("Mongoose Connected Successfully"))
    .catch((error) => console.log(error));
}

module.exports = connectToMongo;

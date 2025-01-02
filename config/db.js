const mongoose = require('mongoose');

const URI = ""

function connectDb() {
    mongoose.connect(URI)
    .then(() => console.send("connected mongodb successfully"))
    .catch((err) => console.log("mongodb connection error", err.message));
}

module.exports = connectDb;
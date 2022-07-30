//using th library
const mongoose = require("mongoose");

//making connection
mongoose.connect("mongodb://localhost/contact_list_db");

//checking connections
const db = mongoose.connection;

//through error evert for connections established or not
db.on("error", console.error.bind(console, "connection failed"));

//once connection is established printing the massage
db.once("open", function () {
    console.log("connected to db is successfull!!");
})

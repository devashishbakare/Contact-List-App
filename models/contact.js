//importing the library
const mongoose = require("mongoose");

//creating a scema and feilds in it
const schema = new mongoose.Schema({

    name :{
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
});

//assigning name of this schema in db
//NOTE : schema name in db should be capital
//mongoose.model(<Collectionname>, <CollectionSchema>)
const Contact = mongoose.model("Contact", schema);

//export this module
module.exports = Contact;

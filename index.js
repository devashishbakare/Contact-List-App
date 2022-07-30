const express = require('express');
const path = require("path");
const port = 8000;

//established connection for mongoose and to use db in controller we need to add this library with path
const db = require("./config/mongoose");
//created a schema, to use in controller we need to add path
const Contact = require("./models/contact");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
//middlewares
app.use(express.static("assets"));

var contactList = [
    {
        Name : "Devashish Bakare",
        phoneNo : "777481777"
    },
    {
        Name : "Aniket Pabale",
        phoneNo : "7778953245"
    }
];

app.get('/', function (request, response) {
    
    Contact.find({}, function(err, allContact){
        if (err) {
            console.log("Error for fetching contact");
            return;
        }
        return response.render("home", {
            text : "Contact List",
            contact_List : allContact
        });
    })
});

app.post('/add-contact', function (request, response){ 
    
   Contact.create({
    name : request.body.name,
    phone : request.body.phoneNo
   }, function (err, newContact){
        if (err) {
            console.log("contact not added", err);
            return;
        }
        console.log("contact has been adeed to database");
        console.log(newContact);
        return response.redirect("back");
   }); 
    //return reponse.redirect('back');//or redirect('/')
});


app.get("/delete-contact", function(req, res){
    let id = req.query.id;
    Contact.findByIdAndDelete(id, function(err){
        if (err) {
            console.log("Error while deleting the contactt");
            return;
        }
        return res.redirect("back");
    });
    
});


app.listen(port, function (err){
    if (err) {
        console.log("Opps error in running server ", error);
    }else{
        console.log("yeah! Server is running now on port ", port)//to run : nodemon fileName
    }
 });
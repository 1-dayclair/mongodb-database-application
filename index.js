const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

// Router
const router = require("./routes/user")
// Router^^

// Connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLAS_URI)
};
const PORT = 2000;
// Connection^^ 


const bodyParser = require("body-parser");

const app = express();

// Middleware 
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const userModel = require("./model/user");
const personModel = require("./model/person");
const commentModel = require("./model/comment");

const user = require("./routes/user");
app.use("/user", user);

const person = require("./routes/person");
app.use("/people", person);
// Routes ^^

app.set("view engine", "ejs"); 

app.use("/public", express.static("./public"));
app.use("/public/media", express.static("./public")); 

// Welcome
app.get("/begin", (req, res) => {
    res.render("index.ejs", { text: "Welcome to (In a Vaccum!)" });
    console.log("Welcome to (In a Vaccum!)");
});
// Welcome^^

// Login
app.get("/login", (req, res) => {
  res.render("login.ejs", { text: "Login: (In a Vaccum!)"});
  console.log("Login: (In a Vaccum!)"); 
});
// Login^^


// Error Handling
app.use((err, req, res, next) => {
res.status(500).send("ERROR! Something is not working properly...");
});
// Error Handling^^

// Server, start!
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}.`); 
}); 
// Server, start!^^

const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();


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

// Welcome
app.get("/", (req,res) => {
    res.send("Welcome to (In a Vaccum)");
});
// Welcome^^


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

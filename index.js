const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.ATLAS_URI)
}

const bodyParser = require("body-parser");

const PORT = 2000; 
const app = express(); 

app.use(express.json());

const user = require("./model/user");
const person = require("./model/person");
const comment = require("./model/comment");

const userRouter = require("./routes/user");
const personRouter = require("./routes/person");
const commentRouter = require("./routes/comment");



app.use("", userRouter);
app.use("", personRouter);
app.use("", commentRouter);

app.set("view engine", "ejs");
app.use("/public", express.static("/public")); 
app.use("/public/media", express.static("/public")); 


app.get("/", (req,res) => {
    res.send("Welcome to (In a Vaccum)");
});


app.get("/new", async (req, res) => {
    // try{
    //    const users = await user.find({});
    //    res.status(200).json(users); 
    // } catch (error) {
    //     res.status(500).json({message: error.message})
    // }
});

app.post("/new", async (req, res) => {
    // try {
    //     const brandNew = await user.create(req.body);
    //     res.status(200).json(brandNew)
    // } catch (error) {
    //     res.status(500).json({message: error.message})
    // }

});

app.put("/new/:id", async (req, res) => {
    // try {
    //     const {id} = req.params
    //     const update = await user.findByIdAndUpdate(id, req.body);
        
    //     if (!user) {
    //         return res.status(404).json({message: "User does not exist in system"});
    //     }
    //     const updateUser = await user.findById(id);
    //     res.status(200).json(update);
       
    //     console.log("System Updated!")

    // } catch (error) {
    //     res.status(500).json({message:error.message});
    // }
});

app.delete("/new/:id", async (req, res) => {
    // try {
    //     const {id} = req.params
    //     const disappear = await user.findByIdAndDelete(id);

    //     if (!disappear) {
    //         return res.status(404).json({message: "User does not exist in the system."})
    //     }

    //     res.status(200).json({message: "User removed from the system!"});
    //     console.log("Deleted!")

    // } catch (error) {
    //     res.status(500).json({message:error.message});
    // }
});



app.use((err, req, res, next) => {
res.status(500).send("ERROR! Something is not working properly...");
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}.`); 
});
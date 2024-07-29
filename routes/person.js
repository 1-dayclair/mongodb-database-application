const express = require("express");
const router = express.Router(); 
const userModel = require("../model/person");

router 
    .route("/humanbeing")
    .get(async (req, res) => {
        try{
            const people = await userModel.find({}); 
            res.status(200).json(people);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    });

router 
    .route("/born")
    .post(async (req, res) => {
        try{ 
            const newFolks = await userModel.create(req.body); 
            res.status(200).json(newFolks); 
        } catch (error) {
            res.status(500).json({message: error.message});
        }
        console.log("Brand new person!");
    });

module.exports = router;
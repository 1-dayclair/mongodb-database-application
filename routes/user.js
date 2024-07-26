const express = require("express");
const router = express.Router();

const user = require("../model/user");

router
    .route("/new")
    .get(async (req, res) => {
        try{
            const users = await user.find({});
            res.status(200).json(users); 
         } catch (error) {
             res.status(500).json({message: error.message})
         }
    });

router 
    .route("/new")
    .post(async (req, res) => {
        try {
            const brandNew = await user.create(req.body);
            res.status(200).json(brandNew);
            console.log("New user!");
        } catch (error) {
            res.status(500).json({message: error.message})
        }    
    });

router 
    .route("/new")
    .put(async (req, res) => {
        try {
            const {id} = req.params
            const update = await user.findByIdAndUpdate(id, req.body);
            
            if (!user) {
                return res.status(404).json({message: "User does not exist in system"});
            }
            const updateUser = await user.findById(id);
            res.status(200).json(update);
           
            console.log("System Updated!")
    
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    });

router 
    .route("/new/:id")
    .delete(async (req, res) => {
        try {
            const {id} = req.params
            const disappear = await user.findByIdAndDelete(id);
    
            if (!disappear) {
                return res.status(404).json({message: "User does not exist in the system."})
            }
    
            res.status(200).json({message: "User removed from the system!"});
            console.log("Deleted!")
    
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    });
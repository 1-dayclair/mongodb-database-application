const express = require("express");
const router = express.Router(); 
const userModel = require("../model/user");

router 
    .route("/new")
    .get(async (req, res) => {
        try{
            const users = await userModel.find({});
            res.status(200).json(users); 
         } catch (error) {
             res.status(500).json({message: error.message});
         }
    });

router 
    .route("/enhanced")
    .post(async(req, res) => {
        try {
            const brandNew = await userModel.create(req.body);
            res.status(200).json(brandNew);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    });

router
    .route("/alter/:id")
    .put(async(req, res) => {
        try {
            const {id} = req.params
            const update = await user.findByIdAndUpdate(id, req.body);
            
            if (!userModel) {
                return res.status(404).json({message: "User does not exist in system"});
            }
            const updateUser = await user.findById(id);
            res.status(200).json(update);
           
            console.log("System Updated!");
    
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    });

router 
    .route("/erase/:id")
    .delete(async(req, res) => {
        try {
            const {id} = req.params
            const disappear = await userModel.findByIdAndDelete(id);
    
            if (!disappear) {
                return res.status(404).json({message: "User does not exist in the system."});
            }
    
            res.status(200).json({message: "User removed from the system!"});
            console.log("Deleted!");
    
        } catch (error) {
            res.status(500).json({message:error.message});
        }
    });

    module.exports = router;

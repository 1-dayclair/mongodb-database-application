const express = require("express");
const router = express.Router(); 
const userModel = require("../model/comment");

router
    .route("/diplomacy")
    .post(async (req, res) => {
        try{ 
            const talk = await userModel.create(req.body);
            res.status(200).json(talk); 

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    });

router 
    .route("/eavesdropper")
    .get(async (req, res) => {
        try{ 
            const talkers = await userModel.find({});
            res.status(200).json(talkers);

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    });

module.exports = router;
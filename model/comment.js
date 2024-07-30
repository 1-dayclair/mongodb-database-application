const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comments: [{
        username: {type: String},
        comment: {type: String},
        reply: {type: String},
    }], 
});

module.exports = mongoose.model("comment", commentSchema); 
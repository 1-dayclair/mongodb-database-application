const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comments: {
        username: {type: String},
        comment: {type: String}, 
        date: {type: Date,
        },
        reply: {type: String},
        date: {type: Date}
    }
});

module.exports = mongoose.model("comment", commentSchema); 
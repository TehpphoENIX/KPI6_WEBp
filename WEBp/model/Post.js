const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    header: String,
    author: String,
    date: Date,
    imageSrc: String,
    imageAlt: String,
    text: String
})

module.exports = mongoose.model("Post",schema)
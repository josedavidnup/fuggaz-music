const mongoose = require("mongoose")

const Schema = mongoose.Schema

const GenreSchema = new Schema({
    name: {
        type:String,
        require:true
    }
})

const GenreModel = mongoose.model("genre", GenreSchema)

module.exports = GenreModel
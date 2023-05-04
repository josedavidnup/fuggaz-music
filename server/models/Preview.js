const mongoose = require("mongoose")

const Schema = mongoose.Schema
const OBJECT = mongoose.Types.ObjectId


const PreviewSchema = new Schema({
    audio: {
        type:String,
        require:true
    },
    video:{
        type:String,
    },
    duration: {
        type:Number,
        require:true
    },
    track:{
        type:OBJECT,
        require:true,
        ref:"track"
    }
})

const PreviewModel = mongoose.model("preview", PreviewSchema)

module.exports = PreviewModel
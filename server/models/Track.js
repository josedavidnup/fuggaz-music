const mongoose = require("mongoose")

const Schema = mongoose.Schema
const OBJECT = mongoose.Types.ObjectId

const TrackSchema = new Schema({
    name: {
        type:String,
        require:true
    },
    status: {
        type:String,
        default:"private"
    },
    artist: {
        type:OBJECT,
        require:true
    },
    album: {
        type:OBJECT,
        require:true,
        ref:"album"
    },
    audio: {
        type:String,
        require:true
    },
    img: {
        type:String,
        require:false
    },
    video: {
        type:String,
        require:false
    },
    genre: {
        type:OBJECT,
        require:true,
        ref:"genre"
    },
    duration: {
        type:Number,
        require:true
    },
    track_position: {
        type:Number,
        require:false
    },
    album_position: {
        type:Number,
        require:false
    },
    rank: {
        type:Number,
        require:false
    },
    release_date: {
        type:String,
        require:true
    },
    preview: {
        type:OBJECT,
        require:false,
        ref:"preview"
    },
    NOT_available_countries: {
        type:Array,
        require:false
    },
    contributors: {
        type:[OBJECT],
        require:false,
        ref:"user"
    },
})

const TrackModel = mongoose.model("track", TrackSchema)

module.exports = TrackModel
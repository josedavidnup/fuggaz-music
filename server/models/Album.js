const mongoose = require("mongoose")


const Schema = mongoose.Schema
const OBJECT = mongoose.Types.ObjectId

const AlbumSchema = new Schema({
    title: {
        type:String,
        require:true,
        unique:false
    },
    status: {
        type:String,
        default:"private"
    },
    link: {
        type:String
    },
    img: {
        type:String,
        require:true,
        unique:false
    },
    principal_genre: {
        type:OBJECT,
        require:true,
        unique:false,
        ref:"genre"
    },
    genres: {
        type:[OBJECT],// quizas los brackets de los arrays se deben poner rodeando el objeto
        require:true,
        ref:"genre"
    },
    duration: {
        type:Number,
        require:true
    },
    release_date:{
        type:String,
        require:true,
        unique:false
    } ,
    record_type: {
        type:String,
        unique:false
    },
    contributors: {
        type:[OBJECT],
        ref:"user"
    },
    artist: {
        type:OBJECT,
        require:true,
        unique:false,
        ref:"user"
    } ,
    tracks: {
        type:[OBJECT],
        ref:"track"
    },
})

const AlbumModel = mongoose.model("album", AlbumSchema)

module.exports = AlbumModel
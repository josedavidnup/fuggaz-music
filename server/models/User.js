const mongoose = require("mongoose")

const Schema = mongoose.Schema

const OBJECT = mongoose.Types.ObjectId


const UserSchema = new Schema({
    image: {
        type:String,
        default: "https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png"
    },
    valid: {
        type: Boolean,
        default: false
    },
    token: {
        type:String,
        default: ""
    },
    nickname: {
        type:String,
        unique:true,
        require:true,
    },
    password: {
        type:String,
        require:true,
    },
    rol:{
        type:String,
        default:"user"
    },
    link: {
        type:String
    },
    tracks_likes: {
        type:[OBJECT],
        ref:"track"
    },
    albums_likes: {
        type:[OBJECT],
        ref:"album"
    },
    subscriptions: {
        type:[OBJECT],
        ref:"user" //ARTISTS ARRAY
    },
    email: {
        type:String,
        require:true,
        unique:true
    },
    historial: {
        type:[OBJECT],
        ref:"track" // TRACKS ARRAY
    },
    albums: {
        type:[OBJECT],
        ref:"album"
    },
    subs: {
        type:Number,
        default:0
    },
    tracks: {
        type:[OBJECT],
        ref:"track"
    }
})

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel
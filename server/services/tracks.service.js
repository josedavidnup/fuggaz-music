const TrackModel = require("../models/Track")
const AlbumModel = require("../models/Album")
const UserModel = require("../models/User")

const getAllTracks = async (req, res) =>{
    try {
        const tracks = await TrackModel.find()
        if (!tracks) throw "No tracks";
        res.status(200).json(Tracks)
    } catch (error) {
        console.error(error)
    }
}

const createTrack = async (req,res) => {

    const {
    name,
    artist, //id del artista
    audio,
    genre, // id del genero
    duration,
    release_date,
    album //id del album
    }  = req.body
    
    if(!name) throw "Track's name is required"
    if(!audio) throw "Track's audio is required"
    if(!genre) throw "Track's genre is required"
    if(!duration) throw "Track's duration is required"
    if(!release_date) throw "Track's release_date is required"
    
    try {
    
        const created = await TrackModel.create(req.body)

        if(!created) throw "Fail to create"

        const findArtist = await UserModel.findById({_id:artist})

        if(!findArtist) throw "Artist not found"

        const findAlbum = await AlbumModel.findById({_id:album})

        if(!findAlbum) throw "Album not found"

        const artistTrack = await UserModel.findOneAndUpdate({_id:artist},{tracks:[...findArtist?.tracks,created?._id]})

        const albumTrack = await AlbumModel.findOneAndUpdate({_id:album},{tracks:[...findAlbum?.tracks,created?._id]})

        res.status(201).json(created)
        
    } catch (error) {
        console.error(error)
    }
    
    
    }

    const getTrackDetails = async (req,res) =>{
        const _id = req.params.id

        if(!_id) throw "cannot be searched without identification"
    
        try {
            const track = await TrackModel.findById({_id}).populate({
                path:"artist contributors",
                select:"nickname img subs"
            }).populate({
                path:"genre preview",
                select:"name video audio video duration"
            })

            if(!track) throw "Track not found"

            res.status(200).json(track)
        } catch (error) {
            console.error("this is the error",error)
        }
    }

    const deleteTrack = async (req,res) => {
        const _id = req.params.id
        if(!_id) throw "cannot be deleted without identification"
    
        try {
            const deleted = await TrackModel.findOneAndDelete({_id})
            
            if(!deleted) throw "Fail to delete Track"

            res.status(200).json(deleted)
        } catch (error) {
            console.error(error)
        }
    
    }

    const updateTrack = async (req,res) => {
        const _id = req.params.id
        const {body} = req.params

        if(!_id) throw "cannot be updated without identification"
        
        const keys = Object.keys(body)

        const keysValue = keys.filter(k => body[k] || Number.isInteger(body[k]) && !isNaN(body[k]) || typeof obj[k] === "boolean")

        if(!keysValue.length) throw "cannot be updated without information"

        let update = {}

        const insert = filtro.map(e => ({ [e] : body[e] })).forEach(e => update={...update,...e})

    
        try {
            const update = await TrackModel.findOneAndUpdate({_id},update)

            if(!deleted) throw "Fail to update Track"

            res.status(201).json(deleted)
        } catch (error) {
            console.error(error)
        }
    
    }

module.exports = {
    getAllTracks,
    createTrack,
    getTrackDetails,
    deleteTrack,
    updateTrack
}
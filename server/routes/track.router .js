const express = require('express');
const router = express.Router();
const {    getAllTracks,
    createTrack,
    getTrackDetails,
    deleteTrack,
    updateTrack} = require("../services/tracks.service")


//Routes

//GET
router.get('/track', getAllTracks);
router.get('/track/:id', getTrackDetails);

//POST
router.post('/track/:id', createTrack);

//PUT
router.put('/track/:id', deleteTrack);

//DELETE
router.delete('/track/:id', updateTrack);

module.exports = router;

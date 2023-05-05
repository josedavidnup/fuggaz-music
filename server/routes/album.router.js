const express = require('express');
const router = express.Router();
const {
  getAlbum,
  getAlbums,
  createAlbum,
  deleteAlbum,
  updateAlbum,
} = require('../services/album');

router.get('/albums', getAlbums);
router.get('/album/:id', getAlbum);
router.post('/create-album', createAlbum);
router.delete('/delete-album/:id', deleteAlbum);
router.put('/update-album/:id', updateAlbum);

module.exports = router;

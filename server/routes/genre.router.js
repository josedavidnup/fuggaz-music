const express = require('express');
const router = express.Router();
const {
  getGenres,
  getGenre,
  createGenre,
  deleteGenre,
  updateGenre,
} = require('../services/genre');

router.get('/genres', getGenres);
router.get('/genre/:id', getGenre);
router.post('/create-genre', createGenre);
router.delete('/delete-genre/:id', deleteGenre);
router.put('/update-genre/:id', updateGenre);

module.exports = router;

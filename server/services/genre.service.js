const GenreModel = require('../models/Genre');

const getGenres = async (req, res) => {
  try {
    const genres = await GenreModel.find();
    res.json(genres);
  } catch (error) {
    return res.status(404).send('Genres not found');
  }
};

const getGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await GenreModel.findById({ _id: id });
    res.json(genre);
  } catch (error) {
    return res.status(404).send('Genre not found');
  }
};
const createGenre = async (req, res) => {
  try {
    const newGenre = await new GenreModel(req.body).save();
    res.json(newGenre);
  } catch (error) {
    return res.status(400).send('New Genre failed');
  }
};

const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;
    await GenreModel.findOneAndRemove({ _id: id }).exec();
    res.send('Genre deleled');
  } catch (error) {
    return res.status(400).send('Product delete failed');
  }
};

const updateGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedModel = await GenreModel.findOneAndUpdate(
      { _id: id },
      { name }
    );
    res.json(updatedModel);
  } catch (error) {
    return res.status(400).send('Product update failed');
  }
};

module.exports = {
  createGenre,
  getGenre,
  getGenres,
  deleteGenre,
  updateGenre,
};

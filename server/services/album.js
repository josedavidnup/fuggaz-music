const AlbumModel = require('../models/Album');

const getAlbums = async (req, res) => {
  try {
    const albums = await AlbumModel.find();
    res.json(albums);
  } catch (error) {
    return res.status(404).send('Albums not found');
  }
};
const getAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await AlbumModel.findById({ _id: id });
    res.json(album);
  } catch (error) {
    return res.status(404).send('Album not found');
  }
};
const createAlbum = async (req, res) => {
  try {
    const newAlbum = await new AlbumModel(req.body).save();
    res.json(newAlbum);
  } catch (error) {
    console.log(error);
    return res.status(400).send('New Album failed');
  }
};
const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    await AlbumModel.findOneAndRemove({ _id: id }).exec();
    res.send('Album deleled');
  } catch (error) {
    return res.status(400).send('Album delete failed');
  }
};
const updateAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedModel = await AlbumModel.findOneAndUpdate(
      { _id: id },
      { name }
    );
    res.json(updatedModel);
  } catch (error) {
    return res.status(400).send('Album update failed');
  }
};

module.exports = {
  createAlbum,
  getAlbum,
  getAlbums,
  deleteAlbum,
  updateAlbum,
};

const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  upDateUser,
  deleteUser,
  getUserByEmail,
} = require('../services/users.service');

router.get('/user', getAllUsers);

router.get('/user/:id', getUserById);

router.get('/user-email/:email', getUserByEmail);

router.post('/user', createUser);

router.put('/user/:id', upDateUser);

router.delete('/user/:id', deleteUser);

module.exports = router;

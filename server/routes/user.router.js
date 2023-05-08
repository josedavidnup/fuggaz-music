const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  getUserById,
  upDateUser,
  deleteUser,
} = require("../services/users.service");

router.get("/user", getAllUsers);

router.get("/user/:id", getUserById);

router.post("/user", createUser);

router.put("/user/:id", upDateUser);

router.delete("/user/:id", deleteUser);

module.exports = router;

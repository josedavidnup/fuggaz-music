const UserModel = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.status(404).send("Users not founds");
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = await UserModel.findOne({ _id: id });
    res.json(userId);
  } catch (error) {
    res.status(404).send("User not found");
  }
};

const createUser = async (req, res) => {
  const { nickname, password, repeatPassword, email } = req.body;
  if (!nickname) throw "User's nickname is required";
  if (!password) throw "User's password is required";
  if (repeatPassword !== password)
    throw "it is necessary to repeat the password";
  if (repeatPassword !== password) throw "the password is different";
  if (!email) throw "User's email is required";
  try {
    const userCreated = await UserModel.create(req.body);
    res.status(200).json(userCreated).end();
  } catch (error) {
    res.status(404).send("User not created");
  }
};

const upDateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { nickname, password, repeatPassword } = req.body;
    const userUpdate = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        nickname: nickname,
        password: password,
        repeatPassword: repeatPassword,
      }
    );
    res.status(200).json(userUpdate);
  } catch (error) {
    res.status(404).send("unmodified user");
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await UserModel.findByIdAndDelete({ _id: id }).exec();
    res.send("delete user");
  } catch (error) {
    res.status(404).send("user not deleted");
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  upDateUser,
  deleteUser,
};

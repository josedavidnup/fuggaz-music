const jwt = require("jsonwebtoken");
const UserModel = require('../models/User')

const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const {id} = jwt.verify(token, process.env.JWT_SECRET || "kljlksdjf2oi3jlkj32");
      req.user = await UserModel.findById({_id: id}).populate({
        path:"albums albums_likes",
        select:"title img",
        populate:{
            path:"contributors",
            select:"nickname"
    }
    }).populate({
        path:"tracks tracks_likes",
        select:"title img duration audio",
        populate:{path:"genre"}
    }
     ).populate({
        path:"subscriptions",
        select:"nickname img subs"});
  
      return next();
    } catch (error) {
      return res.status(404).json({ msg: "Error checking token" });
    }
  }
  if (!token) {
    const error = new Error("Token not valid");
    res.status(401).json({ msg: error.message });
  }
  next();
};

module.exports = { checkAuth };

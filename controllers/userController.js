const User = require("../models/User");
module.exports = {
  createUser: async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const addUser = await new User({
        name,
        email,
        age,
      });
      await addUser.save();
      return res.status(201).send({
        statusCode: 201,
        success: true,
        Message: "user Created sucessfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        statusCode: 500,
        success: false,
        Message: "Server ErrorF",
      });
    }
  },
  getUser: async (req, res) => {
    let getAllUser =await User.find({});
    try {
      return res.status(200).send({
        statusCode: 200,
        success: true,
        Message: "get Created sucessfully",
        data: getAllUser,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        statusCode: 500,
        success: false,
        Message: "Server Error",
      });
    }
  },
};

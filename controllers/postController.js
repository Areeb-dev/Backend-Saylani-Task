const Post = require("../models/Post.js");
module.exports = {
  createPost: async (req, res) => {
    try {
      const { Postname, description, likes, user_id } = req.body;
      const addPost = await new Post({
        Postname,
        description,
        likes,
        user_id,
      });
      await addPost.save();
      return res.status(201).send({
        statusCode: 201,
        success: true,
        Message: "Post Created sucessfully",
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
  getPost: async (req, res) => {
    let getAllPost = await Post.find({}).populate("user_id");

    //with select method
    // let getAllPost = await Post.find({}).select("Postname").populate("user_id");
    
    //find one user.
    // let getOnePost = await Post.findOne({ Postname: 'Funny Post' }).select("name").populate("user_id");

    try {
      return res.status(200).send({
        statusCode: 200,
        success: true,
        Message: "get Post sucessfully",
        data: getAllPost,
        // data:getOnePost
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

const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    Postname: { type: String, required: true },
    description: { type: String, required: true },
    likes: { type: Number, required: true },
    user_id: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;

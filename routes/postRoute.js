const express = require("express");
const router = express.Router();
const {createPost,getPost}=require("../controllers/postController.js")

router.post("/post", createPost);
router.get("/post", getPost);

module.exports = router;

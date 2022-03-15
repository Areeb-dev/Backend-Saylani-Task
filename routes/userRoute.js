const express = require("express");
const router = express.Router();
const {createUser,getUser}=require("../controllers/userController.js")

router.post("/user", createUser);
router.get("/user", getUser);

module.exports = router;

const express = require("express");
const { getFeed } = require("./controller/feed");

const router = express.Router();

router.get("/", getFeed);

module.exports = router;

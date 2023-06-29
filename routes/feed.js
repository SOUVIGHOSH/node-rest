const express = require("express");
const {
  getFeed,
  postFeed,
  putFeed,
  showFeed,
  deleteFeed,
} = require("../controller/feed");
const router = express.Router();

router.get("/:id", showFeed);
router.get("/", getFeed);

router.post("/", postFeed);
router.put("/:id", putFeed);

router.delete("/:id", deleteFeed);

module.exports = router;

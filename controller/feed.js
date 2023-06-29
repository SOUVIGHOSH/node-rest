const { time } = require("console");
const { title } = require("process");

let feeds = [
  {
    id: 1,
    feed: "Feed 1",
  },
  {
    id: 2,
    feed: "Feed 2",
  },

  {
    id: 3,
    feed: "Feed 3",
  },
];

exports.getFeed = (req, res, next) => {
  res.status(200).json({
    feeds,
  });
};

exports.postFeed = (req, res, next) => {
  feeds.push({
    id: feeds.length + 1,
    feed: req.body.title,
  });
  res.status(201).json({
    Feed: {
      title: req.body.title,
      description: req.body.description,
    },
  });
};

exports.putFeed = (req, res, next) => {
  let id = req.params.id;
  feeds[id - 1] = {
    ...feeds[id - 1],
    feed: req.body.title,
  };
  console.log(req.params.id);
  res.status(200).json({
    Feed: {
      title: req.body.title,
      description: req.body.description,
    },
  });
};

exports.showFeed = (req, res, next) => {
  let id = req.params.id;
  res.status(200).json({
    Feed: feeds[id - 1],
  });
};

exports.deleteFeed = (req, res, next) => {
  let id = req.params.id;
  feeds.splice(id - 1, 1);
  res.status(200).json({
    message: "Record succesfully deleted",
  });
};

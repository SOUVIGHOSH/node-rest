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

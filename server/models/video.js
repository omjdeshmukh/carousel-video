const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  videoLink: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Video", videoSchema);

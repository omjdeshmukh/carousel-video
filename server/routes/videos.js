const express = require("express");
const router = express.Router();
const Videos = require("../models/video");

//Get all videos
router.get("/g", async (req, res) => {
  try {
    const videos = await Videos.find();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

//Post videos
router.post("/p", async (req, res) => {
  const video = new Videos({
    title: req.body.title,
    videoLink: req.body.videoLink,
  });
  try {
    const newVideo = await video.save();
    res.status(201).json(newVideo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete videos
router.delete("/:id", async (req, res) => {
   try {
     await Videos.remove();
     res.json({ message: "Deleted Videos" });
   } catch (err) {
     res.status(500).json({ message: err.message });
   }
});

module.exports = router;

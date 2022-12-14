const express = require("express");
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require("../db");

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

tagsRouter.get("/:tagName/posts", async (req, res, next) => {
  // read the tagname from the params
  try {
    const posts = await getPostsByTagName
    res.send ({ posts })
    // send out an object to the client { posts: // the posts }
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter;

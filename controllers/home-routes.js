const router = require('express').Router();

const {User,Comment,Post} = require("../models")

router.get("/", async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          { model: User },
          { model: Comment }
        ]
      });
  
      const postData = dbPostData.map((post )=> post.get({ plain: true }));
      console.log(postData);
      res.render("homepage", { postData });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  
module.exports = router
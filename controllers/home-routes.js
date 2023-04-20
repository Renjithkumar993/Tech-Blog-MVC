const router = require("express").Router();

const { json } = require("express");
const { User, Comment, Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User }],
      order: [['createdAt', 'DESC']]
    });
  
    const postData = dbPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", { postData ,loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get("/post/:id" , async(req, res) =>{
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {

    try {
      const dbpostData = await Post.findByPk(req.params.id , {include:[{model:User},{model:Comment, include : [{model:User}]}]});
      

      const postidData = dbpostData.get({ plain: true });
     console.log(postidData)
      res.render('postid', {postidData ,loggedIn: req.session.loggedIn  });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
})

router.post("/post/:id", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    try {
      const dbpostcomment = await Comment.create({
        text: req.body.text,
        commenterUsername: req.session.user_id,
        commentpost: req.params.id
      });
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      // Respond with error message
      res.status(400).json({ error: err.message });
    }
  }
});













router.post("./login");

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;

const { Post } = require('../models');

const posts = [
  {
    title: 'My First Post',
    content: 'This is my first blog post. I hope you enjoy it!',
    creatorUsername: 1,
    createdAt: new Date(),
  },
  {
    title: 'A Beginner\'s Guide to Node.js',
    content: 'In this post, I\'ll introduce you to Node.js and show you how to get started with it.',
    creatorUsername: 2,
    createdAt: new Date(),
  },
  {
    title: 'React vs. Angular',
    content: 'Which one is better: React or Angular? In this post, I\'ll compare the two and help you decide.',
    creatorUsername: 3,
    createdAt: new Date(),
  },
];

 const seedPosts = () => {
Post.bulkCreate(posts);

}

module.exports = seedPosts;
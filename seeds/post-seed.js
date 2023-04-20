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
  {
    title: '10 Tips for Writing Clean Code in JavaScript',
    content: 'In this post, I\'ll share 10 tips for writing clean and maintainable code in JavaScript.',
    creatorUsername: 1,
    createdAt: new Date(),
  },
  {
    title: 'Getting Started with React Native',
    content: 'In this post, I\'ll show you how to get started with React Native and build your first mobile app.',
    creatorUsername: 2,
    createdAt: new Date(),
  },
  {
    title: 'Best Practices for Building RESTful APIs',
    content: 'In this post, I\'ll share some best practices for building RESTful APIs using Node.js and Express.',
    creatorUsername: 1,
    createdAt: new Date(),
  },
];


 const seedPosts = () => {
Post.bulkCreate(posts);

}

module.exports = seedPosts;
const { Comment } = require('../models');

const comments = [
  {
    text: 'Great post!',
    commenterUsername: 1,
    commentpost: 1,
  },
  {
    text: 'Thanks for sharing!',
    commenterUsername: 2,
    commentpost: 1,
  },
  {
    text: 'I have a question...',
    commenterUsername: 3,
    commentpost: 2,
  },
];

 const seedComment  = () => {
  Comment.bulkCreate(comments);
}


module.exports = seedComment;
const Post = require("./post")
const User = require("./user")
const Comment = require("./comment")





User.hasMany(Comment,{
    foreignKey: 'commenterUsername',
    onDelete: 'CASCADE'
  });
  
  User.hasMany(Post,{
    foreignKey: 'creatorUsername',
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(Post,{
    foreignKey: 'commentpost',
    onDelete: 'CASCADE'
  });
  
  Post.hasMany(Comment,{
    foreignKey: 'commentpost', 
    onDelete: 'CASCADE'
  });
  


module.exports = { User,Comment,Post}
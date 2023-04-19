
const userSeed= require("./user-seeds")
const seedPosts = require("./post-seed");
const seedComment =  require("./comment-seed")


 const seedAll  = async () => {

      await userSeed();
      console.log('Seed data for users table inserted successfully.');
  
      await seedPosts();
      console.log('Seed data for posts table inserted successfully.');
  
      await seedComment();
      console.log('Seed data for comments table inserted successfully.');
  
      process.exit
  }

  seedAll();
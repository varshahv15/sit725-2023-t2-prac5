let client = require('../dbConnect');


let collection = client.db().collection('Cat');

function postCat(cat,callback) {
    collection.insertOne(cat,callback);
  }
  
function getAllCats(callback){
    collection.find({}).toArray(callback);
  }

  module.exports = {postCat,getAllCats}
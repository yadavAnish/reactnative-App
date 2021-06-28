const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name:  {
    type:String, required:false, trim:true
  }
  
});

const MovieSchema = mongoose.model("movieSchema", movieSchema);
module.exports = MovieSchema;

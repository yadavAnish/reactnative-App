const MovieSchema = require("../db/model");
const postMovie = async () => {
  const movie = await MovieSchema.find();
  return movie;
};

const getMovie = async () => {
  const movie = await MovieSchema.find();
  return movie;
}; 

module.exports = {
  postMovie,
  getMovie
};

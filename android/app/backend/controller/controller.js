 
const movieService=require("../service/service");
const localmovieService = require("../db/model");

const postMovie = async (req, res, next) => {

    try {
      // const movie = await movieService.getMovie();
            const movie = await localmovieService.postMovie();

      res.status(200).json({ result: movie });
    } catch (err) {
      next(err);
    }
  };
  
  const getMovie = async (req, res, next) => {
    try {
      // const movie = await movieService.getMovie();
            const movie = await movieService.getMovie();

      res.status(200).json({ result: movie });
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = {
    postMovie,
    getMovie
  };
  
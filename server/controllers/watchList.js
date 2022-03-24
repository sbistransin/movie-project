const Movie = require('../models/movie');
const User = require('../models/user');

exports.addMovieToList = function(req, res) {
  User.findOne({_id: req.user._id}, function(err, user) {
    const movie = new Movie.MovieModel(req.body.movie);

    movie.save(function (err, value) {
      user.watchList.push(movie);

      user.save(function (err, user) {
        res.send({
          movie,
          watchListCount: user.watchList.length,
        });
      });
    });
  });
};

exports.getWatchList = function (req, res) {
  User.findOne({_id: req.user._id}, function(err, user) {
    console.log(user.watchList);
    res.send({
      movies: user.watchList,
      watchListCount: user.watchList.length,
    });
  });
};


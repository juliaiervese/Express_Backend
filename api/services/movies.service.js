import Movie from '../models/Movie.js';

export const createMovie = async (data, userId) => {
  const movie = new Movie({ ...data, user: userId });
  return await movie.save();
};

export const getMovies = async (userId) => {
  return await Movie.find({ user: userId });
};

export const getMovieById = async (id, userId) => {
  return await Movie.findOne({ _id: id, user: userId });
};

export const updateMovie = async (id, data, userId) => {
  return await Movie.findOneAndUpdate(
    { _id: id, user: userId },
    data,
    { new: true }
  );
};

export const partialUpdateMovie = async (id, data, userId) => {
  return await Movie.findOneAndUpdate(
    { _id: id, user: userId },
    data,
    { new: true }
  );
};

export const deleteMovie = async (id, userId) => {
  await Movie.findOneAndDelete({ _id: id, user: userId });
};

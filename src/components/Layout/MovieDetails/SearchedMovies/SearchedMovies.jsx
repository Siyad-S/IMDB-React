import React from 'react';
import "../SearchedMovies/SearchedMovies.css";

const SearchedMovies = ({ movieData, navigate }) => {
  return Array.isArray(movieData) && movieData.length > 0 ? (
    <div className="showSearchedMovies_card_div">
      {movieData.map((movie) => (
        <div className="showSearchedMovies_card" key={movie.id}>
          <div
            className="showSearchedMovies_card_image"
            onClick={() => navigate(`/moviedetail/${movie.id}`)}
          >
            <img src={movie.image} alt="" />
          </div>
          <div
            className="showSearchedMovies_content"
            onClick={() => navigate(`/moviedetail/${movie.id}`)}
          >
            <h4>{movie.title}</h4>
            <h5>{movie.year}</h5>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p></p>
  );
};

export default SearchedMovies;

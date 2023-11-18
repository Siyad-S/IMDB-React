import React from 'react';
import "../RelatedMovies/RelatedMovies.css";

const RelatedMovies = ({ movieDetailSearch, navigate }) => {
  return (
    <div className='related_movie_div'>
      <h1>Related Movies</h1>
      {Array.isArray(movieDetailSearch) && movieDetailSearch.length > 0 ? (
        <div className="relatedMovie_card_div">
          {movieDetailSearch.map((movie) => (
            <div className="relatedMovie_card" key={movie.id}>
              <div className="relatedMovie_card_image" onClick={() => navigate(`/moviedetail/${movie.id}`)}>
                <img src={movie.image} alt="" />
              </div>
              <div className="relatedMovie_content" onClick={() => navigate(`/moviedetail/${movie.id}`)}>
                <h4>{movie.title}</h4>
                <h5>{movie.year}</h5>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default RelatedMovies;

import React from 'react';
import "../RelatedMovies/RelatedMovies.css"

const RelatedMovies = ({ movieDetailSearch, navigate }) => {
  let relatedMovies = null;

  if (Array.isArray(movieDetailSearch) && movieDetailSearch.length > 0) {
    relatedMovies = (
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
    );
  }

  return <>{relatedMovies}</>;
};

export default RelatedMovies;

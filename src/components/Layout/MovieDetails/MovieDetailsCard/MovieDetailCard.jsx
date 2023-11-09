import React from "react";
import "../MovieDetailsCard/MovieDetailCard.css";

const MovieDetailCard = ({ movieDetail }) => {
  return (
    <>
      <div className="movie_detail_card">
        <div className="movie_detail_image">
          <img src={movieDetail.images} alt="" />
        </div>
        <div className="movieDetail_content">
          <h3>{movieDetail.title}</h3>
          <h5>{movieDetail.year}</h5>
          <h5>Type : {movieDetail.contentType}</h5>
          <h5>Genre : {movieDetail.genre}</h5>
          <h6>Directors : {movieDetail.directors}</h6>
          <h6>Actors : {movieDetail.actors}</h6>
          <h6>Status : {movieDetail.productionStatus}</h6>
          <h6>Duration : {movieDetail.runtime}</h6>
          <h6>Description : {movieDetail.plot}</h6>
        </div>
      </div>
    </>
  );
};

export default MovieDetailCard;

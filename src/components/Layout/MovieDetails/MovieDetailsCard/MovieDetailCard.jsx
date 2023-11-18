import React, { useContext, useState } from "react";
import axios from "axios";
import { DataContext } from "../../Context/contextApi";
import "../MovieDetailsCard/MovieDetailCard.css";

const MovieDetailCard = ({ movieDetail }) => {
  const { fetchWatchlist, removeWatchlistMovie } = useContext(DataContext);
  const [addedToWatchlist, setAddToWatchlist] = useState(false);

  const postWatchlistMovie = async () => {
    try {
      await axios.post(`http://localhost:8000/watchlist`, movieDetail);
      setAddToWatchlist(true);
    } catch (error) {
      console.error(error);
    }
    fetchWatchlist();
  };

  function removeFunction() {
    setAddToWatchlist(false);
    removeWatchlistMovie(movieDetail.id);
  }

  const button = addedToWatchlist ? (
    <button onClick={removeFunction}>Remove from Watchlist</button>
  ) : (
    <button onClick={postWatchlistMovie}>Add To Watchlist</button>
  );

  return (
    <>
      <div className="movie_detail_card">
        <div className="movie_detail_image">
          <img src={movieDetail.images} alt="" />
        </div>
        <div className="movieDetail_content">
          <div className="movie_detail_text">
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
          <div className="add_to_watchlist">{button}</div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailCard;

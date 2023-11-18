import React, { useContext, useEffect } from "react";
import "./Watchlist.css";
import { DataContext } from "../Context/contextApi";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const { watchlist } = useContext(DataContext);
  const { fetchWatchlist, removeWatchlistMovie } = useContext(DataContext);
  const navigate = useNavigate()

  useEffect(() => {
    fetchWatchlist();
  });

  return (
    <div className="watchlist_route">
      <div className="watchlist_container">
        <h1>Watchlist Movies</h1>
        <div className="watchlist_movies_shower">
          <div className="watchlist_shower">
            {watchlist.map((watchlistMovie) => (
              <div className="watchlist_card" key={watchlistMovie.id}>
                <div className="watchlistImage"  onClick={() => navigate(`/moviedetail/${watchlistMovie.id}`)}>
                  <img src={watchlistMovie.image} alt="" />
                </div>
                <div className="watchlist_content">
                  <h3>{watchlistMovie.title}</h3>
                  <h5>{watchlistMovie.year}</h5>
                </div>
                <div className="remove_icon">
                  <button
                    className="remove_watchlist_btn"
                    onClick={() => removeWatchlistMovie(watchlistMovie.id)}
                  >
                    <i className="material-symbols-outlined">playlist_remove</i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;

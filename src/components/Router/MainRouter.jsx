import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "../Layout/MovieDetails/MovieDetail";
import Header from "../Layout/Header/Header";
import Body from "../Layout/MainBody/Body";
import { DataProvider } from "../Layout/Context/contextApi";
import WatchlistMovies from "../Layout/ShowWatchlist/Watchlist"

const MainRouter = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchInput, setSearchInput] = useState(null);


  return (
    <div>
      <DataProvider>
      <Header setMovieData={setMovieData} searchInput={searchInput} setSearchInput={setSearchInput} />
        <Routes>
          <Route path="/" element={<Body movieCard={movieData} setSearchInput={setSearchInput} />} />
          <Route path="/moviedetail/:movieId" element={<MovieDetail movieData={movieData}setSearchInput={setSearchInput}/>}/>
          <Route path="/watchlist" element={<WatchlistMovies />} />
        </Routes>
      </DataProvider>
    </div>
  );
};

export default MainRouter;

import {React, useState} from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "../Layout/MovieDetails/MovieDetail";
import Header from "../Layout/Header/Header";
import Body from "../Layout/MainBody/Body";

const MainRouter = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchInput, setSearchInput] = useState(null);

  return (
    <div>
      <Header setMovieData={setMovieData} searchInput={searchInput} setSearchInput={setSearchInput}  />
      
      <Routes>
        <Route path="/" element={<Body movieCard={movieData}/>}/>
        <Route path="/moviedetail/:movieId" element={<MovieDetail movieData={movieData} setSearchInput={setSearchInput} />} />
      </Routes>
    </div>
  );
};

export default MainRouter;

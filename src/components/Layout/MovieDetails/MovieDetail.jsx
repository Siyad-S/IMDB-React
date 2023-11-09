import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../MovieDetails/MovieDetail.css";
import RelatedMovies from "./RelatedMovies/RelatedMovies";
import SearchedMovies from "./SearchedMovies/SearchedMovies";
import MovieDetailCard from "./MovieDetailsCard/MovieDetailCard";

const MovieDetail = ({ movieData }) => {
  const [movieDetail, setMovieDetail] = useState([]);
  const { movieId } = useParams();
  const [movieDetailSearch, setMovieDetailSearch] = useState([]);
  const navigate = useNavigate();

  // to show single movie by it's id******************************
  useEffect(() => {
    axios
      .get(`https://imdb-api.projects.thetuhin.com/title/${movieId}`)
      .then((response) => {
        const movieData = response.data;
        console.log(movieData);
        setMovieDetail(movieData);
        handlesetMovieDetailSearch(response.data.title);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movieId]);

  // to show related movies to the title of the single movie got by it's id*****************
  const handlesetMovieDetailSearch = (title) => {
    axios
      .get(`https://imdb-api.projects.thetuhin.com/search?query=${title}`)
      .then((response) => {
        console.log(response.data);
        let relatedMovies = response.data.results;
        setMovieDetailSearch(relatedMovies);
      });
  };
  console.log(movieDetailSearch);

  return (
    <div className="movie_details_page ">
      <div className="body_container ">
        <MovieDetailCard movieDetail={movieDetail} />
        <div className="related_movie_container">
          {/* <h2>Related Movies</h2> */}
          <RelatedMovies movieDetailSearch={movieDetailSearch} navigate={navigate} />
        </div>
        <div className="searched_movie_container">
          <SearchedMovies movieData={movieData} navigate={navigate} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

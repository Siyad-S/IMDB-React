import React, { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Header.css";
import HeaderChild from "./HeaderChild/HeaderChild";

const Header = ({ setMovieData, searchInput, setSearchInput }) => {
  const reload = useLocation();

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const search = useCallback(() => {
    axios
      .get(`https://imdb-api.projects.thetuhin.com/search?query=${searchInput}`)
      .then((response) => {
        setMovieData(response.data.results);
        console.log(response.data.results); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchInput, setMovieData]);

  useEffect(() => {
    setSearchInput(""); 
    setMovieData([]);
  }, [reload, setSearchInput, setMovieData]);




  return (
    <>
      <div className="header">
        <div className="body_container header_container">
          <HeaderChild search={search} handleSearch={handleSearch} searchInput={searchInput} />
        </div>
      </div>
    </>
  );
};

export default Header;

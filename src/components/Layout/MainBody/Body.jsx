import React from "react";
import "../MainBody/Body.css";
import { useNavigate } from "react-router-dom";

const Body = ({ movieCard }) => {
  const navigate = useNavigate(); // Move the useNavigate hook inside the component function

  let content = null;

  if (Array.isArray(movieCard) && movieCard.length > 0) {
    content = (
      <div className="movie_card_div">
        {movieCard.map((movie) => (
          <div className="movie_card" key={movie.id} onClick={() => navigate(`/moviedetail/${movie.id}`)}>
            <div className="movie_card_image">
              <img src={movie.image} alt="" />
            </div>
            <div className="movie_content">
              <h4>{movie.title}</h4>
              <h5>{movie.year}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="main-banner">
      <div className="body_container">
        <div className="body_image_div">
          <img
            src="https://i.ytimg.com/vi/MhFxMI_ujVk/maxresdefault.jpg"
            alt="Banner"
          />
        </div>
        <div className="card_container">
        {content}
        </div>
      </div>
    </div>
  );
};

export default Body;

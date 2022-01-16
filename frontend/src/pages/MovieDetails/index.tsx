import { ReactComponent as StarImage } from "assets/images/star.svg";

import ReviewCard from "./ReviewCard";
import "./styles.css";

const MovieDetails = () => {
  return (
    <div className="movies-container">
      <div className="id-card">
        <h1>Tela detalhes do filme </h1>
      </div>
      <div className="review-card">
        <ReviewCard />
      </div>

      <div className="user-container">
        <div className="username-review">
          <StarImage />
          <p>name</p>
        </div>

        <div className="comment-card">
          <p>text</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

import { Link } from "react-router-dom";

import "./styles.css";

const Movies = () => {
  return (
    <div className="movie-container">
      <div>
        <h1>Tela listagem de filmes</h1>
      </div>

      <div>
        <Link to="movies/1">
          <h3>Acessar /movies/1</h3>
        </Link>
      </div>

      <div>
        <Link to="movies/1">
          <h3>Acessar /movies/2</h3>
        </Link>
      </div>
    </div>
  );
};

export default Movies;

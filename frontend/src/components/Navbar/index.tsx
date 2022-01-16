import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/movies">
        <h1>Movie Flix</h1>
        </Link>
        <div className="navbar-logout-button">
          <span className="navbar-logout-button-text">Sair</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

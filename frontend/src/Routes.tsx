import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Navbar from "components/Navbar";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import Home from "pages/Home";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/auth" exact />
      <Route
        path="/auth"
        render={() => {
          return <Home text="Home MovieFLix" />;
        }}
      />

      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;

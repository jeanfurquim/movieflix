import { ReactComponent as LoginImage } from "assets/images/auth.svg";
import { ReactComponent as Logo } from "assets/images/logobranca.svg";

import Auth from "../Auth";

import "./styles.css";

type Props = {
    text: string;
}

const Home = ({text} : Props) => {
  return (
    <div className="login-container">
      <div className="login-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <LoginImage />
        <Logo />
      </div>
      <div className="login-form-container">
        <Auth />
      </div>
    </div>
  );
};

export default Home;

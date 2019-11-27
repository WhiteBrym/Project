import React from "react";
import Home from "./Components/Home";
import Game from "./Components/Game";
import GameContent from "./Components/GameContent";
import Esports from "./Components/Esports";
import EsportsContent from "./Components/EsportsContent";
import TexhnologyContent from "./Components/TechnologyContent";
import Technology from "./Components/Technology";
import AuthButton from "./Components/Hoc/AuthButton";
import PrivateRoute from "./Components/Hoc/PrivateRoute";
import LoginPage from "./Auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="bodyContent">
          <Router>
            <nav>
              <span>
                <Link to="/">
                  <button>Home</button>
                </Link>
              </span>

              <span>
                <Link to="/Games">
                  <button>Games</button>
                </Link>
              </span>

              <span>
                <Link to="/Esports">
                  <button>ESport</button>
                </Link>
              </span>

              <span>
                <Link to="/Technology">
                  <button>Technology</button>
                </Link>
              </span>

              <span>
                <Link to="/login">
                  <AuthButton />
                </Link>
              </span>
            </nav>

            <Switch>
              <PrivateRoute exact path="/Games">
                <Game />
              </PrivateRoute>

              <PrivateRoute exact path="/Games/:game">
                <GameContent />
              </PrivateRoute>

              <PrivateRoute exact path="/Esports">
                <Esports />
              </PrivateRoute>

              <PrivateRoute exact path="/Esports/:esport">
                <EsportsContent />
              </PrivateRoute>

              <PrivateRoute exact path="/Technology">
                <Technology />
              </PrivateRoute>

              <PrivateRoute exact path="/Technology/:technology">
                <TexhnologyContent />
              </PrivateRoute>

              <Route path="/login">
                <LoginPage />
              </Route>

              <PrivateRoute path="/">
                <Home />
              </PrivateRoute>
            </Switch>
          </Router>
        </div>
        <div>
          <footer>
            <div>
              <h5>Lobach Yurii</h5>
            </div>
            <div className="footerIcon">
              <a href="https://www.facebook.com">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://telegram.org/">
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import { StoreProvider } from "./utils/GlobalState";
import Login from "./components/LogIn";
import Matches from "./components/Matches";
import Swipe from "./components/Swipe";
import LandingPage from "./components/LandingPage";
import SignUp from "./components/SignUp";
import hammer from "hammerjs";

function App() {
  console.log(hammer);
  return (
    <Router>
      <div>
        <StoreProvider>
          <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Matches" component={Matches} />
            <Route exact path="/Swipe" component={Swipe} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/SignUp" component={SignUp} />
            {/* <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} />  */}
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;

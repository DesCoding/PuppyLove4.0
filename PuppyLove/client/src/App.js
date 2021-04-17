import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import Login from "./components/LogIn";
import Matches from "./components/Matches";
import Swipe from "./components/Swipe";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Matches" component={Matches} />
            <Route exact path="/Swipe" component={Swipe} />
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

import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Matches from "./Matches";
import Swipe from "./Swipe";
import { useStoreContext } from "../utils/GlobalState";
import { Redirect } from "react-router-dom";

const Match = (props) => {
  const [state, dispatch] = useStoreContext();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token") || !state.username) {
      setIsLoggedIn(false);
    } else {
      API.getMatches(state.username).then((data) => {
        setMatches(data.data);
      });
    }
  }, [state]);
  return (
    <div className="container">
      {!isLoggedIn && <Redirect to="/login" />}
      {/* Hello! Welcome, {state.username} */}
      <div className="row mt-5">
        <div className="col-md-8 mb-3">
          <Matches matches={matches} />
        </div>
        <div className="col-md-4 mb-3">
          <Swipe username={state.username} />
        </div>
      </div>
    </div>
  );
};

export default Match;

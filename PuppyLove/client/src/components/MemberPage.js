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
    <div>
      {!isLoggedIn && <Redirect to="/login" />}
      Hello! Welcome, {state.username}
      <Matches matches={matches} />
      <Swipe username={state.username} />
    </div>
  );
};

export default Match;

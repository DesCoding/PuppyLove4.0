import React from "react";
//import Match from "./MemberPage";
import API from "../utils/API";
import { useState, useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { Redirect } from "react-router-dom";
const Matches = () => {
  const [state, dispatch] = useStoreContext();

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    console.log("getting matches", state.username);
    API.getMatches(state.username)
      .then((data) => {
        setMatches(data.data);
        console.log("setting matches", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state.getMatchCount]);

  console.log(matches);
  return (
    // <div className="col-md-4 mb-3 side"></div>
    <div className="side">
      <div className="header">
        <div className="title">Welcome, {state.username}</div>
      </div>
      <div className="menu">
        <ul>
          {" "}
          <li className="active">Matches</li>
        </ul>
      </div>
      <div className="matchesContainer">
        {matches.length &&
          matches.map((match, idx) => (
            <li className="messages" key={idx}>
              <img className="avatar" src={match.imageURL} />
            </li>
          ))}
      </div>
    </div>
  );
};

export default Matches;

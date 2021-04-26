import React from "react";
//import Match from "./MemberPage";
import API from "../utils/API";
import { useState, useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
const Matches = ({ matches }) => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {}, []);

  return (
    // <div className="col-md-4 mb-3 side"></div>
    <div className="side">
      <div className="header">
        <div className="title">Welcome, {state.username}</div>
      </div>
      <div className="menu">
        <ul>
          {" "}
          <li class="active">Matches</li>
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

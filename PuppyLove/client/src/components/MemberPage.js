import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Matches from "./Matches";
import Swipe from "./Swipe";
import { useStoreContext } from "../utils/GlobalState";
import { Redirect } from "react-router-dom";

const Match = (props) => {
  const [state, dispatch] = useStoreContext();

  return (
    <div className="container">
      {!state.isLoggedin && <Redirect to="/login" />}
      {/* Hello! Welcome, {state.username} */}
      <div className="row mt-5">
        <div className="col-md-8 mb-3">
          <Matches />
        </div>
        <div className="col-md-4 mb-3">
          <Swipe />
        </div>
      </div>
    </div>
  );
};

export default Match;

import React from "react";
import API from "../utils/API";

const Match = (props) => {
  return (
    <li>
      {props.name}
      <img src={props.image} />
    </li>
  );
};

export default Match;

import React from "react";
//import Match from "./MemberPage";
import API from "../utils/API";
import { useState, useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
const Matches = ({ matches }) => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {}, []);

  return (
    <div className="col-md-4 mb-3 side">
      <div className="header">
        <div className="title">{state.username}</div>
      </div>
      <div className="menu">
        <ul>
          {matches.length &&
            matches.map((match, idx) => (
              <li key={idx}>
                <img src={match.imageURL} />
              </li>
            ))}
        </ul>
      </div>
      <div className="matchesContainer"></div>
    </div>
  );
};

export default Matches;

// function loadMatches (){
//   $.get("/api/loadMatches").then(data => {
//   console.log(data, "matches");
//   $("div.matchesContainer").children(".messages").remove();
//   data.forEach((match)=>{
//   let message = `<div class="messages">
//                   <div class="avatar">
//                       <img class="picSize" src="${ match.imageURL }" alt="Random Dog 3">
//                   </div>
//                   </div>`
//        $("div.matchesContainer").append(message);
//        console.log(message);
//   })
//   });
//  }

// render: function() {
//   const matches = ['one', 'two', 'three'];
//   return (
//     <ul>
//       {elements.map((value, index) => {
//         return <li key={index}>{value}</li>
//       })}
//     </ul>
//   )
// }

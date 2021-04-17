import React from "react";
import Match from "./MemberPage";
import API from "../utils/API";
import { useState, useEffect } from "react";

const Matches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setMatches([
      //replace with API call to internal database
      {
        image:
          "http://i.pinimg.com/736x/7c/7b/ac/7c7bacd1ea378c796930797d9c164b5b.jpg",
      },
      {
        image:
          "http://i.pinimg.com/736x/7c/7b/ac/7c7bacd1ea378c796930797d9c164b5b.jpg",
      },
      {
        image:
          "http://i.pinimg.com/736x/7c/7b/ac/7c7bacd1ea378c796930797d9c164b5b.jpg",
      },
      {
        image:
          "http://i.pinimg.com/736x/7c/7b/ac/7c7bacd1ea378c796930797d9c164b5b.jpg",
      },
    ]);
  }, []);

  return (
    <div className="col-md-4 mb-3 side">
      <div className="header">
        <div className="title">User Name</div>
      </div>
      <div className="menu">
        <ul>
          {matches.map((match) => (
            <Match name="Tera" image={match.image} />
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

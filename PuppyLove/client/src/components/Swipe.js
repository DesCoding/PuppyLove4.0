import React from "react";
import API from "../utils/API";
import { useState, useEffect } from "react";
import Hammer from "hammerjs";

const Swipe = () => {
  let swipecontainer = document.querySelector("#swipe");
  useEffect(() => {
    if (swipecontainer) {
      let hammertime = new Hammer(swipecontainer);
      hammertime.on("swipeleft", function (ev) {
        // what was the answer?
        // send the answer and the url to db
        getNewDog();
        console.log("swipeleft");
      });
      hammertime.on("swiperight", function (ev) {
        console.log("swiped right!");
        getNewDog();
        postDogs();
      });
    }
  }, [swipecontainer]);

  const [dogs, setDogImage] = useState();
  const getNewDog = () => {
    API.getDogs()
      .then((res) => setDogImage(res.data.message))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getNewDog();
  }, []);

  const postDogs = () => {
    const newPuppy = {
      imageURL: dogs,
      userName: "Desiree",
      //replace "Desiree" pass variable of userName once it's working in user input
    };
    API.postDogs(newPuppy)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-md-8 mb-3 content">
      <div className="card">
        <img
          id="swipe"
          className="picSize img-fluid"
          src={dogs}
          alt="Random Dog"
        />
        <div className="card-body">
          <p className="card-text">
            Swipe right to save.
            <br />
            Swipe left to see a new pup.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Swipe;

// <script src="js/hammer.js"></script>
// <script>
//    function loadMatches (){
//     $.get("/api/loadMatches").then(data => {
//     console.log(data, "matches");
//     $("div.matchesContainer").children(".messages").remove();
//     data.forEach((match)=>{
//     let message = `<div class="messages">
//                     <div class="avatar">
//                         <img class="picSize" src="${ match.imageURL }" alt="Random Dog 3">
//                     </div>
//                     </div>`
//          $("div.matchesContainer").append(message);
//          console.log(message);
//     })
//     });
//    }

//    function getDog (){
//     $.get("https://dog.ceo/api/breeds/image/random").then(data => {
//     console.log(data.message);
//     const dogImage = (data.message)
//     $("#swipe").attr("src",dogImage)
//   });
//  }
//     var swipe = document.getElementById('swipe');
//     var hammertime = new Hammer(swipe);
// hammertime.on('swipeleft', function(ev) {
//     console.log("swipeleft")
// 	console.log(ev);
//     const answer = false;
//     const url = ev.target.getAttribute("src")
//     $.post("/api/createswipe", {answer, imageURL: url}, function(){
//         console.log("success")
//     })
//     getDog();
// });
// hammertime.on('swiperight', function(ev) {
// 	console.log(ev);
//     console.log(ev.target.getAttribute("src"))
//     const answer = true;
//     const url = ev.target.getAttribute("src")
//     $.post("/api/createswipe", {answer, imageURL: url}, function(){
//         console.log("success")
//         getDog();
//         loadMatches();
//     })
// });
//     $(document).ready(function(){
//         getDog();
//         loadMatches();
//     })
// </script>
// </html>

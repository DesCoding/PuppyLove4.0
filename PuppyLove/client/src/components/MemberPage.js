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

// <!DOCTYPE html>
// <html lang="en">

//     <head>
//         <meta charset="UTF-8"/>
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//         <link rel="preconnect" href="https://fonts.gstatic.com">
//         <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
//         <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
//         <link href="stylesheets/style.css" rel="stylesheet" />
//         <title>Puppy Love</title>
//     </head>

//     <body>
//         <nav class="navbar navbar-default">
//             <div class="container-fluid">
//               <div class="navbar-header">
//                   <a class="navbar-brand" href="/members">Puppy Love</a>
//               </div>
//               <ul class="nav navbar-nav navbar-right">
//                 <li><a href="/logout">Logout</a></li>
//               </ul>
//             </div>
//           </nav>
//           <div class="container-lg mt-4">
//             <div class="row">
//                 <div class="col-md-4 mb-3 side">
//                     <div class="header">
//                         <div class="title">{{ userName }}</div>
//                     </div>
//                     <div class="menu">
//                         <ul>
//                             <li class="active">Matches</li>
//                         </ul>
//                     </div>
//                     <div class="matchesContainer">

//                     </div>
//                 </div>
//                 <div class="col-md-8 mb-3 content">
//                     <div class="card">
//                         <img id="swipe" class="picSize img-fluid" src="" alt="Random Dog">
//                         <div class="card-body">
//                             <p class="card-text">
//                                 Swipe right to save.<br />
//                                 Swipe left to see a new pup.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//               </div>
//           </div>

//         <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//         <script type="text/javascript" src="js/members.js"></script>

//     </body>
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

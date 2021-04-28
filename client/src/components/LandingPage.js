import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { Card } from "react-bootstrap";

const LandingPage = () => {
  const [state, dispatch] = useStoreContext();

  // useEffect(() => {
  //   if (!localStorage.getItem("token") || !state.username) {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  return (
    <div className="container-lg mt-4 welcomcontainer">
      <div className="row">
        <Card>
          <Card.Body>
            {" "}
            Welcome PuppyLovers! Use this app to search for puppies you like.
            Please conider visiting these shelters to adopt.<br></br>
            <br></br>
            <p>Click here to find adoptable pups in the St. Louis Area.</p>
            <Link to="https://www.needypaws.org/">Needy Paws</Link>
            <br></br>
            <Link to="https://www.strayrescue.org/">Stray Rescue</Link>
            <br></br>
            <Link to="https://www.hsmo.org/">Humane Society</Link>
            <br></br>
            <Link to="https://odas.org/">Open Door Animal Sanctuary</Link>
            <br></br>
            <br></br>
            <p>Click here to find adoptable pups nationwide.</p>
            <Link to="https://www.akc.org/akc-rescue-network/">
              AKC Rescue Network
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="row">
        {!state.isLoggedin ? (
          <>
            <div className="col-md-6 col-md-offset-3">
              <Link to="/SignUp">If you're new here, please sign up here.</Link>
            </div>
            <div className="col-md-6 col-md-offset-3">
              <Link to="/LogIn">If you're a member, please log in here.</Link>
            </div>
          </>
        ) : (
          <div className="col-md-6 col-md-offset-3">
            <Link to="/Members">
              Already a logged in member, click here to visit your page
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;

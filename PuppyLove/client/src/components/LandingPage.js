import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";

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
        Welcome PuppyLovers! Use this app to search for puppies you like and
        visit these shelters to adopt.....
      </div>
      {/* commenting out redirect so that landing page can be used to welcome new and existing users */}

      {/* once toke issue is fixed, when a logged in user visits the landing page, they will see the welcome message and a link to visit thier member page (no sign up or log in) */}
      <div className="row">
        {!state.isLoggedin ? (
          <>
            <div className="col-md-6 col-md-offset-3">
              <p>If you're new here, please sign up.</p>
              <Link to="/SignUp">SignUp</Link>
            </div>
            <div className="col-md-6 col-md-offset-3">
              <p>If you're a member, please log in.</p>
              <Link to="/LogIn">LogIn</Link>
            </div>
          </>
        ) : (
          <div className="col-md-6 col-md-offset-3">
            <p>Click here to search for more puppy pics.</p>
            <Link to="/Members">Members</Link>
          </div>
        )}
      </div>
      <div className="col-md-6 col-md-offset-3">
        <p>Click here to find adoptable pups in the St. Louis Area.</p>
        <Link to="https://www.needypaws.org/"></Link>
        <Link to="https://www.strayrescue.org/"></Link>
        <Link to="https://www.hsmo.org/"></Link>
        <Link to="https://odas.org/"></Link>
        <p>Click here to find adoptable pups nationwide.</p>
        <Link to="https://www.akc.org/akc-rescue-network/"></Link>
      </div>
    </div>
  );
};

export default LandingPage;

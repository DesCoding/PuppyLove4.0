import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    if (!localStorage.getItem("token") || !state.username) {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      {!isLoggedIn && <Redirect to="login" />}
      <a href="/Matches">Matches</a>
      <br />
      <a href="/SignUp">SignUp</a>
      <br />
      <a href="/LogIn">LogIn</a>
      <br />
      {/* add details about app, link to login and sign up and references */}
    </div>
  );
};

export default LandingPage;

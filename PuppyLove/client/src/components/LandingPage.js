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
    <div className="container-lg mt-4 welcomcontainer">
      <div className="row">
        Welcome PuppyLovers! Use this app to search for puppies you like and
        visit these shelters to adopt.....
      </div>
      {/* commenting out redirect so that landing page can be used to welcome new and existing users */}
      {/* {!isLoggedIn && <Redirect to="login" />} */}

      {/* once toke issue is fixed, when a logged in user visits the landing page, they will see the welcome message and a link to visit thier member page (no sign up or log in) */}
      <div className="row">
        {!isLoggedIn ? (
          <>
            <div className="col-md-6 col-md-offset-3">
              <p>If you're new here, please sign up.</p>
              <a href="/SignUp">SignUp</a>
            </div>
            <div className="col-md-6 col-md-offset-3">
              <p>If you're a member, please log in.</p>
              <a href="/LogIn">LogIn</a>
            </div>
          </>
        ) : (
          <div className="col-md-6 col-md-offset-3">
            <p>Click here to search for more puppy pics.</p>
            <a href="/Members">Members</a>
          </div>
        )}
      </div>

      <div className="row">links for shelters and pet care tips....</div>
    </div>
  );
};

export default LandingPage;

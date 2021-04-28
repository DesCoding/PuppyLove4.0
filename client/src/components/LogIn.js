import React, { useRef, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { IS_LOGGED_IN, SET_USERNAME } from "../utils/actions";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";

const Login = () => {
  const [state, dispatch] = useStoreContext();
  const userNameRef = useRef("");
  const passwordRef = useRef("");

  // useEffect(() => {
  //   console.log(state.username);
  //   if (!localStorage.getItem("token") && !state.username) {
  //     setIsLoggedIn(false);
  //   } else {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(body);

    API.login(body)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        dispatch({ type: SET_USERNAME, payload: body.username });
        dispatch({ type: IS_LOGGED_IN, payload: true });
      })
      .catch((errr) => {
        console.log(errr);
      });
  };

  return (
    <div className="container-lg mt-4 signupcontainer">
      {state.isLoggedin && <Redirect to="/Members" />}
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form className="login" onSubmit={handleSubmit}>
            <h2 className="mb-4">Login Form</h2>
            <div className="form-group">
              <label for="email-input">User Name</label>
              <input
                type="text"
                className="form-control"
                id="email-input"
                placeholder="User Name"
                ref={userNameRef}
              />
            </div>
            <div className="form-group">
              <label for="password-input">Password</label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Login
            </button>
          </form>
          <br />
          <p>
            Or sign up <a href="/SignUp">here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

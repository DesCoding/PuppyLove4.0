import React, { useState, useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { Link, Redirect } from "react-router-dom";
import { IS_LOGGED_IN, SET_USERNAME } from "../utils/actions";
const NavBar = () => {
  const [state, dispatch] = useStoreContext();

  // useEffect(() => {
  //   if (!localStorage.getItem("token") || !state.username) {
  //     dispatch({
  //       type: IS_LOGGED_IN,
  //       payload: false,
  //     });
  //   } else {
  //     dispatch({
  //       type: IS_LOGGED_IN,
  //       payload: true,
  //     });
  //   }
  // }, []);

  useEffect(() => {
    API.authenticate({})
      .then((response) => {
        console.log("authenticating", response.data);
        dispatch({
          type: SET_USERNAME,
          payload: response.data,
        });
        dispatch({
          type: IS_LOGGED_IN,
          payload: true,
        });
      })
      .catch((err) => {
        console.log("wtf", err);
      });
  }, [state.isLoggedin]);

  const logout = (e) => {
    e.preventDefault();
    console.log("Dispassing false");
    localStorage.removeItem("token");
    dispatch({
      type: IS_LOGGED_IN,
      payload: false,
    });
  };

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <img className="logo" src={require("../assets/logo.png")} />
            </a>
          </div>

          {state.isLoggedin === true ? (
            <div>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <button className="btn btn-primary" onClick={logout}>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <Link to="/SignUp">SignUp</Link>
              <Link to="/LogIn">LogIn</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

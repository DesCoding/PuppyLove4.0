import React, { useState, useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { SET_USERNAME } from "../utils/actions";
const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    if (!localStorage.getItem("token") || !state.username) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [state]);

  useEffect(() => {
    API.authenticate({})
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: SET_USERNAME,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("wtf", err);
      });
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              Puppy Love
            </a>
          </div>

          {isLoggedIn === true ? (
            <div>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/Members">Members</a>
                </li>
                <li>
                  <a href="" onClick={logout}>
                    LOG ME OUT
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <a href="/SignUp">SignUp</a>
              <a href="/LogIn">LogIn</a>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

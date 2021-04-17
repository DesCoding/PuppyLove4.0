import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/members">
              Puppy Love
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

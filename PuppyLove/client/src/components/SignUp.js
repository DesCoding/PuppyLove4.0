import React, { useRef } from "react";
import API from "../utils/API";

const SignUp = () => {
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
    };
    API.signUp(body)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container-lg mt-4 signupcontainer">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form className="signup" onSubmit={handleSubmit}>
              <h2 className="mb-4">Sign Up Form</h2>
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
              <div
                style={{ display: "none" }}
                id="alert"
                className="alert alert-danger"
                role="alert"
              >
                <span
                  className="glyphicon glyphicon-exclamation-sign"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Error:</span>{" "}
                <span className="msg"></span>
              </div>
              <button type="submit" className="btn btn-secondary">
                Sign Up
              </button>
            </form>
            <br />
            <p>
              Or log in <a href="/login">here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

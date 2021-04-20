import React from "react";

const Login = () => {
  return (
    <div>
      hello this page is still under construction, to see our API feed, add
      /Swipe to the URL - should look like this: http://localhost:3000/Swipe div
      class="container-lg mt-4 logincontainer"
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form className="login">
            <h2 className="mb-4">Login Form</h2>
            <div className="form-group">
              <label for="email-input">User Name</label>
              <input
                type="text"
                className="form-control"
                id="email-input"
                placeholder="User Name"
              />
            </div>
            <div className="form-group">
              <label for="password-input">Password</label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
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

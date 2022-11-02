import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "../../Login.css";

async function doLogin({ email, password }) {
  // Gunakan endpoint-mu sendiri
  const response = await fetch("http://localhost:8000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  const user = data.data;
  console.log(data);
  document.getElementById("pass").innerHTML = data.message;
  return user.token;
}

async function doLoginWithGoogle(token) {
  // Sesuaikan endpoint
  const response = await fetch("http://localhost:8000/api/v1/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  });
  const data = await response.json();
  console.log(data);
  return data.accessToken;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, password })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }

  const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if (response.tokenId) {
      doLoginWithGoogle(response.tokenId)
        .then((token) => {
          localStorage.setItem("token", token);
          setIsLoggedIn(token);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));
    }
  };

  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  };

  return (
    <div>
      <div className="logo text-center">
        <h1>Logo</h1>
      </div>
      <div className="wrapper">
        <div className="inner-warpper text-center">
          <h2 className="title">Login to your account</h2>
          {!isLoggedIn ? (
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                {/* <label className="palceholder" for="userName">User Name</label> */}
                <input
                  className="form-control"
                  name="userName"
                  id="userName"
                  type="text"
                  placeholder="User Name"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <span className="lighting" id="email"></span>
              </div>
              <div className="input-group">
                {/* <label className="palceholder" for="userPassword">Password</label> */}
                <input
                  className="form-control"
                  name="userPassword"
                  id="userPassword"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span className="lighting" id="pass"></span>
              </div>

              <input type="submit" value={isLoading ? "Loading" : "Login"} />

              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login With Google"
                onSuccess={haldleSuccessGoogle}
                onFailure={haldleFailureGoogle}
                cookiePolicy={"single_host_origin"}
              />

              <div className="clearfix supporter">
                <div className="pull-left remember-me">
                  <input id="rememberMe" type="checkbox" />
                  <label for="rememberMe">Remember Me</label>
                </div>
                <a className="forgot pull-right" href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          ) : (
            <Navigate to="/" />
          )}
        </div>
        <div className="signup-wrapper text-center">
          <a href="#">
            Don't have an accout?{" "}
            <span className="text-primary">Create One</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

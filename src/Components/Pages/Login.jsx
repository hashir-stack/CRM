import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
// -----------handle change for the login form-------
  const handleLoginChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };
// --------login form submit---------
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(loginDetails);
    setLoginDetails({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Welcome back</span>
          </div>
          <p className="title_para">Please enter your details to sign in.</p>

          <form onSubmit={handleLoginSubmit}>
            <div className="row">
              {/* <i className="fas fa-user"></i> */}
              <input
                type="text"
                placeholder="Enter your email..."
                required
                value={loginDetails.email}
                onChange={handleLoginChange}
                name="email"
              />
            </div>
            <div className="row">
              {/* <i className="fas fa-lock"></i> */}
              <input
                type="password"
                placeholder="Password"
                required
                value={loginDetails.password}
                onChange={handleLoginChange}
                name="password"
              />
            </div>
            <div className="pass">
              <a href="#">Forgot password?</a>
            </div>
            <div className="row button">
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="#">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;

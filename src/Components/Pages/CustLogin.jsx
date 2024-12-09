import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CustLogin = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    role: "Customer",
  });

  const navigate =useNavigate();

  // -----------handle change for the login form-------
  const handleLoginChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  // --------login form submit---------
  const handleLoginSubmit = async (e,username,password) => {
    e.preventDefault();
    console.log(loginDetails);
    
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/token/", {
          username,
          password,
        });
     
        // Store tokens in localStorage or cookies
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        alert("sucessfully logged in...");
        navigate("/dashboard");
        return response.data;

      } catch (error) {
        console.error("Login failed:", error.response.data);
        throw error;
      }

      setLoginDetails({
        username: "",
        password: "",
      });
  
}
    

    return (
      <>
        <div className="container">
          <div className="wrapper">
            <div className="title">
              <span>Welcome back Customer</span>
            </div>
            <p className="title_para">Please enter your details to sign in.</p>

            <form onSubmit={handleLoginSubmit}>
              <div className="row">
                {/* <i className="fas fa-user"></i> */}
                <input
                  type="text"
                  placeholder="Enter your username..."
                  required
                  value={loginDetails.username}
                  onChange={handleLoginChange}
                  name="username"
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

export default CustLogin;

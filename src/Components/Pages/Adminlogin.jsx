import { useState } from "react";
import "./Login.css";
import axios from "axios";

const Adminlogin = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    role:"admin"
  });
// -----------handle change for the login form-------
  const handleLoginChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };
// --------login form submit---------
  const handleLoginSubmit = async(e) => {
    e.preventDefault();
    console.log(loginDetails);
   
    try {
      const admin_res = await axios.post(
        "http://127.0.0.1:8000/admin/login/",
        loginDetails
      );

      // Store tokens in localStorage or cookies
      // localStorage.setItem("access_token", response.data.access);
      // localStorage.setItem("refresh_token", response.data.refresh);

      localStorage.setItem(
        "access_token",
        JSON.stringify(admin_res.data.access)
      );
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(admin_res.data.refresh)
      );
      navigate("/dashboard");
      alert("sucessfully logged in...");
      return user_res.data;
    } catch (error) {
      console.error("Login failed:", error.admin_res.data);
      throw error;
    }
   
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Welcome back Admin</span>
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
          </form>
        </div>
      </div>
    </>
  );
};
export default Adminlogin;

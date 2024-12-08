import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          MyApp
        </a>
        <div className="ml-auto">
          <ul className="navbar-nav">
            
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
        {/*------- profile------ */}
        {/* <div className="profile">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png" alt="profile" onClick={()=>navigate("/profile")} />
        </div> */}
      </nav>  
    </div>
  );
};

export default Navbar;

import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  //----------handle Admin login-----------
  const handleAdminLogin =()=>{
    navigate("/adlogin")
  }

  //----------handle Employee login-----------
  const handleEmployeeLogin =()=>{
    navigate("/emplogin")
  }

  //----------handle Custome login-----------
  const handleCustomerLogin =()=>{
    navigate("/custlogin")
  }

  return (
    <>
      <div className="landing-container">
        <p className="landing-head">Who You Are ?</p>
        <div className="Role">
          <div className="admin-role">
            <img
              src="https://www.iconninja.com/files/864/851/698/admin-icon.png"
              alt="admin"
              onClick={handleAdminLogin}
            />
            <h2  onClick={handleAdminLogin}>Admin</h2>
          </div>

          <div className="employee-role">
            <img
              src="https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png"
              alt="employee"
              onClick={handleEmployeeLogin}
            />
            <h2  onClick={handleEmployeeLogin}>Employee</h2>
          </div>

          <div className="customer-role">
            <img
              src="https://clipart-library.com/image_gallery2/Customer-High-Quality-PNG.png"
              alt="customer"
              onClick={handleCustomerLogin}
            />
            <h2  onClick={handleCustomerLogin}>Customer</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

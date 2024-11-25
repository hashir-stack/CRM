import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Side Navigation Bar */}
      <div className="d-flex">
        <div
          className="bg-light border-right"
          style={{ width: "250px", height: "100vh" }}
        >
          <div className="sidebar-heading">Navigation</div>
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item list-group-item-action"
              onClick={toggleDropdown}
              style={{ cursor: "pointer" }}
            >
              CRM
              <span className="float-right">{isDropdownOpen ? "▲" : "▼"}</span>
            </li>
            {isDropdownOpen && (
              <div>
                <li className="list-group-item">Tickets</li>
                <NavLink to="/contacts">
                  <li className="list-group-item">Contacts</li>
                </NavLink>

                <li className="list-group-item">Reports</li>
              </div>
            )}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="p-4" style={{ flex: 1 }}>
          <h1>Welcome to the CRM Dashboard</h1>
          <p>
            Select options from the side navigation bar to explore features.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

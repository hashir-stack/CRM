import React from "react";
import "./Table.css"; // Make sure to import the custom CSS
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const data = [
    {
      name: "Hashir A.",
      email: "ha2020@gmail.com",
      phoneNumber: "--",
      jobTitle: "Executive",
      contactOwner: "SHARIQUE ANSARI",
      lastContacted: "--",
      supportPriority: "--",
    },
    {
      name: "Brian Halligan (Sample)",
      email: "bh@hubspot.com",
      phoneNumber: "--",
      jobTitle: "Executive Chairperson",
      contactOwner: "No owner",
      lastContacted: "--",
      supportPriority: "--",
    },
    {
      name: "Maria Johnson (Sample)",
      email: "emailmaria@hubspot.com",
      phoneNumber: "--",
      jobTitle: "Salesperson",
      contactOwner: "No owner",
      lastContacted: "--",
      supportPriority: "--",
    },
  ];

  const headers = Object.keys(data[0]);

  return (
    <div className="container mt-4">
      <h4>Contact Table</h4>
      <div className="cre-contact">
      <button onClick={()=>navigate("/contactform")} className=" btn btn-primary">Create Contact</button>
      </div>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                {header.replace(/([A-Z])/g, " $1").toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>
                  {/* Render "Contact Owner" as a dropdown */}
                  {header === "contactOwner" ? (
                    <select>
                      <option>{row[header]}</option>
                      <option>No owner</option>
                    </select>
                  ) : (
                    row[header]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

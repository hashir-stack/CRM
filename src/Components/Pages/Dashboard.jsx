import { useContext, useEffect } from "react";

import axiosInstance from "../../api/postData";
import { AuthContext } from "../../AuthProvider";
const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  useEffect(()=>{
    fetchAuthenticatedData();
  },[]);

  const fetchAuthenticatedData = async () => {
    try {
      const response = await axiosInstance.get("tickets/create/");
      console.log("Data:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error.response.data);
    }
  };

  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default Dashboard;

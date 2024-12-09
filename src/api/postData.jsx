import axios from "axios";
 
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    timeout: 5000,
  });
   
  // Attach Authorization header to each request
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
   
  // Handle token refresh on 401 errors
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
   
      // If the error is due to an expired token, try refreshing it
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem("refresh_token");
   
        if (refreshToken) {
          try {
            const response = await axios.post("http://127.0.0.1:8000/api/token/refresh/", {
              refresh: refreshToken,
            });
   
            localStorage.setItem("access_token", response.data.access);
   
            // Update the Authorization header and retry the request
            originalRequest.headers["Authorization"] = `Bearer ${response.data.access}`;
            return axiosInstance(originalRequest);
          } catch (refreshError) {
            console.error("Token refresh failed:", refreshError.response.data);
            throw refreshError;
          }
        }
      }
      return Promise.reject(error);
    }
  );
   
  export default axiosInstance;
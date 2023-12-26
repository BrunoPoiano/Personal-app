import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_END_POINT
});

// axiosInstance.interceptors.request.use(async (config) => {
//   const token = localStorage.getItem("token")
//   if (token && config.headers) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default axiosInstance;
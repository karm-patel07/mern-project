import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-project-2hiz.onrender.com/api",
});

// Add auth header
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

// api/axiosInstance.ts

import axios from "axios";

const baseURL = "https://marketX-backend.onrender.com";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

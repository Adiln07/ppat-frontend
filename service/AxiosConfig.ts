import axios from "axios";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

// export const API_BASE_URL = "http://localhost:5000";

const AxiosConfig = axios.create({
  baseURL: API_BASE_URL,

  // baseURL:
  //   typeof window !== "undefined"
  //     ? `http://${window.location.hostname}:5000`
  //     : "",
});

AxiosConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default AxiosConfig;

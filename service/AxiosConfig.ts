import axios from "axios";

const AxiosConfig = axios.create({
  baseURL:
    typeof window !== "undefined"
      ? `http://${window.location.hostname}:3000`
      : "",
});

export default AxiosConfig;

import axios from "axios";

const api = axios.create({
  baseURL: "https://money-tracker3.onrender.com/api",
});

export default api;

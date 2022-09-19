import axios from "axios";

const api = axios.create({
  baseURL: "http://172.17.0.1:3000",
  timeout: 1000,
});

export default api;

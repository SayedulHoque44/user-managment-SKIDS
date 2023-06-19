import axios from "axios";

// for fetching data
export const skidsAxios = axios.create({
  baseURL: "http://localhost:5000/",
});
// TODO: axios also next use for Authorizing By JWT Token

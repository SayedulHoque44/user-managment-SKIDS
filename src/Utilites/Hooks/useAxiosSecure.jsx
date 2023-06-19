import axios from "axios";

// for fetching data
export const skidsAxios = axios.create({
  baseURL: "https://user-managment-server-sayedulhoque44.vercel.app/",
});
// TODO: axios also next use for Authorizing By JWT Token

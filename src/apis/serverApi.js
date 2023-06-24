import axios from "axios";

const api = axios.create({
  baseURL: "https://dull-gray-meerkat-shoe.cyclic.app/",
});

export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default api;

export const domainName= "https://dull-gray-meerkat-shoe.cyclic.app//";

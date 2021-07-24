import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (firstname, lastname, email, phone, password) => {
  console.log(firstname, lastname, phone, email, password)
  return axios.post(API_URL + "register", {
    firstname,
    lastname,
    email,
    phone,
    password,
  });
};

const login = (userinfo, password) => {
  console.log(userinfo, password)
  return axios
    .post(API_URL + "login", {
      userinfo,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const resetpassword = (email) => {
  console.log(email)
  return axios.post(API_URL + "resetpassword", {
    email,
  });
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  resetpassword
};
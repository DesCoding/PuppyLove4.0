import axios from "axios";

const getToken = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  return token;
};

export default {
  login: function (data) {
    return axios.post("/api/user/login", data);
  },
  signUp: function (data) {
    return axios.post("/api/user/signup", data);
  },
  getMatches: function (username) {
    return axios.get("/api/puppy/" + username);
  },

  getDogs: function () {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  postDogs: function (data) {
    data.token = getToken();
    return axios.post("/api/puppy", data);
  },

  authenticate: function (data) {
    data.token = getToken();
    return axios.post("/api/user/auth", data);
  },
};
//route matches to utils API and routes matches controller which connects to models - project team steps.

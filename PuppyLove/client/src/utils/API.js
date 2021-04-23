import axios from "axios";

export default {
  logIn: function () {
    axios.post("http://localhost:8080/api/login");
  },
  signUp: function (data) {
    return axios.post("http://localhost:8080/api/signup", data);
  },

  getDogs: function (data) {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  postDogs: function (data) {
    return axios.post("http://localhost:8080/api/");
  },
};
//route matches to utils API and routes matches controller which connects to models - project team steps.

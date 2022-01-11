import axios from "axios";

axios.defaults.baseURL = "https://jobs-api-06.herokuapp.com/api/v1";

//SetAuthorization
axios.interceptors.request.use((request) => {
  const user = window.localStorage.getItem("user");

  if (user) {
    const { token } = JSON.parse(user);
    request.headers.authorization = `Bearer ${token}`;

    return request;
  }

  return request;
});

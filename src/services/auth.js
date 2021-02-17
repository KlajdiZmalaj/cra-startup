import axios from "axios";
import { endpoint, handleError } from "config";

export const instanceAxios = axios.create({
  baseURL: endpoint,
});

instanceAxios.interceptors.request.use(
  async (config) => {
    // console.log("req config", config);
    var Auth = true;
    if (config.url === "/users/login") {
      //api -> without token
      Auth = false;
    }
    const value = await localStorage.getItem("token");
    const token = JSON.parse(value);
    config.headers = {
      ...(Auth ? { Authorization: `Bearer ${token}` } : {}),
      Accept: "application/json",
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instanceAxios.interceptors.response.use(
  (response) => {
    // console.log("response", response);
    return response;
  },
  (error) => handleError(error)
);

export const getDataReq = (param1, param2) => {
  return instanceAxios
    .get("/test", {
      params: {
        param1,
        param2,
      },
    })
    .catch((error) => ({ error }));
};

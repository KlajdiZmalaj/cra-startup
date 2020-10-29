import axios from "axios";

export const getDataReq = (param1, param2) => {
  return axios
    .create({
      baseURL: "ul",
      headers: {},
    })
    .get(`/${param1}/${param2}`, {
      params: {},
    })
    .catch((error) => ({ error }));
};

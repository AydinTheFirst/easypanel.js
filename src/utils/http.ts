import axios from "axios";

export const createAxiosInstance = (baseURL: string, token: string) => {
  return axios.create({
    baseURL: baseURL + "/api/trpc",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },

    transformResponse: [
      (data) => {
        const parse = JSON.parse(data);
        if (parse.result) {
          return parse.result.data.json;
        }

        if (parse.error) {
          return parse.error.json;
        }

        return parse;
      },
    ],

    transformRequest: [
      (data) => {
        return JSON.stringify({ json: data });
      },
    ],

    params: {},

    paramsSerializer: (params: any) => {
      params = isEmptyObject(params) ? null : params;
      return "input=" + encodeURIComponent(JSON.stringify({ json: params }));
    },
  });
};

const isEmptyObject = (obj: any) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

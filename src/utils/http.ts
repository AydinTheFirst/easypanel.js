import axios from "axios";
import { EasypanelError } from "./EasypanelError";

export const createAxiosInstance = (baseURL: string, token: string) => {
  const instance = axios.create({
    baseURL: baseURL,
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
      const query = `input=${encodeURIComponent(
        JSON.stringify({ json: params })
      )}`;
      return query;
    },
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      if (error.response) {
        const err = error.response.data.error.json;
        throw new EasypanelError(err.message, err);
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

const isEmptyObject = (obj: any) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

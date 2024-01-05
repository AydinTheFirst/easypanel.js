import axios, { AxiosError } from "axios";

/**
 * REST module is developed in order to make easier to work with REST API's.
 * This module uses axios for making requests.
 * It is flexible
 */
export class REST {
  baseURL: string;
  token: string;
  methods: IRequestMethods;
  constructor(restConf: IRestConfig) {
    this.baseURL = restConf.baseURL;

    this.token = restConf.token;

    this.methods = {
      Get: "get",
      Delete: "delete",
      Put: "put",
      Post: "post",
    };
  }

  makeRequest = async (
    url: string,
    data: object | null,
    method: string
  ): Promise<any> => {
    try {
      const res = await axios({
        baseURL: this.baseURL,
        headers: {
          Authorization: this.token,
        },
        url,
        method,
        data,
      });

      return res.data.result.data.json;
    } catch (error: any) {
      if (!error.response) {
        throw new Error(
          JSON.stringify({
            status: -1,
            error: "Could not connect to: " + this.baseURL,
          })
        );
      }

      throw new Error(
        JSON.stringify({
          status: error.response.status,
          error: error.response.data.error.json,
        })
      );
    }
  };

  async get(path: string, body: object | null) {
    path = path + "?" + this._bodyToQueryParams(body);
    body = null;
    return this.makeRequest(path, body, this.methods.Get);
  }

  async delete(path: string, body: object) {
    return this.makeRequest(path, body, this.methods.Delete);
  }

  async post(path: string, body: object) {
    return this.makeRequest(path, body, this.methods.Post);
  }

  async put(path: string, body: object) {
    return this.makeRequest(path, body, this.methods.Put);
  }

  _bodyToQueryParams(body: any) {
    return "input=" + encodeURIComponent(JSON.stringify(body));
  }
}

export interface IRestConfig {
  baseURL: string;
  token: string;
}

export interface IRestError {
  ok: boolean;
  status: number;
  error?: any;
}

export interface IRequestMethods {
  Get: string;
  Delete: string;
  Put: string;
  Post: string;
}

import axios, { AxiosResponse } from "axios";

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
    path: string,
    data: object,
    method: string
  ): Promise<IRestResponse> => {
    try {
      const res = await axios({
        url: this.baseURL + path,
        method,
        data,
        headers: {
          Authorization: this.token,
        },
      });

      return {
        ok: res.status >= 200 && res.status < 300,
        status: res.status,
        statusText: res.statusText,
        data: this._responseResolver(res),
      };
    } catch (error: any) {
      return {
        ok: false,
        status: error.response?.status,
        error: this._errorResolver(error),
        statusText: String(error),
      };
    }
  };

  async get(path: string, body: object) {
    path = path + "?" + this._bodyToQueryParams(body);
    body = {};
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

  setToken(token: string) {
    this.token = token;
    return this;
  }

  setBaseURL(baseURL: string) {
    this.baseURL = baseURL;
    return this;
  }

  _responseResolver(res: AxiosResponse) {
    return res.data.result.data.json;
  }

  _errorResolver(error: any) {
    return error.response?.data.error.json;
  }

  _bodyToQueryParams(body: any) {
    return "input=" + encodeURIComponent(JSON.stringify(body));
  }
}

export interface IRestConfig {
  baseURL: string;
  token: string;
}

export interface IRestResponse {
  ok: boolean;
  status: number;
  statusText: string;
  data?: any;
  error?: any;
}

export interface IRequestMethods {
  Get: string;
  Delete: string;
  Put: string;
  Post: string;
}

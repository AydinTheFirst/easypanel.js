import axios from "axios";
import { EasypanelError } from "./Error.js";

/**
 * REST module is developed in order to make easier to work with REST API's.
 * This module uses axios for making requests.
 * It is flexible
 */
export class REST {
  baseURL: string;
  token: string;
  constructor(restConf: IRestConfig) {
    this.baseURL = restConf.baseURL;
    this.token = restConf.token;
  }

  makeRequest = async (
    url: string,
    data: any,
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
      if (!error.response) throw new Error(error);
      throw new EasypanelError(error.response.data.error.json);
    }
  };

  async get(path: string, body: object | null) {
    path = path + "?" + this._bodyToQueryParams(body);
    body = null;
    return this.makeRequest(path, body, "GET");
  }

  async post(path: string, body: object) {
    return this.makeRequest(path, body, "POST");
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

import { IRestResponse } from "../utils/REST.js";

export type * from "./monitor.types.js";
export type * from "./projects.types.js";
export type * from "./services.types.js";
export type * from "./settings.types.js";

export interface ClientConfig {
  endpoint: string;
  credentials?: {
    email: string;
    password: string;
  };
  token?: string;
}

export interface NoResponse extends IRestResponse {
  data?: null;
}

export interface StringResponse extends IRestResponse {
  data?: string;
}

export interface BooleanResponse extends IRestResponse {
  data?: string;
}

export interface LoginRes extends IRestResponse {
  data?: {
    token: string;
  };
}

export interface UserRes extends IRestResponse {
  data?: {
    id: string;
    createdAt: string;
    email: string;
    admin: boolean;
    password: null;
  };
}

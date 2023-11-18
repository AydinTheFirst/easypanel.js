import { RestResponse } from "ft-rest/dist/types/index.js";

export type * from "./monitor.types.js";
export type * from "./projects.types.js";
export type * from "./services.types.js";
export type * from "./settings.types.js";

export interface ClientConfig {
  endpoint: string;
  credentials: {
    email: string;
    password: string;
  };
  token?: string;
}

export interface NoResponse extends RestResponse {
  data?: null;
}

export interface StringResponse extends RestResponse {
  data?: string;
}

export interface BooleanResponse extends RestResponse {
  data?: string;
}

export interface LoginRes extends RestResponse {
  data?: {
    token: string;
  };
}

export interface UserRes extends RestResponse {
  data?: {
    id: string;
    createdAt: string;
    email: string;
    admin: boolean;
    password: null;
  };
}

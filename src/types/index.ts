export type * from "./backups";
export type * from "./cluster";
export type * from "./monitor";
export type * from "./projects";
export type * from "./services";
export type * from "./settings";

export interface ClientConfig {
  endpoint: string;
  token: string;
}

export interface IUser {
  id: string;
  createdAt: string;
  email: string;
  admin: boolean;
  password: null;
}

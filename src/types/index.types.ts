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

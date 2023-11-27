export interface ClientConfig {
  endpoint: string;
  token: string;
  refreshRate?: number;
  /**
   * @deprecated Use `token` instead
   */
  credentials?: {
    email: string;
    password: string;
  };
}

export interface IUser {
  id: string;
  createdAt: string;
  email: string;
  admin: boolean;
  password: null;
}

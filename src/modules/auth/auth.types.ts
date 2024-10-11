export interface GetUserResponse {
  id: string;
  createdAt: string;
  email: string;
  admin: boolean;
  password: string;
  apiToken: string;
}

export interface GetSessionResponse {
  id: string;
  createdAt: string;
  userId: string;
  expiresAt: string;
  demoMode: boolean;
}

export interface LoginResponse {
  token: string;
}

export interface LogoutResponse {}

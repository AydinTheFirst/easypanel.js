import { Client } from "@/Client";

import {
  GetSessionResponse,
  GetUserResponse,
  LoginResponse,
  LogoutResponse,
} from "./auth.types";
import { LoginInput } from "./auth.dto";

export class AuthManager {
  constructor(private client: Client) {}

  async getUser() {
    const { data } = await this.client.http.get<GetUserResponse>(
      "/auth.getUser"
    );

    return data;
  }

  async getSession() {
    const { data } = await this.client.http.get<GetSessionResponse>(
      "/auth.getSession"
    );

    return data;
  }

  async login(body: LoginInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<LoginResponse>(
      "/auth.login",
      body
    );

    return data;
  }

  async logout() {
    const { data } = await this.client.http.get<LogoutResponse>("/auth.logout");

    return data;
  }
}

import { SettingsManager } from "./managers/SettingsManager.js";
import REST from "./utils/REST.js";
import { Routes } from "./utils/Routes.js";
import EventEmitter from "node:events";

export class Client extends EventEmitter {
  config: ClientConfig;
  rest: REST;
  settings: SettingsManager;
  constructor(config: ClientConfig) {
    super();
    this.config = config;

    this.rest = new REST({
      baseURL: this.config.url,
      token: this.config.token || "token",
    });

    this.settings = new SettingsManager(this);
  }

  async login() {
    if ((await this.getUser()).ok) {
      console.log("Provided API token works.");
      this.emit("ready");
      return this;
    }
    const res = await this.rest.post(Routes.Auth.Login, {
      json: this.config.credentials,
    });

    if (!res.ok) {
      throw new Error("Authentication Failed! " + JSON.stringify(res.error));
    }

    this.rest.setToken(res.data.token);

    this.emit("ready");
    return res;
  }

  async logout() {
    const res = await this.rest.post(Routes.Auth.Logout, {});
    return res;
  }

  async getUser() {
    const res = await this.rest.get(Routes.Auth.GetUser, {});
    if (!res.data) res.ok = false;
    return res;
  }
}

export interface ClientConfig {
  url: string;
  credentials: {
    email: string;
    password: string;
  };
  token?: string;
}

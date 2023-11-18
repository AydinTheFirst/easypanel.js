import { MonitorManager } from "./managers/MonitorManager.js";
import { ProjectsManager } from "./managers/ProjectsManager.js";
import { ServicesManager } from "./managers/ServicesManager.js";
import { SettingsManager } from "./managers/SettingsManager.js";

import REST from "./utils/REST.js";
import { Routes } from "./utils/Routes.js";

import EventEmitter from "node:events";

import {
  ClientConfig,
  LoginRes,
  NoResponse,
  UserRes,
} from "./types/index.types.js";

export class Client extends EventEmitter {
  config: ClientConfig;
  rest: REST;
  settings: SettingsManager;
  monitor: MonitorManager;
  projects: ProjectsManager;
  services: ServicesManager;
  constructor(config: ClientConfig) {
    super();
    this.config = config;

    this.rest = new REST({
      baseURL: this.config.endpoint,
      token: this.config.token || "token",
    });

    this.settings = new SettingsManager(this);
    this.monitor = new MonitorManager(this);
    this.projects = new ProjectsManager(this);
    this.services = new ServicesManager(this);
  }

  async login(): Promise<Client> {
    if ((await this.getUser()).ok) {
      console.log("Provided API token works.");
      this.emit("ready");
      return this;
    }
    const res = await this.rest.post(Routes.Auth.Login, {
      json: this.config.credentials,
    });

    if (!res.ok) {
      throw new Error("Authentication Failed! " + JSON.stringify(res));
    }

    this.rest.setToken(res.data.token);
    this.emit("ready");
    return this;
  }

  async logout(): Promise<NoResponse> {
    const res = await this.rest.post(Routes.Auth.Logout, {});
    return res;
  }

  async getUser(): Promise<UserRes> {
    const res = await this.rest.get(Routes.Auth.GetUser, { json: null });
    if (!res.data) res.ok = false;
    return res;
  }

  async getLicensePayload(type: "lemon" | "portal"): Promise<NoResponse> {
    const res = await this.rest.get(Routes.License(type).Get, { json: null });
    return res;
  }

  async activateLicense(type: "lemon" | "portal"): Promise<NoResponse> {
    const res = await this.rest.post(Routes.License(type).Activate, {
      json: null,
    });
    return res;
  }
}

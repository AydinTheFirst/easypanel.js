import { MonitorManager } from "./managers/MonitorManager.js";
import { ProjectsManager } from "./managers/ProjectsManager.js";
import { ServicesManager } from "./managers/ServicesManager.js";
import { SettingsManager } from "./managers/SettingsManager.js";

import REST from "./utils/REST.js";
import { Routes } from "./utils/Routes.js";

import EventEmitter from "node:events";

import { ClientConfig } from "./types/index.types.js";

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
      throw new Error("Authentication Failed! " + JSON.stringify(res));
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
    const res = await this.rest.get(Routes.Auth.GetUser, { json: null });
    if (!res.data) res.ok = false;
    return res;
  }

  async getLicensePayload(type: "lemon" | "portal") {
    const res = await this.rest.get(Routes.License(type).Get, { json: null });
    return res;
  }

  async activateLicense(type: "lemon" | "portal") {
    const res = await this.rest.post(Routes.License(type).Activate, {
      json: null,
    });
    return res;
  }
}

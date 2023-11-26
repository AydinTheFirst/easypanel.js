import { MonitorManager } from "./managers/Monitor.js";
import { ProjectsManager } from "./managers/Projects.js";
import { ServicesManager } from "./managers/Services.js";
import { SettingsManager } from "./managers/Settings.js";

import { REST } from "./utils/REST.js";
import { Routes } from "./utils/Routes.js";

import EventEmitter from "node:events";

import { ClientConfig, NoResponse, UserRes } from "./types/index.types.js";

/**
 * Client class for interacting with the API.
 * Manages configuration, REST requests, and various managers.
 */
export class Client extends EventEmitter {
  config: ClientConfig; // Client Config
  rest: REST;
  settings: SettingsManager;
  monitor: MonitorManager;
  projects: ProjectsManager;
  services: ServicesManager;
  routes: typeof Routes;
  constructor(config: ClientConfig) {
    super();

    this.config = config;

    this.rest = new REST({
      baseURL: this.config.endpoint,
      token: this.config.token || "token",
    });

    this.routes = Routes;

    this.settings = new SettingsManager(this);

    this.monitor = new MonitorManager(this);

    this.projects = new ProjectsManager(this);

    this.services = new ServicesManager(this);
  }

  /**
   * Middleware before making requests to API!
   * If you provide a token on clientConfig this functions just checks it
   * If you did not,  it will make regular request
   * 2FA is not supported yet for credentials authenticating use API token instead
   */
  async login(): Promise<Client> {
    // Token provided see if it works
    if (this.config.token) {
      const userRes = await this.getUser();
      if (!userRes.ok) {
        throw new Error("Authentication Failed! " + JSON.stringify(userRes));
      }
      console.log("Provided token works");
      this.emit("ready");
      return this;
    }

    // Skipped token
    const res = await this.rest.post(this.routes.Auth.Login, {
      json: this.config.credentials,
    });

    if (!res.ok) {
      throw new Error("Authentication Failed! " + JSON.stringify(res));
    }

    this.rest.setToken(res.data.token);
    this.emit("ready");
    return this;
  }

  /**
   * It logouts regular autentication not API token
   */
  async logout(): Promise<NoResponse> {
    const res = await this.rest.post(this.routes.Auth.Logout, {});
    return res;
  }

  /**
   * Returns user object
   */
  async getUser(): Promise<UserRes> {
    const res = await this.rest.get(this.routes.Auth.GetUser, { json: null });
    return res;
  }

  /**
   * Returns long license payload
   */
  async getLicensePayload(type: "lemon" | "portal"): Promise<any> {
    const res = await this.rest.get(this.routes.License(type).Get, {
      json: null,
    });
    return res;
  }

  /**
   * Activates your license
   */
  async activateLicense(type: "lemon" | "portal"): Promise<any> {
    const res = await this.rest.post(this.routes.License(type).Activate, {
      json: null,
    });
    return res;
  }
}

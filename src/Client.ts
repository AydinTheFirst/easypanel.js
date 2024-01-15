import { MonitorManager } from "./managers/Monitor.js";
import { ProjectsManager } from "./managers/Projects.js";
import { ServicesManager } from "./managers/Services.js";
import { SettingsManager } from "./managers/Settings.js";

import { REST } from "./utils/REST.js";
import { Routes } from "./utils/Routes.js";

import EventEmitter from "node:events";

import { ClientConfig, IUser } from "./types/index.t.js";
import { BackupsManager } from "./managers/Backups.js";

/**
 * Client class for interacting with the API.
 * Manages configuration, REST requests, and various managers.
 */
export class Client extends EventEmitter {
  config: ClientConfig; // Client Config
  rest: REST;
  routes: typeof Routes;

  // Managers
  settings: SettingsManager;
  monitor: MonitorManager;
  projects: ProjectsManager;
  services: ServicesManager;
  backups: BackupsManager;
  constructor(config: ClientConfig) {
    super();

    this.config = config;

    if (!this.config.endpoint) throw Error("No endpoint was provided");
    if (!this.config.token) throw Error("No token was provided");

    this.rest = new REST({
      baseURL: this.config.endpoint,
      token: this.config.token,
    });

    this.routes = Routes;

    // Managers
    this.settings = new SettingsManager(this);
    this.monitor = new MonitorManager(this);
    this.projects = new ProjectsManager(this);
    this.services = new ServicesManager(this);
    this.backups = new BackupsManager(this);
  }

  /**
   * Middleware before making requests to API!
   * If you provide a token on clientConfig this functions just checks it
   * If you did not,  it will make regular authentication request
   * 2FA is not supported yet instead of credentials authenticating use API token.
   */
  async login(): Promise<Client> {
    try {
      await this.getUser();
    } catch (error: any) {
      throw new Error(error);
    }

    this.emit("ready");
    return this;
  }

  /**
   * Returns user object
   */
  async getUser(): Promise<IUser> {
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

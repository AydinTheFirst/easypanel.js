import { MonitorManager } from "./managers/Monitor.js";
import { ProjectsManager } from "./managers/Projects.js";
import { ServicesManager } from "./managers/Services.js";
import { SettingsManager } from "./managers/Settings.js";

import { REST } from "./utils/REST.js";
import { Routes } from "./utils/Routes.js";

import EventEmitter from "node:events";

import { ClientConfig, IUser } from "./types/index.types.js";
import { Project } from "./classes/Project.js";
import { Service } from "./classes/Service.js";

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
  refreshRate: number;
  interval: any;
  constructor(config: ClientConfig) {
    super();

    this.config = config;

    this.rest = new REST({
      baseURL: this.config.endpoint,
      token: this.config.token,
    });

    this.routes = Routes;

    this.settings = new SettingsManager(this);

    this.monitor = new MonitorManager(this);

    this.projects = new ProjectsManager(this);

    this.services = new ServicesManager(this);

    // 1 min
    this.refreshRate = config.refreshRate || 60 * 1000;
    this.interval = null;
  }

  /**
   * Middleware before making requests to API!
   * If you provide a token on clientConfig this functions just checks it
   * If you did not,  it will make regular authentication request
   * 2FA is not supported yet instead of credentials authenticating use API token.
   */
  async login(): Promise<Client> {
    const userRes = await this.getUser();
    if (!userRes) throw Error("Invalid token was provided");

    // Set loop to refresh cache
    this.interval = setInterval(() => this._init(), this.refreshRate);
    await this._init();

    this.emit("ready");
    return this;
  }

  /**
   * It logouts regular autentication not API token
   */
  async logout(): Promise<null> {
    const res = await this.rest.post(this.routes.Auth.Logout, {});
    return res;
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

  async _init() {
    let startedAt = Date.now();

    const list = await this.projects.listWithServices();

    if (list) {
      for (const p of list.projects) {
        const project = new Project(this, p.name, p);
        this.projects.cache.set(project.id, project);
      }

      for (const s of list.services) {
        const service = new Service(this, s.name, s);
        const project = this.projects.cache.get(service.projectName);
        if (project) project.services.set(service.id, service);
        this.services.cache.set(service.id, service);
      }
    }

    let endedAt = Date.now();

    this.emit("refresh", endedAt - startedAt);
  }
}

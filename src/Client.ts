import { AxiosInstance } from "axios";
import EventEmitter from "node:events";

import { MonitorManager } from "@/managers/Monitor";
import { BackupsManager } from "@/managers/Backups";
import { ProjectsManager } from "@/managers/Projects";
import { ServicesManager } from "@/managers/Services";
import { SettingsManager } from "@/managers/Settings";
import { UsersManager } from "@/managers/Users";
import { ClusterManager } from "@/managers/Cluster";

import { ClientConfig, IUser } from "@/types";

import { Routes } from "@/utils/Routes";
import { createAxiosInstance } from "@/utils/http";

/**
 * Client class for interacting with the API.
 * Manages configuration, REST requests, and various managers.
 */
export class Client extends EventEmitter {
  config: ClientConfig; // Client Config
  rest: AxiosInstance;
  routes: typeof Routes;

  // Managers
  settings: SettingsManager;
  monitor: MonitorManager;
  projects: ProjectsManager;
  services: ServicesManager;
  backups: BackupsManager;
  users: UsersManager;
  cluster: ClusterManager;
  constructor(config: ClientConfig) {
    super();

    this.config = config;

    if (!this.config.endpoint) throw Error("No endpoint was provided");
    if (!this.config.token) throw Error("No token was provided");

    this.rest = createAxiosInstance(this.config.endpoint, this.config.token);
    this.routes = Routes;

    // Managers
    this.settings = new SettingsManager(this);
    this.monitor = new MonitorManager(this);
    this.projects = new ProjectsManager(this);
    this.services = new ServicesManager(this);
    this.backups = new BackupsManager(this);
    this.users = new UsersManager(this);
    this.cluster = new ClusterManager(this);
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
    const res = await this.rest.get(this.routes.Auth.GetUser);
    return res.data;
  }

  /**
   * Returns long license payload
   */
  async getLicensePayload(type: "lemon" | "portal"): Promise<any> {
    const res = await this.rest.get(this.routes.License(type).Get);
    return res;
  }

  /**
   * Activates your license
   */
  async activateLicense(type: "lemon" | "portal"): Promise<any> {
    const res = await this.rest.post(this.routes.License(type).Activate);
    return res;
  }
}

import { AxiosInstance } from "axios";

import { ClientConfig } from "@/types";

import { createAxiosInstance } from "@/http";
import {
  ActionsManager,
  AuthManager,
  BackupsManager,
  BrandingManager,
  DeploymentsManager,
  GithubManager,
  GitManager,
} from "./modules";

/**
 * Client class for interacting with the API.
 * Manages configuration, REST requests, and various managers.
 */
export class Client {
  config: ClientConfig; // Client Config
  http: AxiosInstance;
  constructor(config: ClientConfig) {
    this.config = config;

    if (!this.config.endpoint) throw Error("No endpoint was provided");
    if (!this.config.token) throw Error("No token was provided");

    this.http = createAxiosInstance(this.config.endpoint, this.config.token);

    if (this.config.validate) this.validate();
  }

  async validate() {
    const user = await this.auth.getUser();
    if (!user) throw Error("Invalid token was provided");
  }

  auth = new AuthManager(this);
  actions = new ActionsManager(this);
  backups = new BackupsManager(this);
  branding = new BrandingManager(this);
  deployments = new DeploymentsManager(this);
  git = new GitManager(this);
  github = new GithubManager(this);
}

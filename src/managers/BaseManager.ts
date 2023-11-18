import { Client } from "../Client.js";

/**
 * Base manager for all managers.
 */
export class BaseManager {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
}

export * from "./MonitorManager.js";
export * from "./ProjectsManager.js";
export * from "./ServicesManager.js";
export * from "./SettingsManager.js";

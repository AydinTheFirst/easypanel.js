import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";

import { Routes } from "../utils/Routes.js";
import {
  IAdvancedStats,
  IContainerStats,
  IDockerTaskStats,
  ISystemStats,
} from "../types/monitor.t.js";

/**
 * Monitor Manager
 * Manages the retrieval of various statistics and monitoring data.
 */
export class MonitorManager extends BaseManager {
  routes: typeof this.client.routes.Monitor;

  constructor(client: Client) {
    super(client);

    this.routes = this.client.routes.Monitor;
  }

  async getAdvancedStats(): Promise<IAdvancedStats> {
    const res = await this.client.rest.get(this.routes.GetAdvancedStats, {
      json: null,
    });
    return res;
  }

  async getDockerTaskStats(): Promise<IDockerTaskStats> {
    const res = await this.client.rest.get(this.routes.GetDockerTaskStats, {
      json: null,
    });
    return res;
  }

  async getMonitorTableData(): Promise<IContainerStats[]> {
    const res = await this.client.rest.get(this.routes.GetMonitorTableData, {
      json: null,
    });
    return res;
  }

  async getSystemStats(): Promise<ISystemStats> {
    const res = await this.client.rest.get(this.routes.GetSystemStats, {
      json: null,
    });
    return res;
  }
}

import { Client } from "../Client.js";
import { Routes } from "../utils/Routes.js";
import { BaseManager } from "./BaseManager.js";

import {
  AdvancedStats,
  DockerTaskStats,
  ContainerStats,
  SystemStats,
} from "../types/monitor.types.js";

export class MonitorManager extends BaseManager {
  constructor(client: Client) {
    super(client);
  }

  async getAdvancedStats(): Promise<AdvancedStats> {
    const res = await this.client.rest.get(Routes.Monitor.GetAdvancedStats, {
      json: null,
    });
    return res;
  }

  async getDockerTaskStats(): Promise<DockerTaskStats> {
    const res = await this.client.rest.get(Routes.Monitor.GetDockerTaskStats, {
      json: null,
    });
    return res;
  }

  async getMonitorTableData(): Promise<ContainerStats> {
    const res = await this.client.rest.get(Routes.Monitor.GetMonitorTableData, {
      json: null,
    });
    return res;
  }

  async getSystemStats(): Promise<SystemStats> {
    const res = await this.client.rest.get(Routes.Monitor.GetSystemStats, {
      json: null,
    });
    return res;
  }
}

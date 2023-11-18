import { Client } from "../Client.js";
import { Routes } from "../utils/Routes.js";
import { BaseManager } from "./BaseManager.js";

export class MonitorManager extends BaseManager {
  constructor(client: Client) {
    super(client);
  }

  async getAdvancedStats() {
    const res = await this.client.rest.get(Routes.Monitor.GetAdvancedStats, {});
    return res;
  }

  async getDockerTaskStats() {
    const res = await this.client.rest.get(
      Routes.Monitor.GetDockerTaskStats,
      {}
    );
    return res;
  }

  async getMonitorTableData() {
    const res = await this.client.rest.get(
      Routes.Monitor.GetMonitorTableData,
      {}
    );
    return res;
  }

  async getSystemStats() {
    const res = await this.client.rest.get(Routes.Monitor.GetSystemStats, {});
    return res;
  }
}

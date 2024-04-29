import { Client } from "@/Client";
import { BaseManager } from "./BaseManager";
import {
  IAdvancedStats,
  IContainerStats,
  IDockerTaskStats,
  ISystemStats,
} from "@/types/monitor";

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
    const res = await this.client.rest.get(this.routes.GetAdvancedStats);
    return res.data;
  }

  async getDockerTaskStats(): Promise<IDockerTaskStats> {
    const res = await this.client.rest.get(this.routes.GetDockerTaskStats);
    return res.data;
  }

  async getMonitorTableData(): Promise<IContainerStats[]> {
    const res = await this.client.rest.get(this.routes.GetMonitorTableData);
    return res.data;
  }

  async getSystemStats(): Promise<ISystemStats> {
    const res = await this.client.rest.get(this.routes.GetSystemStats);
    return res.data;
  }
}

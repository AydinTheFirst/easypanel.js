import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";

import {
  AdvancedStats,
  DockerTaskStats,
  ContainerStats,
  SystemStats,
} from "../types/monitor.types.js";

import { Routes } from "../utils/Routes.js";

/**
 * Monitor Manager
 * Manages the retrieval of various statistics and monitoring data.
 */
export class MonitorManager extends BaseManager {
  // The routes for accessing monitoring-related endpoints
  routes: typeof Routes.Monitor;

  /**
   * Constructor for MonitorManager
   * @param {Client} client - The client instance used for making API requests.
   */
  constructor(client: Client) {
    // Call the constructor of the BaseManager class with the provided client
    super(client);

    // Set the routes for monitoring-related endpoints
    this.routes = Routes.Monitor;
  }

  /**
   * Retrieves advanced statistics.
   * @returns {Promise<AdvancedStats>} - A Promise that resolves to advanced statistics data.
   */
  async getAdvancedStats(): Promise<AdvancedStats> {
    const res = await this.client.rest.get(this.routes.GetAdvancedStats, {
      json: null,
    });
    return res;
  }

  /**
   * Retrieves Docker task statistics.
   * @returns {Promise<DockerTaskStats>} - A Promise that resolves to Docker task statistics data.
   */
  async getDockerTaskStats(): Promise<DockerTaskStats> {
    const res = await this.client.rest.get(this.routes.GetDockerTaskStats, {
      json: null,
    });
    return res;
  }

  /**
   * Retrieves monitoring table data.
   * @returns {Promise<ContainerStats>} - A Promise that resolves to monitoring table data.
   */
  async getMonitorTableData(): Promise<ContainerStats> {
    const res = await this.client.rest.get(this.routes.GetMonitorTableData, {
      json: null,
    });
    return res;
  }

  /**
   * Retrieves system statistics.
   * @returns {Promise<SystemStats>} - A Promise that resolves to system statistics data.
   */
  async getSystemStats(): Promise<SystemStats> {
    const res = await this.client.rest.get(this.routes.GetSystemStats, {
      json: null,
    });
    return res;
  }
}

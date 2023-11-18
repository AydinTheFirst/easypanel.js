import { Routes } from "../utils/Routes.js";
import { BaseManager } from "./BaseManager.js";

/**
 * Manager for monitoring-related operations.
 */
export class MonitorManager extends BaseManager {
  constructor(client) {
    super(client);
  }

  /**
   *
   * @returns {Promise<AdvancedStatsResponse>}
   */
  async getAdvancedStats() {
    const res = await this.client.rest.get(Routes.Monitor.GetAdvancedStats);
    return res;
  }

  async getDockerTaskStats() {
    const res = await this.client.rest.get(Routes.Monitor.GetDockerTaskStats);
    return res;
  }

  async getMonitorTableData() {
    const res = await this.client.rest.get(Routes.Monitor.GetMonitorTableData);
    return res;
  }

  async getSystemStats() {
    const res = await this.client.rest.get(Routes.Monitor.GetSystemStats);
    return res;
  }
}

/**
 * @typedef {import("ft-rest/src/REST.js").RESTResponse} BaseRes
 */

/**
 * @typedef {Object} AdvancedStatsResponse
 * @extends {BaseRes}
 *
 * @property {boolean} data
 */

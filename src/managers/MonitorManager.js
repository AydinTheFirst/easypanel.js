import { Client } from "../Client.js";

/**
 * Monitor Manager
 */
export class MonitorManager {
  /**
   * @param {Client} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns docker task info
   * @returns {Promise<Object>}
   */
  getDockerTaskStats = async () => {
    const query = this.client.query();
    const res = await this.client.makeRequest(
      "/api/trpc/monitor.getDockerTaskStats" + `?input=${query}`
    );
    return res;
  };

  /**
   * Returns basic system info
   * @returns {SystemInfo}
   */
  getSystemStats = async () => {
    const query = this.client.query();
    const res = await this.client.makeRequest(
      "/api/trpc/monitor.getSystemStats" + `?input=${query}`
    );
    return res;
  };

  /**
   * Returns advanced stats
   * @returns {Object}
   */
  getAdvancedStats = async () => {
    const query = this.client.query();
    const res = await this.client.makeRequest(
      "/api/trpc/monitor.getAdvancedStats" + `?input=${query}`
    );
    return res;
  };
}

/**
 * @typedef {Object} SystemInfo
 * @property {number} uptime - System uptime in seconds.
 * @property {MemoryInfo} memInfo - Memory information.
 * @property {DiskInfo} diskInfo - Disk information.
 * @property {CpuInfo} cpuInfo - CPU information.
 * @property {NetworkInfo} network - Network information.
 */

/**
 * @typedef {Object} MemoryInfo
 * @property {number} totalMemMb - Total memory in megabytes.
 * @property {number} usedMemMb - Used memory in megabytes.
 * @property {number} freeMemMb - Free memory in megabytes.
 * @property {number} usedMemPercentage - Used memory percentage.
 * @property {number} freeMemPercentage - Free memory percentage.
 */

/**
 * @typedef {Object} DiskInfo
 * @property {string} totalGb - Total disk space in gigabytes.
 * @property {string} usedGb - Used disk space in gigabytes.
 * @property {string} freeGb - Free disk space in gigabytes.
 * @property {string} usedPercentage - Used disk space percentage.
 * @property {string} freePercentage - Free disk space percentage.
 */

/**
 * @typedef {Object} CpuInfo
 * @property {number} usedPercentage - CPU usage percentage.
 * @property {number} count - Number of CPUs.
 * @property {number[]} loadavg - CPU load average.
 */

/**
 * @typedef {Object} NetworkInfo
 * @property {number} inputMb - Network input in megabytes.
 * @property {number} outputMb - Network output in megabytes.
 */

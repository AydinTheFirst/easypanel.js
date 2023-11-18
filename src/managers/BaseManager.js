/**
 * Base manager for all managers.
 */
export class BaseManager {
  /**
   * Creates a new MonitorManager instance.
   * @param {import("../Client.js").Client} client - The client instance for making REST API requests.
   */
  constructor(client) {
    this.client = client;
  }
}

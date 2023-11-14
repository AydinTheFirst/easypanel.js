import EventEmitter from "node:events";
import { APIError, makeRequest } from "./Utils.js";

import { ProjectsManager } from "./managers/ProjectsManager.js";
import { MonitorManager } from "./managers/MonitorManager.js";
import { ServicesManager } from "./managers/ServicesManager.js";

/**
 * The client Object
 */
export class Client extends EventEmitter {
  /**
   * Creates an instance of the Client class.
   * @param {ClientConfig} config - The configuration object for initializing the client.
   */
  constructor(config) {
    super();
    this.endpoint = config.endpoint;
    this.credentials = config.credentials;
    this.token = config.token || null;

    this.rest = {
      monitor: new MonitorManager(this),
      projects: new ProjectsManager(this),
      services: new ServicesManager(this),
    };

    // Request Manager for REST API
    this.makeRequest = (...args) => makeRequest(this, ...args);
  }

  /**
   * returns query params for api requests
   * @param {object} obj
   * @returns {string}
   * @private
   */
  query = (obj = null) => {
    return encodeURIComponent(JSON.stringify({ json: obj }));
  };

  /**
   * Uses email and username to get api token
   * @returns {Promise<null>}
   */
  login = async () => {
    if (this.token) {
      const user = await this.getUser();
      if (user) {
        console.log(
          "Valid API token was provided, Authentication was skipped!"
        );
        this.emit("ready");
        return;
      }
    }

    const res = await this.makeRequest("/api/trpc/auth.login", "post", {
      json: this.credentials,
    });

    if (!res) return;

    this.token = res.token;

    this.emit("ready");
  };

  /**
   * Returns authenticated user
   * @returns
   */
  getUser = async () => {
    const query = encodeURIComponent(JSON.stringify({ json: null }));

    const res = await this.makeRequest(
      "/api/trpc/auth.getUser" + `?input=${query}`
    );

    return res;
  };

  /**
   * Returns server IP
   * @returns {Promise<number>}
   */
  getServerIp = async () => {
    try {
      const res = await this.makeRequest("/api/trpc/settings.getServerIp");
      return res;
    } catch (error) {
      return APIError(null, error);
    }
  };

  /**
   *
   * @param {"portalLicense" | "lemonLicense" } type
   * @returns
   */
  getLicensePayload = async (type) => {
    try {
      const res = await this.makeRequest(`/api/trpc/${type}.getLicensePayload`);
      return res;
    } catch (error) {
      return APIError(null, error);
    }
  };
}

/**
 * @typedef {Object} Credentials
 * @property {string} email - The email address associated with the client.
 * @property {string} password - The password for authentication.
 */

/**
 * @typedef {object} ClientConfig
 * @property {String} endpoint - The API endpoint for the client.
 * @property {Credentials} credentials - The credentials for authenticating the client.
 * @property {String} token - The API token for additional authentication (optional).
 */

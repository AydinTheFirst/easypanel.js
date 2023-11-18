import EventEmitter from "node:events";
import REST from "./utils/REST.js";
import { Routes } from "./utils/Routes.js";

import { ProjectsManager } from "./managers/ProjectsManager.js";
import { MonitorManager } from "./managers/MonitorManager.js";
import { Settings } from "./managers/Settings.js";

/**
 * @typedef {Client} Client
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

    /**
     * @type {REST}
     */
    this.rest = new REST({
      baseURL: this.endpoint,
      token: this.token,
    });

    /**
     * @type {ProjectsManager}
     */
    this.projects = new ProjectsManager(this);

    /**
     * @type {MonitorManager}
     */
    this.monitor = new MonitorManager(this);

    /**
     * @type {Settings}
     */
    this.settings = new Settings(this);

    //   this.services = new ServicesManager(this);
  }

  /**
   * Uses email and username to get api token
   * Or just checks if your api token works
   * @returns {Promise<Client>}
   */
  async login() {
    if (this.token) {
      const user = await this.getUser();
      if (user) {
        console.log(
          "Valid API token was provided, Authentication was skipped!"
        );
        this.emit("ready");
        return this;
      }
    }

    const res = await this.rest.post(Routes.Auth.Login, {
      json: this.credentials,
    });

    if (!res.ok) {
      throw new Error("An error occured: " + JSON.stringify(res));
    }

    this.token = res.token;

    this.emit("ready");
    return this;
  }

  /**
   * Logouts user
   * @returns {Promise<null>}
   */
  async logout() {
    const res = await this.rest.post(Routes.Auth.Logout);
    return res;
  }

  /**
   * Returns authenticated user
   * @returns {User}
   */
  async getUser() {
    const res = await this.rest.get(Routes.Auth.GetUser);
    return res;
  }

  /**
   *
   * @param {"portalLicense" | "lemonLicense" } type
   * @returns {Promise} idk im poor to buy a license
   */
  async getLicensePayload(type) {
    const license =
      type === "lemonLicense" ? Routes.License.Lemon : Routes.License.Portal;

    const res = await this.rest.get(license);

    return res;
  }

  /**
   *
   * @param {"portalLicense" | "lemonLicense" } type
   * @param {object} body
   * @param {?string} body.licenseKey If license type is lemonLicense it requires this field
   * @returns {Promise} idk im poor to buy a license
   */
  async activateLicense(type, body) {
    const license =
      type === "lemonLicense"
        ? Routes.License.ActivateLemon
        : Routes.License.ActivatePortal;

    const res = await this.rest.post(license, body);

    return res;
  }
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

/**
 * @typedef {Object} Managers
 * @property {ProjectsManager} projects
 * @property {MonitorManager} monitor
 * @property {ServicesManager} services
 */

/**
 * Emitted when a client is ready!
 * @event Client#ready
 */

/**
 * @typedef {Object} User
 * @property {string} id - The unique identifier of the user.
 * @property {string} createdAt - The timestamp indicating when the user was created.
 * @property {string} email - The email address of the user.
 * @property {boolean} admin - Indicates whether the user has admin privileges.
 * @property {string | null} password - The password of the user (nullable for security reasons).
 */

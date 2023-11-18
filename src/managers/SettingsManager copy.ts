import { Client } from "../Client.js";
import { Routes } from "../utils/Routes.js";
import { BaseManager } from "./BaseManager.js";

export class ServiceManager extends BaseManager {
  constructor(client: Client) {
    super(client);
  }

  /**
   * Creates a new service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async create(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).Create;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Retrieves information about a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async inspect(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).Inspect;
    const res = await this.client.rest.get(Route, { json: body });
    return res;
  }

  /**
   * Destroys a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async destroy(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).Destroy;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Deploys a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async deploy(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).Deploy;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Disables a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async disable(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).Disable;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Enables a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async enable(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).Enable;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Exposes a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async exposeService(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).ExposeService;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Retrieves statistics for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async getServiceStats(
    serviceType: ServiceType,
    body: object
  ): Promise<object> {
    const Route = Routes.Services(serviceType).GetServiceStats;
    const res = await this.client.rest.get(Route, { json: body });
    return res;
  }

  /**
   * Refreshes the deploy token for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async refreshDeployToken(
    serviceType: ServiceType,
    body: object
  ): Promise<object> {
    const Route = Routes.Services(serviceType).RefreshDeployToken;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from GitHub for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateSourceGithub(
    serviceType: ServiceType,
    body: object
  ): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateSourceGithub;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from Git for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateSourceGit(
    serviceType: ServiceType,
    body: object
  ): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateSourceGit;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from an image for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateSourceImage(
    serviceType: ServiceType,
    body: object
  ): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateSourceImage;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the build configuration for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateBuild(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateBuild;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the environment variables for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateEnv(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateEnv;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the domain configuration for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateDomains(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateDomains;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the redirects configuration for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateRedirects(
    serviceType: ServiceType,
    body: object
  ): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateRedirects;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the basic authentication configuration for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateBasicAuth(
    serviceType: ServiceType,
    body: object
  ): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateBasicAuth;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the mounts configuration for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateMounts(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateMounts;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the ports configuration for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updatePorts(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).UpdatePorts;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the resources configuration for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateResources(
    serviceType: ServiceType,
    body: object
  ): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateResources;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the deployment configuration for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateDeploy(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateDeploy;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the backup configuration for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateBackup(serviceType: ServiceType, body: object): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateBackup;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the advanced configuration for a service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async updateAdvanced(
    serviceType: ServiceType,
    body: object
  ): Promise<object> {
    const Route = Routes.Services(serviceType).UpdateAdvanced;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }
}

/**
 * @typedef {"app" | "mysql" | "mariadb" | "postrages" | "mongo" | "redis"} ServiceType
 */
type ServiceType =
  | "app"
  | "mysql"
  | "mariadb"
  | "postrages"
  | "mongo"
  | "redis";

/**
 * Define YourClientType appropriately based on the type of your client.
 */
type YourClientType = any; // Change 'any' to the actual type of your client

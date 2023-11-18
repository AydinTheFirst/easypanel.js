import { Routes } from "../utils/Routes.js";
import { BaseManager } from "./BaseManager.js";

export class ServiceManager extends BaseManager {
  constructor(client) {
    super(client);
  }

  /**
   * Creates a new service.
   * @param {ServiceType} serviceType
   * @param {object} body
   * @returns {Promise<object>}
   */
  async create(serviceType, body) {
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
  async inspect(serviceType, body) {
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
  async destroy(serviceType, body) {
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
  async deploy(serviceType, body) {
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
  async disable(serviceType, body) {
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
  async enable(serviceType, body) {
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
  async exposeService(serviceType, body) {
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
  async getServiceStats(serviceType, body) {
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
  async refreshDeployToken(serviceType, body) {
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
  async updateSourceGithub(serviceType, body) {
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
  async updateSourceGit(serviceType, body) {
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
  async updateSourceImage(serviceType, body) {
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
  async updateBuild(serviceType, body) {
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
  async updateEnv(serviceType, body) {
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
  async updateDomains(serviceType, body) {
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
  async updateRedirects(serviceType, body) {
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
  async updateBasicAuth(serviceType, body) {
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
  async updateMounts(serviceType, body) {
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
  async updatePorts(serviceType, body) {
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
  async updateResources(serviceType, body) {
    serviceType;
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
  async updateDeploy(serviceType, body) {
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
  async updateBackup(serviceType, body) {
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
  async updateAdvanced(serviceType, body) {
    const Route = Routes.Services(serviceType).UpdateAdvanced;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }
}

/**
 * @typedef {"app" | "mysql" | "mariadb" | "postrages" | "mongo" | "redis"} ServiceType
 */

import { Client } from "../Client.js";

/**
 * Service Manager
 */
export class ServicesManager {
  /**
   * @param {Client} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Stops the running service.
   * @param {SelectServiceOptions} options
   * @param {Boolean} force - When true force rebuild gets triggered
   * @returns {Promise<any>}
   */
  deploy = async (options, force) => {
    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.disableService`,
      "post",
      {
        json: { ...options, forceRebuild: force },
      }
    );
    return res;
  };

  /**
   * Stops the running service.
   * @param {SelectServiceOptions} options
   * @returns {Promise}
   */
  stopService = async (options) => {
    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.disableService`,
      "post",
      {
        json: { ...options },
      }
    );
    return res;
  };

  /**
   * Starts the service.
   * @param {SelectServiceOptions} options
   * @returns {Promise}
   */
  startService = async (options) => {
    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.enableService`,
      "post",
      {
        json: { ...options },
      }
    );
    return res;
  };

  /**
   * Creates new Service
   * @param {SelectServiceOptions} options
   * @param {Domains} domains
   * @returns {Promise<ServiceConf>}
   */
  create = async (options, domains) => {
    if (!domains) domains = [{ host: "$(EASYPANEL_DOMAIN)" }];

    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.createService`,
      "post",
      {
        json: { ...options },
      }
    );
    return res;
  };

  /**
   * Inspects the existing Service
   * @param {SelectServiceOptions} options
   * @returns {Promise<ServiceConf>}
   */
  inspect = async (options) => {
    const query = this.client.query({
      ...options,
    });

    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.inspectService` + `?input=${query}`,
      "get"
    );
    return res;
  };

  /**
   * Destroy existing service
   * @param {SelectServiceOptions} options
   * @returns {Promise}
   */
  destroy = async (options) => {
    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.destroyService`,
      "post",
      {
        json: { ...options },
      }
    );
    return res;
  };

  /**
   * Updates the source of Github
   * @param {SelectServiceOptions} options
   * @param {string} env - The environment of project
   * @returns {Promise}
   */
  updateEnv = async (options, env) => {
    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.updateEnv`,
      "post",
      {
        json: { ...options, env },
      }
    );
    return res;
  };

  /**
   * Updates the domains of Service (!it does not add new domain!)
   * @param {SelectServiceOptions} options
   * @param {Domains} domains
   * @returns {Promise}
   */
  updateDomains = async (options, domains) => {
    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.updateDomains`,
      "post",
      {
        json: { ...options, domains },
      }
    );
    return res;
  };

  /**
   * Updates the source of Github
   * @param {GithubSourceConfiguration} options
   * @returns {Promise}
   */
  updateSourceGithub = async (options) => {
    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.updateSourceGithub`,
      "post",
      {
        json: { ...options },
      }
    );
    return res;
  };

  /**
   * Updates the Docker Image
   * @param {DockerImageConfiguration} options
   * @returns {Promise}
   */
  updateSourceImage = async (options) => {
    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.updateSourceImage`,
      "post",
      {
        json: { ...options },
      }
    );
    return res;
  };

  /**
   * Updates the Source Git
   * @param {GitConfiguration} options
   * @returns {Promise}
   */
  updateSourceGit = async (options) => {
    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.updateSourceGit`,
      "post",
      {
        json: { ...options },
      }
    );
    return res;
  };

  /**
   * Updates the Build
   * @param {SelectServiceOptions} options
   * @param {BuildOptions} build
   * @returns {Promise}
   */
  updateBuild = async (options, build) => {
    options.build = build;

    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.updateBuild`,
      "post",
      {
        json: { ...options },
      }
    );
    return res;
  };

  /**
   * Refresh Deploy token of service
   * @param {SelectServiceOptions} options
   * @returns {Promise}
   */
  refreshDeployToken = async (options) => {
    const res = await this.client.makeRequest(
      `/api/trpc/services.${options.type}.refreshDeployToken`,
      "post",
      {
        json: { ...options },
      }
    );
    return res;
  };
}

/**
 * Type of service
 * @typedef {"app" | "mysql" | "mariadb" | "postgres" | "mongo" | "redis"} ServiceType
 */

/**
 * @typedef {Object} DomainObject
 * @property {string} host - The host property in the domain object.
 * @property {boolean} https - The https property in the domain object.
 * @property {number} port - The port property in the domain object.
 * @property {string} path - The path property in the domain object.
 */

/**
 * @typedef {Array<DomainObject>} Domains - The domains array.
 */

/**
 * @typedef {Object} ServiceConf
 * @property {string} projectName - The name of the project.
 * @property {string} name - The name property.
 * @property {ServiceType} type - The type property (e.g., "app").
 * @property {boolean} enabled - The enabled property.
 * @property {string} token - The token property.
 * @property {string} env - The env property.
 * @property {Object} deploy - The deploy configuration object.
 * @property {string} deploymentUrl - The deployment url
 * @property {number} deploy.replicas - The number of replicas.
 * @property {string | null} deploy.command - The deploy command (nullable).
 * @property {boolean} deploy.zeroDowntime - The zeroDowntime property.
 * @property {Domains} domains - The domains array
 * @property {Array<Object>} mounts - The mounts array.
 * @property {Array<Object>} ports - The ports array.
 */

/**
 * @typedef {Object} SelectServiceOptions
 * @property {string} projectName - The name of the project.
 * @property {string} serviceName - The name of the project.
 * @property {ServiceType} type - The name of the project.
 */

/**
 * @typedef {Object} GithubSourceConfiguration
 * @property {boolean} autoDeploy - Indicates whether auto deploy is enabled or not.
 * @property {string} owner - Github username or organization name.
 * @property {string} path - This is useful if you have a monorepo.
 * @property {string} ref - This has to be a valid branch in your repo.
 * @property {string} repo - The GitHub repository name.
 * @property {string} projectName - The name of the project.
 * @property {string} serviceName - The name of the service.
 * @property {ServiceType} type - The type of the service.
 */

/**
 * @typedef {Object} DockerImageConfiguration
 * @property {string} image - Enter a public image name from any Docker registry.
 * @property {string} username - Used for private registries
 * @property {string} password - Used for private registries.
 * @property {string} projectName - The name of the project.
 * @property {string} serviceName - The name of the service.
 * @property {ServiceType} type - The type of the service.
 */

/**
 * @typedef {Object} GitConfiguration
 * @property {string} repo - Git repo URL
 * @property {string} ref - This has to be a valid branch in your repo.
 * @property {string} path - This is useful if you have a monorepo.
 * @property {string} projectName - The name of the project.
 * @property {string} serviceName - The name of the service.
 * @property {ServiceType} type - The type of the service.
 */

/**
 * @typedef {{ type: "dockerfile" | "heroku-buildpacks" | "paketo-buildpacks" | "nixpacks", file?: string }} BuildOptions
 */

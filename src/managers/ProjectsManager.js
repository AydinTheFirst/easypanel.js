import { Client } from "../Client.js";

/**
 * Project Manager
 */
export class ProjectsManager {
  /**
   *
   * @param {Client} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Creates new project
   * @param {string} name projectName
   * @returns {Promise<ProjectInfo>}
   */
  create = async (name) => {
    const res = await this.client.makeRequest(
      "/api/trpc/projects.createProject",
      "post",
      {
        json: { name },
      }
    );
    return res;
  };

  /**
   * Destorys project
   * @param {string} name projectName
   * @returns {Promise<null>}
   */
  destory = async (name) => {
    const res = await this.client.makeRequest(
      "/api/trpc/projects.destroyProject",
      "post",
      {
        json: { name },
      }
    );
    return res;
  };

  /**
   * List projects with names
   * @returns {Promise<Projects>}
   */
  list = async () => {
    const res = await this.client.makeRequest(
      "/api/trpc/projects.listProjects"
    );
    return res;
  };

  /**
   * Returns all services and projects with details
   * @returns {Promise<ProjectsWithServices>}
   */

  listWithServices = async () => {
    const query = this.client.query();
    const res = await this.client.makeRequest(
      "/api/trpc/projects.listProjectsAndServices" + `?input=${query}`
    );
    return res;
  };

  /**
   *
   * @param {string} projectName
   * @returns {Promise<ProjectInspect>}
   */
  inspect = async (projectName) => {
    const query = this.client.query({ projectName });
    const res = await this.client.makeRequest(
      "/api/trpc/projects.inspectProject" + `?input=${query}`
    );
    return res;
  };

  /**
   * Checks if you can create new project
   * @returns {Promise<boolean>}
   */
  canCreateProject = async () => {
    const query = this.client.query();
    const res = await this.client.makeRequest(
      "/api/trpc/projects.canCreateProject" + `?input=${query}`
    );
    return res;
  };
}

/**
 * @typedef {Object} ProjectInfo
 * @property {string} name
 * @property {string} createdAt
 */

/**
 * @typedef {ProjectInfo[]} Projects
 */

/**
 * @typedef {Object} ProjectsWithServices
 * @property {Projects} projects
 * @property {import("./ServicesManager.js").ServiceConf[]} services
 */

/**
 * @typedef {Object} ProjectInspect
 * @property {ProjectInfo} project
 * @property {import("./ServicesManager.js").ServiceConf[]} services
 */

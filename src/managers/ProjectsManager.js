// eslint-disable-next-line no-unused-vars
import { Routes } from "../utils/Routes.js";
import { BaseManager } from "./BaseManager.js";

export class ProjectsManager extends BaseManager {
  constructor(client) {
    super(client);
  }

  /**
   * Checks whether user can create more projects
   * @returns {Promise<object>}
   */
  async canCreate() {
    const res = await this.client.rest.get(Routes.Projets.CanCreate);
    return res;
  }

  /**
   * Creates project
   * @param {object} body
   * @param {string} body.name
   * @returns {Promise<object>}
   */
  async create(body) {
    const Route = Routes.Projets.Create.replace("app", body.type);
    const res = await this.client.rest.post(Route, {
      json: body,
    });
    return res;
  }

  /**
   * Destroys project
   * @param {object} body
   * @param {string} body.name
   * @returns {Promise<object>}
   */
  async destory(body) {
    const res = await this.client.rest.post(Routes.Projets.Destroy, {
      json: body,
    });
    return res;
  }

  /**
   * Inspects project
   * @param {object} body
   * @param {string} body.projectName
   * @returns {Promise<object>}
   */
  async inspect(body) {
    const res = await this.client.rest.get(Routes.Projets.Inspect, body);
    return res;
  }

  /**
   * Lists all projects
   * @returns {Promise<object>}
   */
  async list() {
    const res = await this.client.rest.get(Routes.Projets.List);
    return res;
  }

  /**
   * Lists all projects with services
   * @returns {Promise<object>}
   */
  async listWithServices() {
    const res = await this.client.rest.get(Routes.Projets.ListWithServices);
    return res;
  }
}

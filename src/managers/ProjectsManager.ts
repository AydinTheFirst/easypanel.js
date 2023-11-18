// eslint-disable-next-line no-unused-vars
import { Client } from "../Client.js";
import { Routes } from "../utils/Routes.js";
import { BaseManager } from "./BaseManager.js";

export class ProjectsManager extends BaseManager {
  constructor(client: Client) {
    super(client);
  }

  /**
   * Checks whether user can create more projects
   * @returns {Promise<object>}
   */
  async canCreate() {
    const res = await this.client.rest.get(Routes.Projets.CanCreate, {
      json: null,
    });
    return res;
  }

  async create(body: ProjectConf) {
    const Route = Routes.Projets.Create.replace("app", body.name);
    const res = await this.client.rest.post(Route, {
      json: body,
    });
    return res;
  }

  async destory(body: ProjectConf) {
    const res = await this.client.rest.post(Routes.Projets.Destroy, {
      json: body,
    });
    return res;
  }

  async inspect(body: ProjectQueryConf) {
    const res = await this.client.rest.get(Routes.Projets.Inspect, body);
    return res;
  }

  /**
   * Lists all projects
   * @returns {Promise<object>}
   */
  async list() {
    const res = await this.client.rest.get(Routes.Projets.List, {
      json: null,
    });
    return res;
  }

  /**
   * Lists all projects with services
   * @returns {Promise<object>}
   */
  async listWithServices() {
    const res = await this.client.rest.get(Routes.Projets.ListWithServices, {
      json: null,
    });
    return res;
  }
}

interface ProjectConf {
  name: string;
}

interface ProjectQueryConf {
  projectName: string;
}

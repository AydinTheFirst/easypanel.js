// eslint-disable-next-line no-unused-vars
import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";
import { NoResponse } from "../types/index.types.js";

import {
  CanCreate,
  ProjectName,
  Create,
  ProjectQueryConf,
  ListWithServices,
  Project,
  ListProjects,
} from "../types/projects.types.js";

import { Routes } from "../utils/Routes.js";

/**
 * Projects Manager
 * Manages operations related to projects, including creation, destruction, inspection, and listing.
 */
export class ProjectsManager extends BaseManager {
  // The routes for accessing project-related endpoints
  routes: typeof Routes.Projets;

  /**
   * Constructor for ProjectsManager
   * @param {Client} client - The client instance used for making API requests.
   */
  constructor(client: Client) {
    // Call the constructor of the BaseManager class with the provided client
    super(client);

    // Set the routes for project-related endpoints
    this.routes = Routes.Projets;
  }

  /**
   * Checks if project creation is allowed.
   * @returns {Promise<CanCreate>} - A Promise that resolves to information about whether project creation is allowed.
   */
  async canCreate(): Promise<CanCreate> {
    const res = await this.client.rest.get(this.routes.CanCreate, {
      json: null,
    });
    return res;
  }

  /**
   * Creates a new project.
   * @param {ProjectName} body - The information required to create a new project.
   * @returns {Promise<Create>} - A Promise that resolves to information about the created project.
   */
  async create(body: ProjectName): Promise<Create> {
    // Construct the route by replacing a placeholder in the route string with the project name
    const Route = this.routes.Create.replace("app", body.name);
    const res = await this.client.rest.post(Route, {
      json: body,
    });
    return res;
  }

  /**
   * Destroys a project.
   * @param {ProjectName} body - The information required to destroy a project.
   * @returns {Promise<NoResponse>} - A Promise that resolves to indicate the success of the operation.
   */
  async destroy(body: ProjectName): Promise<NoResponse> {
    const res = await this.client.rest.post(this.routes.Destroy, {
      json: body,
    });
    return res;
  }

  /**
   * Inspects a project.
   * @param {ProjectQueryConf} body - The information required to inspect a project.
   * @returns {Promise<Project>} - A Promise that resolves to information about the inspected project.
   */
  async inspect(body: ProjectQueryConf): Promise<Project> {
    const res = await this.client.rest.get(this.routes.Inspect, {
      json: body,
    });
    return res;
  }

  /**
   * Lists all projects.
   * @returns {Promise<ListProjects>} - A Promise that resolves to a list of all projects.
   */
  async list(): Promise<ListProjects> {
    const res = await this.client.rest.get(this.routes.List, {
      json: null,
    });
    return res;
  }

  /**
   * Lists projects with associated services.
   * @returns {Promise<ListWithServices>} - A Promise that resolves to a list of projects with associated services.
   */
  async listWithServices(): Promise<ListWithServices> {
    const res = await this.client.rest.get(this.routes.ListWithServices, {
      json: null,
    });
    return res;
  }
}

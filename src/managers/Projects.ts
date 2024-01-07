import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";
import { Routes } from "../utils/Routes.js";
import {
  IDockerContainer,
  IInspectedProject,
  IProject,
  IProjectsWithServices,
} from "../types/peojects.t.js";

export class ProjectsManager extends BaseManager {
  routes: typeof Routes.Projets;

  constructor(client: Client) {
    super(client);

    this.routes = Routes.Projets;
  }

  async canCreate(): Promise<boolean> {
    const res = await this.client.rest.get(this.routes.CanCreate, {
      json: null,
    });
    return res;
  }

  async create(body: { name: string }): Promise<IProject> {
    const Route = this.routes.Create.replace("app", body.name);
    const res = await this.client.rest.post(Route, {
      json: body,
    });

    return res;
  }

  async destroy(body: { name: string }): Promise<null> {
    const res = await this.client.rest.post(this.routes.Destroy, {
      json: body,
    });

    return res;
  }

  async inspect(body: { projectName: string }): Promise<IInspectedProject> {
    const res = await this.client.rest.get(this.routes.Inspect, {
      json: body,
    });

    return res;
  }

  async list(): Promise<IProject[]> {
    const res = await this.client.rest.get(this.routes.List, {
      json: null,
    });
    return res;
  }

  async listWithServices(): Promise<IProjectsWithServices> {
    const res = await this.client.rest.get(this.routes.ListWithServices, {
      json: null,
    });
    return res;
  }

  async getDockerContainers(body: {
    service: string;
  }): Promise<IDockerContainer[]> {
    const res = await this.client.rest.get(this.routes.GetDockerContainers, {
      json: body,
    });
    return res;
  }
}

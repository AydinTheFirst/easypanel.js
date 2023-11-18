// eslint-disable-next-line no-unused-vars
import { Client } from "../Client.js";
import { Routes } from "../utils/Routes.js";
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

export class ProjectsManager extends BaseManager {
  constructor(client: Client) {
    super(client);
  }

  async canCreate(): Promise<CanCreate> {
    const res = await this.client.rest.get(Routes.Projets.CanCreate, {
      json: null,
    });
    return res;
  }

  async create(body: ProjectName): Promise<Create> {
    const Route = Routes.Projets.Create.replace("app", body.name);
    const res = await this.client.rest.post(Route, {
      json: body,
    });
    return res;
  }

  async destory(body: ProjectName): Promise<NoResponse> {
    const res = await this.client.rest.post(Routes.Projets.Destroy, {
      json: body,
    });
    return res;
  }

  async inspect(body: ProjectQueryConf): Promise<Project> {
    const res = await this.client.rest.get(Routes.Projets.Inspect, {
      json: body,
    });
    return res;
  }

  async list(): Promise<ListProjects> {
    const res = await this.client.rest.get(Routes.Projets.List, {
      json: null,
    });
    return res;
  }

  async listWithServices(): Promise<ListWithServices> {
    const res = await this.client.rest.get(Routes.Projets.ListWithServices, {
      json: null,
    });
    return res;
  }
}

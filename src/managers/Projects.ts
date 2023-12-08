// eslint-disable-next-line no-unused-vars
import { Client } from "../Client.js";

import { BaseManager } from "./BaseManager.js";

import { Routes } from "../utils/Routes.js";

import {
  DockerContainer,
  IInspectedProject,
  IList,
  IProject,
} from "../types/general.types.js";

import { Collection } from "../utils/Collection.js";
import { Project } from "../index.js";

export class ProjectsManager extends BaseManager {
  routes: typeof Routes.Projets;
  cache: Collection<string, Project>;

  constructor(client: Client) {
    super(client);

    this.routes = Routes.Projets;

    this.cache = new Collection<string, Project>();
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

  async listWithServices(): Promise<IList> {
    const res = await this.client.rest.get(this.routes.ListWithServices, {
      json: null,
    });
    return res;
  }

  async getDockerContainers(body: {
    service: string;
  }): Promise<DockerContainer[]> {
    const res = await this.client.rest.get(this.routes.GetDockerContainers, {
      json: body,
    });
    return res;
  }
}

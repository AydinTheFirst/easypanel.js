import { Client } from "@/Client";
import { BaseManager } from "./BaseManager";

import {
  IDockerContainer,
  IInspectedProject,
  IProject,
  IProjectsWithServices,
} from "../types/projects.js";

export class ProjectsManager extends BaseManager {
  routes: typeof this.client.routes.Projets;

  constructor(client: Client) {
    super(client);

    this.routes = this.client.routes.Projets;
  }

  async canCreate(): Promise<boolean> {
    const res = await this.client.rest.get(this.routes.CanCreate);
    return res.data;
  }

  async create(body: { name: string }): Promise<IProject> {
    const Route = this.routes.Create.replace("app", body.name);
    const res = await this.client.rest.post(Route, {
      ...body,
    });

    return res.data;
  }

  async destroy(body: { name: string }): Promise<null> {
    const res = await this.client.rest.post(this.routes.Destroy, {
      ...body,
    });

    return res.data;
  }

  async inspect(body: { projectName: string }): Promise<IInspectedProject> {
    const res = await this.client.rest.get(this.routes.Inspect, {
      params: body,
    });

    return res.data;
  }

  async list(): Promise<IProject[]> {
    const res = await this.client.rest.get(this.routes.List);
    return res.data;
  }

  async listWithServices(): Promise<IProjectsWithServices> {
    const res = await this.client.rest.get(this.routes.ListWithServices);
    return res.data;
  }

  async getDockerContainers(body: {
    service: string;
  }): Promise<IDockerContainer[]> {
    const res = await this.client.rest.get(this.routes.GetDockerContainers, {
      params: body,
    });
    return res.data;
  }

  updateAccess = async (body: UpdateAccessParams): Promise<void> => {
    const res = await this.client.rest.post(this.routes.updateAccess, {
      ...body,
    });

    return res.data;
  };

  updateEnv = async (body: {
    projectName: string;
    env: string;
  }): Promise<void> => {
    const res = await this.client.rest.post(this.routes.updateEnv, {
      ...body,
    });

    return res.data;
  };
}

interface UpdateAccessParams {
  projectName: string;
  userId: string;
  active: boolean;
}

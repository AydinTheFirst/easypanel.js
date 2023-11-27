import { Collection } from "@discordjs/collection";
import { Client } from "../Client.js";
import { ProjectsManager } from "../managers/Projects.js";
import { IProject } from "../types/general.types.js";
import { BaseClass } from "./BaseClass.js";
import { Service } from "./Service.js";

export interface Project extends IProject {}
export class Project extends BaseClass {
  manager: ProjectsManager;
  constructor(client: Client, name: string, data: any) {
    super(client);

    this.manager = client.projects;

    this.name = name;
    this.createdAt = data.createdAt;
    this.services = new Collection<string, Service>();
  }

  async destroy() {
    const res = await this.client.projects.destroy({
      name: this.name,
    });

    return res;
  }

  async inspect() {
    const res = await this.client.projects.inspect({
      projectName: this.name,
    });

    return res;
  }
}

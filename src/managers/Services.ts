import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";

import {
  UpdateBasicAuth,
  UpdateBuild,
  UpdateGit,
  UpdateGithub,
  UpdateImage,
  UpdatePorts,
  UpdateRedirects,
  UpdateResources,
  ISelectService,
  IService,
} from "../types/general.types.js";

import { Routes } from "../utils/Routes.js";
import { Service } from "../classes/Service.js";

import { Collection } from "../utils/Collection.js";

import YAML from "yaml";

export class ServicesManager extends BaseManager {
  routes: typeof Routes.Services;
  cache: Collection<string, Service>;
  constructor(client: Client) {
    super(client);

    this.routes = Routes.Services;

    this.cache = new Collection<string, Service>();
  }

  /**
   * Creates a new service.
   */
  async create(body: ISelectService): Promise<IService> {
    const domains = [
      {
        host: "$(EASYPANEL_DOMAIN)",
      },
    ];
    const Route = this.routes(body.type).Create;
    const res = await this.client.rest.post(Route, { json: body, domains });
    return res;
  }

  /**
   * Retrieves information about a service.
   */
  async inspect(body: ISelectService): Promise<Service> {
    const Route = this.routes(body.type).Inspect;
    const res = await this.client.rest.get(Route, { json: body });
    return res;
  }

  /**
   * Destroys a service.
   */
  async destroy(body: ISelectService): Promise<null> {
    const Route = this.routes(body.type).Destroy;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Deploys a service.
   */
  async deploy(
    body: ISelectService & { forceRebuild?: boolean }
  ): Promise<null> {
    const Route = this.routes(body.type).Deploy;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Disables a service.
   */
  async disable(body: ISelectService): Promise<null> {
    const Route = this.routes(body.type).Disable;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Enables a service.
   */
  async enable(body: ISelectService): Promise<null> {
    const Route = this.routes(body.type).Enable;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Refreshes the deploy token for a service.
   */
  async refreshDeployToken(body: ISelectService): Promise<null> {
    const Route = this.routes(body.type).RefreshDeployToken;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from GitHub for a service.
   */
  async updateSourceGithub(body: UpdateGithub): Promise<null> {
    const Route = this.routes(body.type).UpdateSourceGithub;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from Git for a service.
   */
  async updateSourceGit(body: UpdateGit): Promise<null> {
    const Route = this.routes(body.type).UpdateSourceGit;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from an image for a service.
   */
  async updateSourceImage(body: UpdateImage): Promise<null> {
    const Route = this.routes(body.type).UpdateSourceImage;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the build configuration for a service.
   */
  async updateBuild(body: UpdateBuild): Promise<null> {
    const Route = this.routes(body.type).UpdateBuild;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the environment variables for a service.
   */
  async updateEnv(
    body: ISelectService & Pick<Service, "env" | "createDotEnv">
  ): Promise<null> {
    const Route = this.routes(body.type).UpdateEnv;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the domain configuration for a service.
   */
  async updateDomains(
    body: ISelectService & Pick<Service, "domains">
  ): Promise<null> {
    const Route = this.routes(body.type).UpdateDomains;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the redirects configuration for a service.
   */
  async updateRedirects(body: UpdateRedirects): Promise<null> {
    const Route = this.routes(body.type).UpdateRedirects;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the basic authentication configuration for a service.
   */
  async updateBasicAuth(body: UpdateBasicAuth): Promise<null> {
    const Route = this.routes(body.type).UpdateBasicAuth;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the mounts configuration for a service.
   */
  async updateMounts(
    body: ISelectService & Pick<Service, "mounts">
  ): Promise<null> {
    const Route = this.routes(body.type).UpdateMounts;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the ports configuration for a service.
   */
  async updatePorts(body: UpdatePorts): Promise<null> {
    const Route = this.routes(body.type).UpdatePorts;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the resources configuration for a service.
   */
  async updateResources(body: UpdateResources): Promise<null> {
    const Route = this.routes(body.type).UpdateResources;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the deployment configuration for a service.
   */
  async updateDeploy(
    body: ISelectService & Pick<Service, "deploy">
  ): Promise<null> {
    const Route = this.routes(body.type).UpdateDeploy;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  async getServiceLogs(body: ISelectService): Promise<string> {
    const service = body.projectName + "_" + body.serviceName;
    const res = await this.client.rest.get(this.routes("").GetServiceLogs, {
      json: {
        service,
        lines: 50,
      },
    });

    return res;
  }

  async createFromSchema(body: any): Promise<any> {
    const res = await this.client.rest.post(this.routes("").CreateFromSchema, {
      json: body,
    });

    return res;
  }

  async updateMaintenance(
    body: ISelectService & Pick<IService, "maintenance">
  ): Promise<boolean> {
    const res = await this.client.rest.post(
      this.routes(body.type).UpdateMaintenance,
      {
        json: body,
      }
    );

    return res;
  }

  async listDeployments(body: ISelectService): Promise<
    {
      projectName: string;
      serviceName: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      status: "done" | "error" | "pending";
    }[]
  > {
    const res = await this.client.rest.get(
      this.routes(body.type).ListDeployments,
      {
        json: body,
      }
    );
    return res;
  }

  async getDeployment(body: ISelectService & { id: string }): Promise<{
    projectName: string;
    serviceName: string;
    id: string;
    createdAt: string;
    updatedAt: string;
    status: "done" | "error" | "pending";
    description: string;
    log: string;
  }> {
    const res = await this.client.rest.get(
      this.routes(body.type).GetDeployment,
      { json: body }
    );

    return res;
  }

  async createFromDockerCompose(body: {
    projectName: string;
    file: string;
  }): Promise<IService[]> {
    const file = YAML.parse(body.file);

    const services = [];

    for (const entry of Object.entries(file.services)) {
      const key: string = entry[0];
      const data: any = entry[1];

      const obj: any = {};

      obj.env = Object.entries(data.environment || {})
        .map(([key, value]) => `${key}=${value}`)
        .join("\n");

      obj.mounts = data.volumes?.map((volume: string) => {
        const [hostPath, mountPath] = volume.split(":");
        return {
          type: "bind",
          hostPath,
          mountPath,
        };
      });

      obj.ports = data.ports?.map((port: string) => {
        const [published, target] = port.split(":").map(Number);
        return {
          published,
          target,
          protocol: "tcp",
        };
      });

      obj.source = {
        type: "image",
        image: data.image,
        username: "",
        password: "",
      };

      const s = await this.create({
        type: "app",
        projectName: body.projectName,
        serviceName: key,
        ...obj,
      });

      services.push(s);
    }

    return services;
  }
}

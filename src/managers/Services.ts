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
} from "../types/general.types.js";

import { Routes } from "../utils/Routes.js";
import { Service } from "../classes/Service.js";

import { Collection } from "../utils/Collection.js";

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
  async create(body: ISelectService): Promise<Service> {
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
  async deploy(body: ISelectService): Promise<null> {
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
      json: {
        body,
      },
    });

    return res;
  }
}

import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";

import {
  ServiceType,
  CreateService,
  SelectService,
  UpdateBasicAuth,
  UpdateBuild,
  UpdateEnv,
  UpdateGit,
  UpdateGithub,
  UpdateImage,
  UpdatePorts,
  UpdateRedirects,
  UpdateResources,
  MountParams,
  DeployParams,
  ServiceRes,
} from "../types/services.types.js";

import { NoResponse, StringResponse } from "../types/index.types.js";
import { Routes } from "../utils/Routes.js";

export class ServicesManager extends BaseManager {
  routes: typeof Routes.Services;
  constructor(client: Client) {
    super(client);

    this.routes = Routes.Services;
  }

  /**
   * Creates a new service.
   */
  async create(
    serviceType: ServiceType,
    body: CreateService
  ): Promise<ServiceRes> {
    body.domains = [
      {
        host: "$(EASYPANEL_DOMAIN)",
      },
    ];
    const Route = this.routes(serviceType).Create;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Retrieves information about a service.
   */
  async inspect(
    serviceType: ServiceType,
    body: SelectService
  ): Promise<ServiceRes> {
    const Route = this.routes(serviceType).Inspect;
    const res = await this.client.rest.get(Route, { json: body });
    return res;
  }

  /**
   * Destroys a service.
   */
  async destroy(
    serviceType: ServiceType,
    body: SelectService
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).Destroy;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Deploys a service.
   */
  async deploy(
    serviceType: ServiceType,
    body: SelectService
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).Deploy;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Disables a service.
   */
  async disable(
    serviceType: ServiceType,
    body: SelectService
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).Disable;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Enables a service.
   */
  async enable(
    serviceType: ServiceType,
    body: SelectService
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).Enable;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Refreshes the deploy token for a service.
   */
  async refreshDeployToken(
    serviceType: ServiceType,
    body: SelectService
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).RefreshDeployToken;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from GitHub for a service.
   */
  async updateSourceGithub(
    serviceType: ServiceType,
    body: UpdateGithub
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateSourceGithub;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from Git for a service.
   */
  async updateSourceGit(
    serviceType: ServiceType,
    body: UpdateGit
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateSourceGit;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from an image for a service.
   */
  async updateSourceImage(
    serviceType: ServiceType,
    body: UpdateImage
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateSourceImage;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the build configuration for a service.
   */
  async updateBuild(
    serviceType: ServiceType,
    body: UpdateBuild
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateBuild;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the environment variables for a service.
   */
  async updateEnv(
    serviceType: ServiceType,
    body: UpdateEnv
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateEnv;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the domain configuration for a service.
   */
  async updateDomains(
    serviceType: ServiceType,
    body: CreateService
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateDomains;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the redirects configuration for a service.
   */
  async updateRedirects(
    serviceType: ServiceType,
    body: UpdateRedirects
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateRedirects;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the basic authentication configuration for a service.
   */
  async updateBasicAuth(
    serviceType: ServiceType,
    body: UpdateBasicAuth
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateBasicAuth;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the mounts configuration for a service.
   */
  async updateMounts(
    serviceType: ServiceType,
    body: MountParams
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateMounts;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the ports configuration for a service.
   */
  async updatePorts(
    serviceType: ServiceType,
    body: UpdatePorts
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdatePorts;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the resources configuration for a service.
   */
  async updateResources(
    serviceType: ServiceType,
    body: UpdateResources
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateResources;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the deployment configuration for a service.
   */
  async updateDeploy(
    serviceType: ServiceType,
    body: DeployParams
  ): Promise<NoResponse> {
    const Route = this.routes(serviceType).UpdateDeploy;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  async getServiceLogs(body: SelectService): Promise<StringResponse> {
    const service = body.projectName + "_" + body.serviceName;
    const res = await this.client.rest.get(this.routes("").GetServiceLogs, {
      json: {
        service,
        lines: 50,
      },
    });

    return res;
  }
}

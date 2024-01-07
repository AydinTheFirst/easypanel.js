import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";
import { Routes } from "../utils/Routes.js";
import YAML from "yaml";
import {
  BuildType,
  IBasicAuth,
  IDeploy,
  IDomain,
  IGitSource,
  IGithubSource,
  IImageSource,
  IMaintanance,
  IMount,
  IPort,
  IRedirect,
  IResourceLimits,
  ISelectService,
  Service,
} from "../types/services.t.js";

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
    body: ISelectService & {
      domains: IDomain[];
    }
  ): Promise<Service> {
    // Push the default domain
    body.domains.push({
      host: "$(EASYPANEL_DOMAIN)",
      https: true,
      port: 80,
      path: "/",
    });

    const Route = this.routes(body.type).Create;
    const res = await this.client.rest.post(Route, { json: body });
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
  async updateSourceGithub(body: UpdateGithubParams): Promise<null> {
    const Route = this.routes(body.type).UpdateSourceGithub;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from Git for a service.
   */
  async updateSourceGit(body: UpdateGitParams): Promise<null> {
    const Route = this.routes(body.type).UpdateSourceGit;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the source from an image for a service.
   */
  async updateSourceImage(body: UpdateImageParams): Promise<null> {
    const Route = this.routes(body.type).UpdateSourceImage;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the build configuration for a service.
   */
  async updateBuild(body: UpdateBuildParams): Promise<null> {
    const Route = this.routes(body.type).UpdateBuild;
    const res = await this.client.rest.post(Route, {
      json: { body },
    });

    return res;
  }

  /**
   * Updates the environment variables for a service.
   */
  async updateEnv(body: UpdateEnvParams): Promise<null> {
    const Route = this.routes(body.type).UpdateEnv;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the domain configuration for a service.
   */
  async updateDomains(body: UpdateDomainsParams): Promise<null> {
    const Route = this.routes(body.type).UpdateDomains;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the redirects configuration for a service.
   */
  async updateRedirects(body: UpdateRedirectsParams): Promise<null> {
    const Route = this.routes(body.type).UpdateRedirects;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the basic authentication configuration for a service.
   */
  async updateBasicAuth(body: UpdateBasicAuthParams): Promise<null> {
    const Route = this.routes(body.type).UpdateBasicAuth;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the mounts configuration for a service.
   */
  async updateMounts(body: UpdateMountsParams): Promise<null> {
    const Route = this.routes(body.type).UpdateMounts;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the ports configuration for a service.
   */
  async updatePorts(body: UpdatePortsParams): Promise<null> {
    const Route = this.routes(body.type).UpdatePorts;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the resources configuration for a service.
   */
  async updateResources(body: UpdateResourcesParams): Promise<null> {
    const Route = this.routes(body.type).UpdateResources;
    const res = await this.client.rest.post(Route, { json: body });
    return res;
  }

  /**
   * Updates the deployment configuration for a service.
   */
  async updateDeploy(body: UpdateDeployParams): Promise<null> {
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

  async updateMaintenance(body: UpdateMaintenanceParams): Promise<boolean> {
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
  }): Promise<Service[]> {
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

/** Define Params */
type UpdateGitParams = ISelectService & Omit<IGitSource, "type">;
type UpdateGithubParams = ISelectService & Omit<IGithubSource, "type">;
type UpdateImageParams = ISelectService & Omit<IImageSource, "type">;
type UpdateBuildParams = ISelectService & {
  build: {
    type: BuildType;
  };
};
type UpdateEnvParams = ISelectService & {
  env: string;
  createDotEnv: boolean;
};
type UpdateRedirectsParams = ISelectService & {
  redirects: IRedirect[];
};
type UpdateDomainsParams = ISelectService & {
  domains: IDomain[];
};
type UpdateBasicAuthParams = ISelectService & {
  basicAuth: IBasicAuth[];
};
type UpdatePortsParams = ISelectService & {
  ports: IPort[];
};
type UpdateResourcesParams = ISelectService & {
  resources: IResourceLimits;
};
type UpdateMountsParams = ISelectService & {
  mounts: IMount[];
};
type UpdateDeployParams = ISelectService & {
  deploy: IDeploy;
};
type UpdateMaintenanceParams = ISelectService & {
  maintenance: IMaintanance;
};

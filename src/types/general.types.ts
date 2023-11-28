import { Service } from "../classes/Service.js";
import { Collection } from "../utils/Collection.js";

/**
 * Projects
 */

export interface IProject {
  id: string;
  name: string;
  createdAt: string;
  services: Collection<string, Service>;
}

export interface IInspectedProject {
  project: {
    name: string;
    createdAt: string;
  };
  services: IService[];
}

export interface IList {
  projects: IProject[];
  services: IService[];
}

/**
 * Monitor
 */

export interface IAdvancedStats {
  cpu: { value: string; time: string }[];
  disk: { value: string; time: string }[];
  memory: { value: string; time: string }[];
  network: { value: { input: number; output: number }; time: string }[];
}

export interface IDockerTaskStats {
  [key: string]: {
    actual: number;
    desired: number;
  };
}

export interface ISystemStats {
  uptime: number;
  memInfo: {
    totalMemMb: number;
    usedMemMb: number;
    freeMemMb: number;
    usedMemPercentage: number;
    freeMemPercentage: number;
  };
  diskInfo: {
    totalGb: string;
    usedGb: string;
    freeGb: string;
    usedPercentage: string;
    freePercentage: string;
  };
  cpuInfo: {
    usedPercentage: number;
    count: number;
    loadavg: number[];
  };
  network: {
    inputMb: number;
    outputMb: number;
  };
}

export interface IContainerStats {
  id: string;
  stats: {
    cpu: {
      percent: number;
    };
    memory: {
      usage: number;
      percent: number;
    };
    network: {
      in: number;
      out: number;
    };
  };
  projectName: string;
  serviceName: string;
  containerName: string;
}

/**
 * Settings
 */
export interface ChangeCredentialsParams {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export interface IPanelDomain {
  serveOnIp: boolean;
  defaultPanelDomain: string;
  panelDomain: string;
}

/**
 * Services
 */

export type ServiceType =
  | "app"
  | "mysql"
  | "mariadb"
  | "postrages"
  | "mongo"
  | "redis";

export interface IService extends UpdateResources, UpdateBuild {
  id: string;
  type: ServiceType;
  projectName: string;
  name: string;
  enabled: boolean;
  token: string;
  env?: string;
  createDotEnv?: boolean;
  command?: string;
  deploy?: {
    replicas?: number;
    command?: string[];
    zeroDowntime?: boolean;
    capAdd?: string[];
    capDrop?: string[];
    sysctls?: string[];
  };
  domains?: {
    host: string;
    https?: boolean;
    port?: number;
    path?: string;
  }[];
  mounts?: {
    type: "bind" | "volume" | "file";
    hostPath?: string; // This property is optional based on the type
    name?: string; // This property is optional based on the type
    content?: string; // This property is optional based on the type
    mountPath: string;
  }[];
  ports?: {
    protocol: "tcp" | "udp";
    published: number;
    target: number;
  }[];
  redirects?: {
    regex: string;
    replacement: string;
    permanent: boolean;
  }[];
  basicAuth?: {
    username: string;
    password: string;
  }[];
  exposedPort?: number;
  deploymentUrl?: string;
  source?: {
    autodDeploy: boolean;
  } & GitParams &
    GithubParams &
    DockerImageParams;
  maintenance?: {
    enabled: boolean;
    title: string;
    subtitle: string;
    customLogo: string;
    customCss: string;
    hideLogo: boolean;
    hideLinks: boolean;
  };
  [x: string]: any;
}

export type ISelectService = {
  type: ServiceType;
  projectName: string;
  serviceName: string;
};

export interface GitParams {
  path: string;
  ref: string;
  repo: string;
}

export interface GithubParams extends GitParams {
  owner: string;
}

export interface DockerImageParams {
  image: string;
  username: string;
  password: string;
}

export interface UpdateGit extends ISelectService, GitParams {}

export interface UpdateImage extends ISelectService, DockerImageParams {}

export interface UpdateGithub extends ISelectService, GithubParams {}

export interface UpdateBuild extends ISelectService {
  build: {
    type: "dockerfile" | "heroku-buildpacks" | "paketo-buildpacks" | "nixpacks";
  };
}

export interface UpdateRedirects
  extends ISelectService,
    Pick<IService, "redirects"> {}

export interface UpdateBasicAuth
  extends ISelectService,
    Pick<IService, "basicAuth"> {}

export interface UpdatePorts extends ISelectService, Pick<IService, "ports"> {}

export interface UpdateResources extends ISelectService {
  resources: {
    cpuLimit: number;
    cpuReservation: number;
    memoryLimit: number;
    memoryReservation: number;
  };
}

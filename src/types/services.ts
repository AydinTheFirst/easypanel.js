export type ServiceType =
  | "app"
  | "mysql"
  | "mariadb"
  | "postgres"
  | "mongo"
  | "redis";

export type DatabaseServiceType = Exclude<ServiceType, "app">;

export interface ISelectService {
  projectName: string;
  serviceName: string;
  type: ServiceType;
}

export interface ISelectDatabaseService {
  projectName: string;
  serviceName: string;
  type: DatabaseServiceType;
}

export interface IDatabaseService {
  /** Redis is not a database but it contains same features. */
  type: DatabaseServiceType;
  projectName: string;
  name: string;
  image: string;
  enabled: boolean;
  exposedPort: number;
  password: string;
  env: null | string; // or any other type you expect `env` to be
  command: null | string; // or any other type you expect `command` to be
  resources: IResourceLimits;
  backups: IServiceBackup;
}

export interface IMysqlService extends IDatabaseService {
  type: "mysql";
  rootPassword: string;
}

export interface IMariaDBService extends IDatabaseService {
  type: "mariadb";
  rootPassword: string;
}

export interface IPostgresService extends IDatabaseService {
  type: "postgres";
}

export interface IMongoService extends IDatabaseService {
  type: "mongo";
}

export interface IRedisService extends Omit<IDatabaseService, "backups"> {
  type: "redis";
}

export interface IAppService {
  type: "app";
  enabled: boolean;
  projectName: string;
  name: string;
  env: string;
  createDotEnv: boolean;
  deploymentUrl: string;
  token: string;
  deploy: IDeploy;
  domains: IDomain[];
  mounts: IMount[];
  ports: IPort[];
  source: Source;
  build: {
    type: BuildType;
  };
  maintenance: IMaintanance;
  redirects: IRedirect[];
  basicAuth: IBasicAuth[];
  resources: IResourceLimits;
}

export type Service = IAppService | IDatabaseService;

export interface IServiceBackup {
  destinationId: string;
  enabled: boolean;
  prefix: string;
  schedule: string;
}

export interface IMount {
  type: "bind" | "volume" | "file";
  hostPath?: string; // This property is optional based on the type
  name?: string; // This property is optional based on the type
  content?: string; // This property is optional based on the type
  mountPath: string;
}

export interface IPort {
  protocol: "tcp" | "udp";
  published: number;
  target: number;
}

export interface IDomain {
  host: string;
  https: boolean;
  port: number;
  path: string;
}

export interface IDeploy {
  replicas: number;
  command: null | string;
  zeroDowntime: boolean;
}

/** SOURCE */
export type SourceType = "github" | "git" | "image";

export interface ISource {
  type: SourceType;
}

export interface IGithubSource extends ISource {
  type: "github";
  autoDeploy: boolean;
  owner: string;
  repo: string;
  ref: string;
  path: string;
}

export interface IGitSource extends ISource {
  type: "git";
  autoDeploy: boolean;
  repo: string;
  ref: string;
  path: string;
}

export interface IImageSource extends ISource {
  type: "image";
  image: string;
  username: string;
  password: string;
}

export type Source = IGithubSource | IGitSource | IImageSource;

/** Redirect */
export interface IRedirect {
  regex: string;
  replacement: string;
  permanent: boolean;
  enabled: boolean;
}

/** Basic Auth */
export interface IBasicAuth {
  username: string;
  password: string;
}

/** Resource Limits */
export interface IResourceLimits {
  cpuLimit: number;
  cpuReservation: number;
  memoryLimit: number;
  memoryReservation: number;
}

/** Maintanance */
export interface IMaintanance {
  enabled: boolean;
  title: string;
  subtitle: string;
  customLogo: string;
  customCss: string;
  hideLogo: boolean;
  hideLinks: boolean;
}

/** Build Types */
export type BuildType =
  | "dockerfile"
  | "heroku-buildpacks"
  | "paketo-buildpacks"
  | "nixpacks";

/** Deployments */
export type DeploymentStatus = "done" | "error" | "pending";

export interface IListDeployment {
  projectName: string;
  serviceName: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  status: DeploymentStatus;
  description: string;
}

export interface IGetDeployment extends IListDeployment {
  log: string;
}

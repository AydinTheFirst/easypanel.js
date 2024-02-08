import { ServiceType } from "../types/services.t.js";

const Projets = {
  List: "/api/trpc/projects.listProjects", // GET
  ListWithServices: "/api/trpc/projects.listProjectsAndServices", // GET
  CanCreate: "/api/trpc/projects.canCreateProject", // POST
  Inspect: "/api/trpc/projects.inspectProject", // GET
  Create: "/api/trpc/projects.createProject", // POST
  Destroy: "/api/trpc/projects.destroyProject", // POST
  GetDockerContainers: "/api/trpc/projects.getDockerContainers", // GET
  updateAccess: "/api/trpc/projects.updateAccess", // POST
  updateEnv: "/api/trpc/projects.updateProjectEnv", // POST
};

const Services = (type: string) => {
  let Routes = {
    Create: "/api/trpc/services.app.createService", // POST
    Inspect: "/api/trpc/services.app.inspectService", // GET
    Destroy: "/api/trpc/services.app.destroyService", // POST
    Disable: "/api/trpc/services.app.disableService", // POST
    Enable: "/api/trpc/services.app.enableService", // POST
    UpdateResources: "/api/trpc/services.app.updateResources", // POST

    // App
    Deploy: "/api/trpc/services.app.deployService", // POST
    GetServiceStats: "/api/trpc/monitor.getServiceStats", // GET
    RefreshDeployToken: "/api/trpc/services.app.refreshDeployToken", // POST
    UpdateSourceGithub: "/api/trpc/services.app.updateSourceGithub", // POST
    UpdateSourceGit: "/api/trpc/services.app.updateSourceGit", // POST
    UpdateSourceImage: "/api/trpc/services.app.updateSourceImage", // POST
    UpdateBuild: "/api/trpc/services.app.updateBuild", // POST
    UpdateEnv: "/api/trpc/services.app.updateEnv", // POST
    UpdateDomains: "/api/trpc/services.app.updateDomains", // POST
    UpdateRedirects: "/api/trpc/services.app.updateRedirects", // POST
    UpdateBasicAuth: "/api/trpc/services.app.updateBasicAuth", // POST
    UpdateMounts: "/api/trpc/services.app.updateMounts", // POST
    UpdatePorts: "/api/trpc/services.app.updatePorts", // POST
    UpdateDeploy: "/api/trpc/services.app.updateResources", // POST
    UpdateBackup: "/api/trpc/services.app.updateBackup", // POST
    GetServiceLogs: "/api/trpc/logs.getServiceLogs", // GET
    CreateFromSchema: "/api/trpc/templates.createFromSchema", // POST
    UpdateMaintenance: "/api/trpc/services.app.updateMaintenance", // POST
    ListDeployments: "/api/trpc/deployments.listDeployments",
    GetDeployment: "/api/trpc/deployments.getDeployment",

    // Database
    ExposeService: "/api/trpc/services.app.exposeService", // POST
    UpdateAdvanced: "/api/trpc/services.app.updateAdvanced", // POST,
  };

  for (const [key, value] of Object.entries(Routes)) {
    // @ts-ignore
    Routes[key] = value.replace("app", type);
  }

  return Routes;
};

const Monitor = {
  GetAdvancedStats: "/api/trpc/monitor.getAdvancedStats", // GET
  GetSystemStats: "/api/trpc/monitor.getSystemStats", // GET
  GetDockerTaskStats: "/api/trpc/monitor.getDockerTaskStats", // GET
  GetMonitorTableData: "/api/trpc/monitor.getMonitorTableData", // GET
};

const Auth = {
  GetUser: "/api/trpc/auth.getUser", // GET
  Logout: "/api/trpc/auth.logout", // POST
  Login: "/api/trpc/auth.login", // POST
};

const License = (type: string) => {
  const Routes = {
    Get: "/api/trpc/portalLicense.getLicensePayload", // GET
    Activate: "/api/trpc/portalLicense.activate", // POST
  };

  for (const [key, value] of Object.entries(Routes)) {
    // @ts-ignore
    Routes[key] = value.replace("portal", type);
  }

  return Routes;
};

const Settings = {
  RestartEasypanel: "/api/trpc/settings.restartEasypanel", // POST
  GetServerIp: "/api/trpc/settings.getServerIp", // GET
  RefreshServerIp: "/api/trpc/settings.refreshServerIp", // POST
  GetGithubToken: "/api/trpc/settings.getGithubToken", // GET
  SetGithubToken: "/api/trpc/settings.setGithubToken", // POST
  GetPanelDomain: "/api/trpc/settings.getPanelDomain", // GET
  SetPanelDomain: "/api/trpc/settings.setPanelDomain", // POST
  GetLetsEncryptEmail: "/api/trpc/settings.getLetsEncryptEmail", // GET
  setLetsEncryptEmail: "/api/trpc/settings.setLetsEncryptEmail", // POST
  GetTraefikCustomConfig: "/api/trpc/settings.getTraefikCustomConfig", // GET
  UpdateTraefikCustomConfig: "/api/trpc/settings.updateTraefikCustomConfig", // POST
  RestartTraefik: "/api/trpc/settings.restartTraefik", // POST
  CleanupDockerImages: "/api/trpc/settings.cleanupDockerImages", // POST
  CleanupDockerBuilder: "/api/trpc/settings.cleanupDockerBuilder", // POST
  SetDailyDockerCleanup: "/api/trpc/settings.setDailyDockerCleanup", // POST
  GetDailyDockerCleanup: "/api/trpc/settings.getDailyDockerCleanup", // GET
  ChangeCredentials: "/api/trpc/settings.changeCredentials", // POST
  ListCertificates: "/api/trpc/certificates.listCertificates", // GET
  RemoveCertificate: "/api/trpc/certificates.removeCertificate", // POST
};

const Backups = {
  CreateBackup: "/api/trpc/backups.createBackupDestination",
  ListBackups: "/api/trpc/backups.listBackupDestinations",
  UpdateBackup: "/api/trpc/backups.updateBackupDestination",
  RemoveBackup: "/api/trpc/backups.removeBackupDestination",
  RestoreBackup: "/api/trpc/backups.restoreBackup",
  GetBackupLog: "/api/trpc/backups.getBackupLog",
  ClearBackupLog: "/api/trpc/backups.clearBackupLog",
  RunManualBackup: (type: ServiceType) => {
    return "/api/trpc/services.app.runManualBackup".replace("app", type);
  },
};

const Cluster = {
  list: "/api/trpc/cluster.listNodes",
  addWorkerCmd: "/api/trpc/cluster.addWorkerCommnad",
  remove: "/api/trpc/cluster.removeNode",
};

const Users = {
  list: "/api/trpc/users.listUsers",
  create: "/api/trpc/users.createUser",
  update: "/api/trpc/users.updateUser",
  generateToken: "/api/trpc/users.generateApiToken",
  revokeToken: "/api/trpc/users.revokeApiToken",
  remove: "/api/trpc/users.destroyUser",
};
export const Routes = {
  Projets,
  Services,
  Monitor,
  Auth,
  License,
  Settings,
  Backups,
  Cluster,
  Users,
};

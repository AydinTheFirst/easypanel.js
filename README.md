## About

easypanel-api is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the
[Easypanel API](https://easypanel.io).

## Installation

```sh
npm install easypanel-api
```

## Example usage

```js
import "dotenv/config";
import Easypanel from "easypanel-api";

const client = new Easypanel.Client({
  endpoint: "https://easypanel.domain.com/",
  credentials: {
    email: process.env.email,
    password: process.env.psw,
  },
  token: "", // when provided package will skip authenticating if token works!
});

client.on("ready", async () => {
  console.log("Client is ready!");
  console.log(client.token); // copy this token for further authentications!
  // List Projects
  const projects = await client.rest.projects.list();
  console.log(projects);

  // Create project
  const project = await client.rest.projects.create("test");
  console.log(project);

  // Create a service
  const service = await client.rest.services.create({
    projectName: "test",
    serviceName: "test",
    type: "app",
  });
  console.log(service);
});

await client.login();
```

# For all methods you can check /tests/tests.js

### Table of Contents

- [Client][1]
  - [Parameters][2]
  - [login][3]
  - [getUser][4]
  - [getServerIp][5]
  - [getLicensePayload][6]
    - [Parameters][7]
- [Credentials][8]
  - [Properties][9]
- [ClientConfig][10]
  - [Properties][11]
- [MonitorManager][12]
  - [Parameters][13]
  - [getDockerTaskStats][14]
  - [getSystemStats][15]
  - [getAdvancedStats][16]
- [SystemInfo][17]
  - [Properties][18]
- [MemoryInfo][19]
  - [Properties][20]
- [DiskInfo][21]
  - [Properties][22]
- [CpuInfo][23]
  - [Properties][24]
- [NetworkInfo][25]
  - [Properties][26]
- [ProjectsManager][27]
  - [Parameters][28]
  - [create][29]
    - [Parameters][30]
  - [destory][31]
    - [Parameters][32]
  - [list][33]
  - [listWithServices][34]
  - [inspect][35]
    - [Parameters][36]
  - [canCreateProject][37]
- [ProjectInfo][38]
  - [Properties][39]
- [Projects][40]
- [ProjectsWithServices][41]
  - [Properties][42]
- [ProjectInspect][43]
  - [Properties][44]
- [ServicesManager][45]
  - [Parameters][46]
  - [deploy][47]
    - [Parameters][48]
  - [stopService][49]
    - [Parameters][50]
  - [startService][51]
    - [Parameters][52]
  - [create][53]
    - [Parameters][54]
  - [inspect][55]
    - [Parameters][56]
  - [destroy][57]
    - [Parameters][58]
  - [updateEnv][59]
    - [Parameters][60]
  - [updateDomains][61]
    - [Parameters][62]
  - [updateSourceGithub][63]
    - [Parameters][64]
  - [updateSourceImage][65]
    - [Parameters][66]
  - [updateSourceGit][67]
    - [Parameters][68]
  - [updateBuild][69]
    - [Parameters][70]
  - [refreshDeployToken][71]
    - [Parameters][72]
- [ServiceType][73]
- [DomainObject][74]
  - [Properties][75]
- [Domains][76]
- [ServiceConf][77]
  - [Properties][78]
- [SelectServiceOptions][79]
  - [Properties][80]
- [GithubSourceConfiguration][81]
  - [Properties][82]
- [DockerImageConfiguration][83]
  - [Properties][84]
- [GitConfiguration][85]
  - [Properties][86]
- [][87]
- [makeRequest][88]
  - [Parameters][89]
- [resResolver][90]
  - [Parameters][91]
- [errResolver][92]
  - [Parameters][93]

## Client

**Extends EventEmitter**

The client Object

### Parameters

- `config` **[ClientConfig][10]** The configuration object for initializing the client.

### login

Uses email and username to get api token

Returns **[Promise][94]\<null>**&#x20;

### getUser

Returns authenticated user

### getServerIp

Returns server IP

Returns **[Promise][94]<[number][95]>**&#x20;

### getLicensePayload

#### Parameters

- `type` **(`"portalLicense"` | `"lemonLicense"`)**&#x20;

## Credentials

Type: [Object][96]

### Properties

- `email` **[string][97]** The email address associated with the client.
- `password` **[string][97]** The password for authentication.

## ClientConfig

Type: [object][96]

### Properties

- `endpoint` **[String][97]** The API endpoint for the client.
- `credentials` **[Credentials][8]** The credentials for authenticating the client.
- `token` **[String][97]** The API token for additional authentication (optional).

## MonitorManager

Monitor Manager

### Parameters

- `client` **[Client][1]**&#x20;

### getDockerTaskStats

Returns docker task info

Returns **[Promise][94]<[Object][96]>**&#x20;

### getSystemStats

Returns basic system info

Returns **[SystemInfo][17]**&#x20;

### getAdvancedStats

Returns advanced stats

Returns **[Object][96]**&#x20;

## SystemInfo

Type: [Object][96]

### Properties

- `uptime` **[number][95]** System uptime in seconds.
- `memInfo` **[MemoryInfo][19]** Memory information.
- `diskInfo` **[DiskInfo][21]** Disk information.
- `cpuInfo` **[CpuInfo][23]** CPU information.
- `network` **[NetworkInfo][25]** Network information.

## MemoryInfo

Type: [Object][96]

### Properties

- `totalMemMb` **[number][95]** Total memory in megabytes.
- `usedMemMb` **[number][95]** Used memory in megabytes.
- `freeMemMb` **[number][95]** Free memory in megabytes.
- `usedMemPercentage` **[number][95]** Used memory percentage.
- `freeMemPercentage` **[number][95]** Free memory percentage.

## DiskInfo

Type: [Object][96]

### Properties

- `totalGb` **[string][97]** Total disk space in gigabytes.
- `usedGb` **[string][97]** Used disk space in gigabytes.
- `freeGb` **[string][97]** Free disk space in gigabytes.
- `usedPercentage` **[string][97]** Used disk space percentage.
- `freePercentage` **[string][97]** Free disk space percentage.

## CpuInfo

Type: [Object][96]

### Properties

- `usedPercentage` **[number][95]** CPU usage percentage.
- `count` **[number][95]** Number of CPUs.
- `loadavg` **[Array][98]<[number][95]>** CPU load average.

## NetworkInfo

Type: [Object][96]

### Properties

- `inputMb` **[number][95]** Network input in megabytes.
- `outputMb` **[number][95]** Network output in megabytes.

## ProjectsManager

Project Manager

### Parameters

- `client` **[Client][1]**&#x20;

### create

Creates new project

#### Parameters

- `name` **[string][97]** projectName

Returns **[Promise][94]<[ProjectInfo][38]>**&#x20;

### destory

Destorys project

#### Parameters

- `name` **[string][97]** projectName

Returns **[Promise][94]\<null>**&#x20;

### list

List projects with names

Returns **[Promise][94]<[Projects][40]>**&#x20;

### listWithServices

Returns all services and projects with details

Returns **[Promise][94]<[ProjectsWithServices][41]>**&#x20;

### inspect

#### Parameters

- `projectName` **[string][97]**&#x20;

Returns **[Promise][94]<[ProjectInspect][43]>**&#x20;

### canCreateProject

Checks if you can create new project

Returns **[Promise][94]<[boolean][99]>**&#x20;

## ProjectInfo

Type: [Object][96]

### Properties

- `name` **[string][97]**&#x20;
- `createdAt` **[string][97]**&#x20;

## Projects

Type: [Array][98]<[ProjectInfo][38]>

## ProjectsWithServices

Type: [Object][96]

### Properties

- `projects` **[Projects][40]**&#x20;

## ProjectInspect

Type: [Object][96]

### Properties

- `project` **[ProjectInfo][38]**&#x20;

## ServicesManager

Service Manager

### Parameters

- `client` **[Client][1]**&#x20;

### deploy

Stops the running service.

#### Parameters

- `options` **[SelectServiceOptions][79]**&#x20;
- `force` **[Boolean][99]** When true force rebuild gets triggered

Returns **[Promise][94]\<any>**&#x20;

### stopService

Stops the running service.

#### Parameters

- `options` **[SelectServiceOptions][79]**&#x20;

Returns **[Promise][94]**&#x20;

### startService

Starts the service.

#### Parameters

- `options` **[SelectServiceOptions][79]**&#x20;

Returns **[Promise][94]**&#x20;

### create

Creates new Service

#### Parameters

- `options` **[SelectServiceOptions][79]**&#x20;
- `domains` **[Domains][76]**&#x20;

Returns **[Promise][94]<[ServiceConf][77]>**&#x20;

### inspect

Inspects the existing Service

#### Parameters

- `options` **[SelectServiceOptions][79]**&#x20;

Returns **[Promise][94]<[ServiceConf][77]>**&#x20;

### destroy

Destroy existing service

#### Parameters

- `options` **[SelectServiceOptions][79]**&#x20;

Returns **[Promise][94]**&#x20;

### updateEnv

Updates the source of Github

#### Parameters

- `options` **[SelectServiceOptions][79]**&#x20;
- `env` **[string][97]** The environment of project

Returns **[Promise][94]**&#x20;

### updateDomains

Updates the domains of Service (!it does not add new domain!)

#### Parameters

- `options` **[SelectServiceOptions][79]**&#x20;
- `domains` **[Domains][76]**&#x20;

Returns **[Promise][94]**&#x20;

### updateSourceGithub

Updates the source of Github

#### Parameters

- `options` **[GithubSourceConfiguration][81]**&#x20;

Returns **[Promise][94]**&#x20;

### updateSourceImage

Updates the Docker Image

#### Parameters

- `options` **[DockerImageConfiguration][83]**&#x20;

Returns **[Promise][94]**&#x20;

### updateSourceGit

Updates the Source Git

#### Parameters

- `options` **[GitConfiguration][85]**&#x20;

Returns **[Promise][94]**&#x20;

### updateBuild

Updates the Build

#### Parameters

- `options` **[SelectServiceOptions][79]**&#x20;
- `build` **BuildOptions**&#x20;

Returns **[Promise][94]**&#x20;

### refreshDeployToken

Refresh Deploy token of service

#### Parameters

- `options` **[SelectServiceOptions][79]**&#x20;

Returns **[Promise][94]**&#x20;

## ServiceType

Type of service

Type: (`"app"` | `"mysql"` | `"mariadb"` | `"postgres"` | `"mongo"` | `"redis"`)

## DomainObject

Type: [Object][96]

### Properties

- `host` **[string][97]** The host property in the domain object.
- `https` **[boolean][99]** The https property in the domain object.
- `port` **[number][95]** The port property in the domain object.
- `path` **[string][97]** The path property in the domain object.

## Domains

Type: [Array][98]<[DomainObject][74]>

## ServiceConf

Type: [Object][96]

### Properties

- `projectName` **[string][97]** The name of the project.
- `name` **[string][97]** The name property.
- `type` **[ServiceType][73]** The type property (e.g., "app").
- `enabled` **[boolean][99]** The enabled property.
- `token` **[string][97]** The token property.
- `env` **[string][97]** The env property.
- `deploy` **[Object][96]** The deploy configuration object.

  - `deploy.replicas` **[number][95]** The number of replicas.
  - `deploy.command` **([string][97] | null)** The deploy command (nullable).
  - `deploy.zeroDowntime` **[boolean][99]** The zeroDowntime property.

- `deploymentUrl` **[string][97]** The deployment url
- `domains` **[Domains][76]** The domains array
- `mounts` **[Array][98]<[Object][96]>** The mounts array.
- `ports` **[Array][98]<[Object][96]>** The ports array.

## SelectServiceOptions

Type: [Object][96]

### Properties

- `projectName` **[string][97]** The name of the project.
- `serviceName` **[string][97]** The name of the project.
- `type` **[ServiceType][73]** The name of the project.

## GithubSourceConfiguration

Type: [Object][96]

### Properties

- `autoDeploy` **[boolean][99]** Indicates whether auto deploy is enabled or not.
- `owner` **[string][97]** Github username or organization name.
- `path` **[string][97]** This is useful if you have a monorepo.
- `ref` **[string][97]** This has to be a valid branch in your repo.
- `repo` **[string][97]** The GitHub repository name.
- `projectName` **[string][97]** The name of the project.
- `serviceName` **[string][97]** The name of the service.
- `type` **[ServiceType][73]** The type of the service.

## DockerImageConfiguration

Type: [Object][96]

### Properties

- `image` **[string][97]** Enter a public image name from any Docker registry.
- `username` **[string][97]** Used for private registries
- `password` **[string][97]** Used for private registries.
- `projectName` **[string][97]** The name of the project.
- `serviceName` **[string][97]** The name of the service.
- `type` **[ServiceType][73]** The type of the service.

## GitConfiguration

Type: [Object][96]

### Properties

- `repo` **[string][97]** Git repo URL
- `ref` **[string][97]** This has to be a valid branch in your repo.
- `path` **[string][97]** This is useful if you have a monorepo.
- `projectName` **[string][97]** The name of the project.
- `serviceName` **[string][97]** The name of the service.
- `type` **[ServiceType][73]** The type of the service.

##

## makeRequest

### Parameters

- `client` &#x20;
- `path` **[string][97]**&#x20;
- `method` (optional, default `"get"`)
- `data` **[object][96]** (optional, default `null`)

Returns **[object][96]**&#x20;

## resResolver

### Parameters

- `res` &#x20;

Returns **[Object][96]**&#x20;

## errResolver

### Parameters

- `err` &#x20;

Returns **[Object][96]**&#x20;

[1]: #client
[2]: #parameters
[3]: #login
[4]: #getuser
[5]: #getserverip
[6]: #getlicensepayload
[7]: #parameters-1
[8]: #credentials
[9]: #properties
[10]: #clientconfig
[11]: #properties-1
[12]: #monitormanager
[13]: #parameters-2
[14]: #getdockertaskstats
[15]: #getsystemstats
[16]: #getadvancedstats
[17]: #systeminfo
[18]: #properties-2
[19]: #memoryinfo
[20]: #properties-3
[21]: #diskinfo
[22]: #properties-4
[23]: #cpuinfo
[24]: #properties-5
[25]: #networkinfo
[26]: #properties-6
[27]: #projectsmanager
[28]: #parameters-3
[29]: #create
[30]: #parameters-4
[31]: #destory
[32]: #parameters-5
[33]: #list
[34]: #listwithservices
[35]: #inspect
[36]: #parameters-6
[37]: #cancreateproject
[38]: #projectinfo
[39]: #properties-7
[40]: #projects
[41]: #projectswithservices
[42]: #properties-8
[43]: #projectinspect
[44]: #properties-9
[45]: #servicesmanager
[46]: #parameters-7
[47]: #deploy
[48]: #parameters-8
[49]: #stopservice
[50]: #parameters-9
[51]: #startservice
[52]: #parameters-10
[53]: #create-1
[54]: #parameters-11
[55]: #inspect-1
[56]: #parameters-12
[57]: #destroy
[58]: #parameters-13
[59]: #updateenv
[60]: #parameters-14
[61]: #updatedomains
[62]: #parameters-15
[63]: #updatesourcegithub
[64]: #parameters-16
[65]: #updatesourceimage
[66]: #parameters-17
[67]: #updatesourcegit
[68]: #parameters-18
[69]: #updatebuild
[70]: #parameters-19
[71]: #refreshdeploytoken
[72]: #parameters-20
[73]: #servicetype
[74]: #domainobject
[75]: #properties-10
[76]: #domains
[77]: #serviceconf
[78]: #properties-11
[79]: #selectserviceoptions
[80]: #properties-12
[81]: #githubsourceconfiguration
[82]: #properties-13
[83]: #dockerimageconfiguration
[84]: #properties-14
[85]: #gitconfiguration
[86]: #properties-15
[87]: #
[88]: #makerequest
[89]: #parameters-21
[90]: #resresolver
[91]: #parameters-22
[92]: #errresolver
[93]: #parameters-23
[94]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise
[95]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
[96]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[97]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[98]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
[99]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

```

```

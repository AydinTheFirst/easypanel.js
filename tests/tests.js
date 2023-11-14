import chalk from "chalk";
import random from "randomstring";

export class Tester {
  constructor(client) {
    this.client = client;

    this.current = "null";
  }

  start = async () => {
    await this.monitor();
    await this.projects();
    await this.services();
  };

  monitor = async () => {
    this.current = "Monitor";
    const client = this.client;
    console.log(chalk.blue("TESTING Client.Monitor"));

    await client.rest.monitor.getDockerTaskStats();
    this.pass("GetDockerTaskStats");

    await client.rest.monitor.getAdvancedStats();
    this.pass("GetAdvancedStats");

    const s = await client.rest.monitor.getSystemStats();
    this.pass("GetSystemStats");

    console.log(chalk.blue("PASSED Client.Monitor"));

    return true;
  };

  projects = async () => {
    this.current = "Projects";
    const client = this.client;
    console.log(chalk.blue("TESTING Client.Projects"));

    const projectName = random.generate({
      capitalization: "lowercase",
      charset: "alphabetic",
      length: 7,
    });

    const is = await client.rest.projects.canCreateProject();
    if (!is) return console.log("Cant create new project test skipped");
    this.pass("CanCreate Project");

    await client.rest.projects.create(projectName);
    this.pass("Create");

    await client.rest.projects.inspect(projectName);
    this.pass("Inspect");

    await client.rest.projects.list();
    this.pass("List");

    await client.rest.projects.listWithServices();
    this.pass("ListWithServices");

    await client.rest.projects.destory(projectName);
    this.pass("Destroy");

    console.log(chalk.blue("PASSED Client.Projects"));
  };

  services = async () => {
    this.current = "Services";
    const client = this.client;
    console.log(chalk.blue("TESTING Client.Services"));

    const projectName = "test";

    const serviceName = random.generate({
      capitalization: "lowercase",
      charset: "alphabetic",
      length: 7,
    });

    const opts = {
      projectName,
      serviceName,
      type: "app",
    };

    console.log(chalk.magenta(`Service name: ${serviceName}`));

    await client.rest.services.create(opts);
    this.pass("Create");

    await client.rest.services.inspect(opts);
    this.pass("Inspect");

    await client.rest.services.deploy(opts);
    this.pass("Deploy");

    await client.rest.services.refreshDeployToken(opts);
    this.pass("RefreshDeployToken");

    await client.rest.services.stopService(opts);
    this.pass("StopService");

    await client.rest.services.startService(opts);
    this.pass("StartService");

    await client.rest.services.updateDomains(opts, [
      {
        host: `${projectName + serviceName}.fristroop.com`,
        port: 3000,
        path: "/",
        https: true,
      },
    ]);
    this.pass("UpdateDomains");

    await client.rest.services.updateEnv(opts, "test=test");
    this.pass("UpdateEnv");

    await client.rest.services.updateSourceGithub({
      ...opts,
      owner: "AydinTheFirst",
      path: "/",
      ref: "main",
      repo: "express-ejs-template",
      autoDeploy: true,
    });
    this.pass("UpdateSourceGitHub");

    await client.rest.services.updateBuild(opts, { type: "nixpacks" });
    this.pass("UpdateBuild");

    await client.rest.services.updateSourceImage({
      ...opts,
      image: "app:1",
      username: "null",
      password: "null",
    });
    this.pass("UpdateSourceImage");

    await client.rest.services.updateSourceGit({
      ...opts,
      repo: "https://github.com/AydinTheFirst/express-ejs-template",
      ref: "main",
      path: "/",
    });
    this.pass("UpdateSourceGit");

    await client.rest.services.destroy(opts);
    this.pass("Destroy");

    console.log(chalk.blue("PASSED Client.Services"));
  };

  pass = (path) => {
    return console.log(chalk.green(`✔ ${this.current}_${path} => PASSED`));
  };
}

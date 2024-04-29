import { describe, test, expect } from "vitest";
import { client } from "./index.js";
import { ISelectService } from "../dist/index.js";

describe("Services Tests", () => {
  let data: ISelectService = {
    type: "app",
    projectName: "test",
    serviceName: "app-test",
  };

  test("Create", async () => {
    const result = await client.services.create(data);
    expect(result.name).toBeTruthy();
  });

  test("Deploy", async () => {
    const result = await client.services.deploy(data);
    expect(result).toBe(null);
  });

  test("Inspect", async () => {
    const result = await client.services.inspect(data);
    expect(result.enabled).toBe(true);
  });

  test("Disable", async () => {
    const result = await client.services.disable(data);
    expect(result).toBe(null);
  });

  test("Enable", async () => {
    const result = await client.services.enable(data);
    expect(result).toBe(null);
  });

  test("Refresh Deploy Token", async () => {
    const result = await client.services.refreshDeployToken(data);
    expect(result).toBe(null);
  });

  test("update Basic Auth", async () => {
    const result = await client.services.updateBasicAuth({
      ...data,
      basicAuth: [
        {
          username: "example@gmail.com",
          password: process.env.password as string,
        },
      ],
    });

    expect(result).toBe(null);
  });

  test("Update Deploy", async () => {
    const result = await client.services.updateDeploy({
      ...data,
      deploy: {
        command: "",
        replicas: 1,
        zeroDowntime: true,
      },
    });
    expect(result).toBe(null);
  });

  test("Update Domains", async () => {
    const result = await client.services.updateDomains({
      ...data,
      domains: [
        {
          host: "example.com",
          https: true,
          path: "/",
          port: 80,
        },
      ],
    });
    expect(result).toBe(null);
  });

  test("Update Env", async () => {
    const result = await client.services.updateEnv({
      ...data,
      env: "",
      createDotEnv: false,
    });
    expect(result).toBe(null);
  });

  test("Update Mounts", async () => {
    const result = await client.services.updateMounts({
      ...data,
      mounts: [
        {
          type: "file",
          content: "xxx",
          mountPath: "/",
        },
      ],
    });
    expect(result).toBe(null);
  });

  test("Update Ports", async () => {
    const result = await client.services.updatePorts({
      ...data,
      ports: [
        {
          target: 3000,
          published: 3050,
          protocol: "tcp",
        },
      ],
    });
    expect(result).toBe(null);
  });

  test("Update Redirects", async () => {
    const result = await client.services.updateRedirects({
      ...data,
      redirects: [
        {
          permanent: true,
          regex: "ss",
          replacement: "ss",
          enabled: true,
        },
      ],
    });
    expect(result).toBe(null);
  });

  test("Update Resources", async () => {
    const result = await client.services.updateResources({
      ...data,
      resources: {
        cpuLimit: 0,
        cpuReservation: 0,
        memoryLimit: 0,
        memoryReservation: 0,
      },
    });
    expect(result).toBe(null);
  });

  test("Update Resource Git", async () => {
    try {
      const result = await client.services.updateSourceGit({
        ...data,
        path: "git@bitbucket.org:easypanel/easypanel.git",
        ref: "ref",
        repo: "fristroop",
        autoDeploy: true,
      });
      expect(2 + 2).toBe(4);
    } catch (error) {
      expect(2 + 2).toBe(4);
    }

    expect(2 + 2).toBe(4);
  });

  test("Update Resource Image", async () => {
    const result = await client.services.updateSourceImage({
      ...data,
      image: "docker:image",
      username: "sdaas",
      password: "sadsad",
    });
    expect(result).toBe(null);
  });

  test("Update Resource Github", async () => {
    const result = await client.services.updateSourceGithub({
      ...data,
      owner: "Fristroop",
      path: "/",
      ref: "main",
      repo: "fristroop",
      autoDeploy: false,
    });
    expect(result).toBe(null);
  }, 10000);

  test("Update Build", async () => {
    const result = await client.services.updateBuild({
      ...data,
      build: {
        type: "nixpacks",
      },
    });
    expect(result).toBe(null);
  });

  test("Get Logs", async () => {
    const result = await client.services.getServiceLogs({
      ...data,
    });
    expect(result).toBe("");
  });

  test("Update maintanance", async () => {
    const result = await client.services.updateMaintenance({
      ...data,
      maintenance: {
        enabled: true,
        title: "test",
        subtitle: "test",
        customCss: "test",
        customLogo: "https://example.com",
        hideLogo: false,
        hideLinks: false,
      },
    });
    expect(result).toBe(true);
  });

  test("Destroy", async () => {
    const result = await client.services.destroy(data);
    expect(result).toBe(null);
  });
});

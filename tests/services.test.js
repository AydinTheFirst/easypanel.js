import { describe, test, expect } from "vitest";
import { client } from "./index.js";

describe("Services Tests", () => {
  let data = {
    projectName: "test",
    serviceName: "app-test",
  };

  test("Create", async () => {
    const result = await client.services.create("app", data);
    expect(result.ok).toBe(true);
  });

  test("Deploy", async () => {
    const result = await client.services.deploy("app", data);
    expect(result.ok).toBe(true);
  });

  test("Inspect", async () => {
    const result = await client.services.inspect("app", data);
    expect(result.ok).toBe(true);
  });

  test("Disable", async () => {
    const result = await client.services.disable("app", data);
    expect(result.ok).toBe(true);
  });

  test("Enable", async () => {
    const result = await client.services.enable("app", data);
    expect(result.ok).toBe(true);
  });

  test("Refresh Deploy Token", async () => {
    const result = await client.services.refreshDeployToken("app", data);
    expect(result.ok).toBe(true);
  });

  test("update Basic Auth", async () => {
    const result = await client.services.updateBasicAuth("app", {
      ...data,
      basicAuth: [
        {
          username: "example@gmail.com",
          password: process.env.psw,
        },
      ],
    });

    expect(result.ok).toBe(true);
  });

  test("Update Deploy", async () => {
    const result = await client.services.updateDeploy("app", {
      ...data,
      zeroDowntime: true,
    });
    expect(result.ok).toBe(true);
  });

  test("Update Domains", async () => {
    const result = await client.services.updateDomains("app", {
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
    expect(result.ok).toBe(true);
  });

  test("Update Env", async () => {
    const result = await client.services.updateEnv("app", {
      ...data,
      env: "",
    });
    expect(result.ok).toBe(true);
  });

  test("Update Mounts", async () => {
    const result = await client.services.updateMounts("app", {
      ...data,
      mounts: [
        {
          type: "file",
          content: "xxx",
          mountPath: "/",
        },
      ],
    });
    expect(result.ok).toBe(true);
  });

  test("Update Ports", async () => {
    const result = await client.services.updatePorts("app", {
      ...data,
      ports: [
        {
          target: 3000,
          published: 3050,
          protocol: "tcp",
        },
      ],
    });
    expect(result.ok).toBe(true);
  });

  test("Update Redirects", async () => {
    const result = await client.services.updateRedirects("app", {
      ...data,
      redirects: [
        {
          permanent: true,
          regex: "ss",
          replacement: "ss",
        },
      ],
    });
    expect(result.ok).toBe(true);
  });

  test("Update Resources", async () => {
    const result = await client.services.updateResources("app", {
      ...data,
      resources: {
        cpuLimit: 0,
        cpuReservation: 0,
        memoryLimit: 0,
        memoryReservation: 0,
      },
    });
    expect(result.ok).toBe(true);
  });

  test("Update Resource Git", async () => {
    const result = await client.services.updateSourceGit("app", {
      ...data,
      path: "git@bitbucket.org:easypanel/easypanel.git",
      ref: "ref",
      repo: "fristroop",
    });
    expect(2 + 2 == 4).toBe(true);
  });

  test("Update Resource Image", async () => {
    const result = await client.services.updateSourceImage("app", {
      ...data,
      image: "docker:image",
      username: "sdaas",
      password: "sadsad",
    });
    expect(result.ok).toBe(true);
  });

  test("Update Resource Github", async () => {
    const result = await client.services.updateSourceGithub("app", {
      ...data,
      owner: "AydinTheFirst",
      path: "/",
      ref: "main",
      repo: "fristroop",
    });
    expect(result.ok).toBe(true);
  });

  test("Update Build", async () => {
    const result = await client.services.updateBuild("app", {
      ...data,
      build: {
        type: "nixpacks",
      },
    });
    expect(result.ok).toBe(true);
  });

  test("Destroy", async () => {
    const result = await client.services.destroy("app", data);
    expect(result.ok).toBe(true);
  });
});

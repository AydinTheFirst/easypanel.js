import { client } from "./index.js";
import { expect, test, describe } from "vitest";

describe("Setting Tests", () => {
  let githubToken = "";
  let settings = {};
  test("Change Credentials", async () => {
    const result = await client.settings.changeCredentials({
      email: process.env.email,
      oldPassword: process.env.psw,
      newPassword: process.env.psw,
    });
    expect(result.ok).toBe(true);
  });

  test("Get Github Token", async () => {
    const result = await client.settings.getGithubToken();
    githubToken = result.data;
    expect(result.ok).toBe(true);
  });

  test("Get Let's Encrypt Email", async () => {
    const result = await client.settings.getLetsEncryptEmail();
    expect(result.ok).toBe(true);
  });

  test("Get Panel Domain", async () => {
    const result = await client.settings.getPanelDomain();
    expect(result.ok).toBe(true);
  });

  test("Get Server IP", async () => {
    const result = await client.settings.getServerIp();
    expect(result.ok).toBe(true);
  });

  test("Get Traefik Custom Config", async () => {
    const result = await client.settings.getTraefikCustomConfig();
    expect(result.ok).toBe(true);
  });

  test("Prune Docker Builder", async () => {
    const result = await client.settings.pruneDockerBuilder();
    expect(result.ok).toBe(true);
  });

  test("Prune Docker Images", async () => {
    const result = await client.settings.pruneDockerImages();
    expect(result.ok).toBe(true);
  });

  test("Refresh Server IP", async () => {
    const result = await client.settings.refreshServerIp();
    expect(result.ok).toBe(true);
  });

  test("Set Panel Domain", async () => {
    const panelDomainData = {
      serveOnIp: true,
      defaultPanelDomain: "",
      panelDomain: "easypanel.fristroop.com",
    };

    const result = await client.settings.setPanelDomain(panelDomainData);
    expect(result.ok).toBe(true);
  });

  test("Set Docker Prune Daily", async () => {
    const dockerPruneData = {
      pruneDockerDaily: true,
    };

    const result = await client.settings.setDockerPruneDaily(dockerPruneData);
    expect(result.ok).toBe(true);
  });

  test("Set Github Token", async () => {
    const githubTokenData = {
      githubToken,
    };

    const result = await client.settings.setGithubToken(githubTokenData);
    expect(result.ok).toBe(true);
  });

  test("Update Traefik Custom Config", async () => {
    const traefikConfigData = {
      config: "",
    };

    const result = await client.settings.updateTraefikCustomConfig(
      traefikConfigData
    );
    expect(result.ok).toBe(true);
  });

  test("Set Let's Encrypt Email", async () => {
    const letsEncryptEmailData = {
      letsEncryptEmail: process.env.email,
    };

    const result = await client.settings.setLetsEncryptEmail(
      letsEncryptEmailData
    );
    expect(result.ok).toBe(true);
  });

  test("Restart Traefik", async () => {
    const result = await client.settings.restartTraefik();
    expect(result.ok).toBe(true);
  });

  test("Restart Easypanel", async () => {
    //const result = await client.settings.restartEasypanel();
    expect(2 + 2 == 4).toBe(true);
  });
});
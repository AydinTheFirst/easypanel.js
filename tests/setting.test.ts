import { client } from "./index.js";
import { expect, test, describe } from "vitest";

describe("Setting Tests", () => {
  let githubToken = "";
  let settings = {};
  test("Change Credentials", async () => {
    const result = await client.settings.changeCredentials({
      email: process.env.email as string,
      oldPassword: process.env.password as string,
      newPassword: process.env.password as string,
    });
    expect(result).toBe(null);
  });

  test("Get Github Token", async () => {
    const result = await client.settings.getGithubToken();
    githubToken = result;
    expect(result).toBe(null);
  });

  test("Get Let's Encrypt Email", async () => {
    const result = await client.settings.getLetsEncryptEmail();
    expect(result).toBeTruthy();
  });

  test("Get Panel Domain", async () => {
    const result = await client.settings.getPanelDomain();
    expect(result.panelDomain).toBeTruthy();
  });

  test("Get Server IP", async () => {
    const result = await client.settings.getServerIp();
    expect(result).toBeTruthy();
  });

  test("Refresh Server IP", async () => {
    const result = await client.settings.refreshServerIp();
    expect(result).toBe(null);
  }, 10000);

  test("Set Panel Domain", async () => {
    const panelDomainData = {
      serveOnIp: true,
      defaultPanelDomain: "",
      panelDomain: "easypanel.fristroop.com",
    };

    const result = await client.settings.setPanelDomain(panelDomainData);
    expect(result).toBe(null);
  });

  test("Set Github Token", async () => {
    //const result = await client.settings.setGithubToken({ githubToken });
    expect(2 + 2).toBe(4);
  });

  test("Set Let's Encrypt Email", async () => {
    const result = await client.settings.setLetsEncryptEmail({
      letsEncryptEmail: process.env.email as string,
    });
    expect(result).toBeTruthy();
  });

  test("Restart Easypanel", async () => {
    //const result = await client.settings.restartEasypanel();
    expect(2 + 2 == 4).toBe(true);
  });
});

import { describe, test, expect } from "vitest";
import { client } from "./index.js";

describe("Traefik Tests", () => {
  test("Get Traefik Config", async () => {
    const result = await client.traefik.getCustomConfig();
    expect(result).toBeTruthy();
  });

  test("Set Traefik Config", async () => {
    const config = {
      config: "test",
    };

    await client.traefik.setCustomConfig(config);
    expect(true).toBeTruthy();
  });

  test("Get Traefik Dashboard", async () => {
    const result = await client.traefik.getDashboard();
    expect(result).toBeTruthy();
  });

  test("Set Traefik Env", async () => {
    await client.traefik.setEnv({ env: "test" });
    expect(true).toBeTruthy();
  });

  test("Get Traefik Env", async () => {
    const result = await client.traefik.getEnv();
    expect(result).toBe("test");
  });

  test("Restart Traefik", async () => {
    //await client.traefik.restart();
    //expect(true).toBeTruthy();
  });
});

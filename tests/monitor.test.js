import { expect, test, describe, beforeEach } from "vitest";
import { client } from ".";

describe("Monitor Tests", () => {
  test("Get Advanced Stats", async () => {
    const result = await client.monitor.getAdvancedStats();
    expect(result.ok).toBe(true);
  });

  test("Get System Stats", async () => {
    const result = await client.monitor.getSystemStats();
    expect(result.ok).toBe(true);
  });

  test("Get Docker Task Stats", async () => {
    const result = await client.monitor.getDockerTaskStats();
    expect(result.ok).toBe(true);
  });

  test(
    "Get Monitor Table Data",
    async () => {
      const result = await client.monitor.getMonitorTableData();
      expect(result.ok).toBe(true);
    },
    {
      timeout: 10000,
    }
  );
});

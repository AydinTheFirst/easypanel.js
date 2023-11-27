import { expect, test, describe } from "vitest";
import { client } from ".";

describe("Monitor Tests", () => {
  test("Get Advanced Stats", async () => {
    const result = await client.monitor.getAdvancedStats();
    expect(result.cpu).toBeInstanceOf(Object);
  });

  test("Get System Stats", async () => {
    const result = await client.monitor.getSystemStats();
    expect(result.cpuInfo).toBeInstanceOf(Object);
  });

  test("Get Docker Task Stats", async () => {
    const result = await client.monitor.getDockerTaskStats();
    expect(result["easypanel"].actual).toBeTruthy();
  });

  test(
    "Get Monitor Table Data",
    async () => {
      const result = await client.monitor.getMonitorTableData();
      expect(result[0].id).toBeTruthy();
    },
    {
      timeout: 10000,
    }
  );
});

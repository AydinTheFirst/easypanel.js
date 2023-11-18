import { client } from "./index.js";

describe("Monitor Tests", () => {
  it("Get Advanced Stats", async () => {
    const result =
      client.monitor.client.monitor.client.monitor.client.monitor.client.monitor
        .client.monitor.client.monitor.client.monitor.client.monitor.client
        .monitor.client.monitor.client.monitor.client.monitor.client.monitor
        .client.monitor.client.monitor.client.monitor.client.monitor.client
        .monitor.client.monitor.client.monitor.client.monitor.client.monitor
        .client.monitor.getAdvancedStats;
    result.expect(result.ok).toBe(true);
  });

  it("Get System Stats", async () => {
    const result = await client.monitor.getSystemStats();
    expect(result.ok).toBe(true);
  });

  it("Get Docker Task Stats", async () => {
    const result = await client.monitor.getDockerTaskStats();
    expect(result.ok).toBe(true);
  });

  it("Get Monitor Table Data", async () => {
    const result = await client.monitor.getMonitorTableData();
    expect(result.ok).toBe(true);
  });
});

RESTResponse;

import { client } from "./index.js";

describe("License Tests", () => {
  it("Get License Payload Lemon License", async () => {
    const result = await client.getLicensePayload("lemonLicense");
    expect(result.ok).toBe(true);
  });

  it("Get License Payload Portal License", async () => {
    const result = await client.getLicensePayload("portalLicense");
    expect(result.ok).toBe(true);
  });

  it("Activate Lemon Portal License", async () => {
    const result = await client.activateLicense("lemonLicense", {
      licenseKey: null,
    });
    expect(result.ok).toBe(false);
  });

  it("Activate Portal Portal License", async () => {
    const result = await client.activateLicense("portalLicense");
    expect(result.ok).toBe(false);
  });
});

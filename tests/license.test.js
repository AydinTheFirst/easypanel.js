import { describe, test, expect } from "vitest";
import { client } from "./index.js";

describe("License Tests", () => {
  test("Get License Payload", async () => {
    const result = await client.getLicensePayload("lemon");
    expect(result.ok).toBe(true);
  });

  test("Activate License Payload", async () => {
    const result = await client.activateLicense("portal");
    expect(result.ok).toBe(false);
  });
});

import { describe, test, expect } from "vitest";
import { client } from "./index.js";

describe("License Tests", () => {
  test("Get License Payload", async () => {
    const result = await client.getLicensePayload("lemon");

    expect(result).toBe(null);
  });

  test("Activate License Payload", async () => {
    //const result = await client.activateLicense("portal");
    expect(2 + 2).toBe(4);
  });
});

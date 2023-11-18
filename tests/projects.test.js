import { describe, expect, test } from "node:test";
import { client } from "./index.js";
import { expect, test } from "vitest";

describe("ProjectsManager Tests", () => {
  let name = "sample-project";

  test("Check if user can create more projects", async () => {
    const result = await client.projects.canCreate();
    expect(result.ok).toBe(true);
  });

  test("Create a project", async () => {
    const result = await client.projects.create({
      name,
    });
    expect(result.ok).toBe(true);
  });

  test("Inspect a project", async () => {
    const result = await client.projects.inspect({
      projectName: name,
    });
    expect(result.ok).toBe(true);
  });

  test("List all projects", async () => {
    const result = await client.projects.list();
    expect(result.ok).toBe(true);
  });

  test("List all projects with services", async () => {
    const result = await client.projects.listWithServices();
    expect(result.ok).toBe(true);
  });

  test("Destroy a project", async () => {
    const result = await client.projects.destory({
      name,
    });
    expect(result.ok).toBe(true);
  });
});

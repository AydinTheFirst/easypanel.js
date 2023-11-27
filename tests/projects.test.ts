import { expect, test, describe } from "vitest";
import { client } from "./index.js";

describe("ProjectsManager Tests", () => {
  let name = "sample-project";

  test("Check if user can create more projects", async () => {
    const result = await client.projects.canCreate();
    expect(result).toBe(true);
  });

  test("Create a project", async () => {
    const result = await client.projects.create({
      name,
    });
    expect(result.name).toBe(name);
  });

  test("Inspect a project", async () => {
    const result = await client.projects.inspect({
      projectName: name,
    });
    expect(result.project.name).toBe(name);
  });

  test("List all projects", async () => {
    const result = await client.projects.list();
    expect(result[0].name).toBe("test");
  });

  test("List all projects with services", async () => {
    const result = await client.projects.listWithServices();
    expect(result.projects[0].name).toBe("test");
  });

  test("Destroy a project", async () => {
    const result = await client.projects.destroy({
      name,
    });
    expect(result).toBe(null);
  });
});

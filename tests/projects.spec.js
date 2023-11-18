import { client } from "./index.js";

describe("ProjectsManager Tests", () => {
  let name = "sample-project";

  it("Check if user can create more projects", async () => {
    const result = await client.projects.canCreate();
    expect(result.ok).toBe(true);
  });

  it("Create a project", async () => {
    const result = await client.projects.create({
      name,
    });
    expect(result.ok).toBe(true);
  });

  it("Inspect a project", async () => {
    const result = await client.projects.inspect({
      projectName: name,
    });
    expect(result.ok).toBe(true);
  });

  it("List all projects", async () => {
    const result = await client.projects.list();
    expect(result.ok).toBe(true);
  });

  it("List all projects with services", async () => {
    const result = await client.projects.listWithServices();
    expect(result.ok).toBe(true);
  });

  it("Destroy a project", async () => {
    const result = await client.projects.destory({
      name,
    });
    expect(result.ok).toBe(true);
  });
});

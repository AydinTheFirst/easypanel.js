## About

easypanel-api is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the
[Easypanel API](https://easypanel.io).

## Installation

```sh
npm install easypanel-api
```

## Example usage

```js
import "dotenv/config";
import Easypanel from "easypanel-api";

const client = new Easypanel.Client({
  endpoint: "https://easypanel.domain.com/",
  credentials: {
    email: process.env.email,
    password: process.env.psw,
  },
  token: "", // when provided package will skip authenticating if token works!
});

client.on("ready", async () => {
  console.log("Client is ready!");
  console.log(client.token); // copy this token for further authentications!
  // List Projects
  const projects = await client.rest.projects.list();
  console.log(projects);

  // Create project
  const project = await client.rest.projects.create("test");
  console.log(project);

  // Create a service
  const service = await client.rest.services.create({
    projectName: "test",
    serviceName: "test",
    type: "app",
  });
  console.log(service);
});

await client.login();
```

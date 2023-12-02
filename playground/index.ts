/* eslint-disable no-undef */
import "dotenv/config";
import { Client } from "../dist";

export const client = new Client({
  endpoint: process.env.endpoint as string,
  token: process.env.token as string, // when provided package will skip authenticating if token works!
  credentials: {
    email: "",
    password: "",
  },
});

client.on("ready", async () => {
  console.log("Client is ready!");

  const deps = await client.services.getDeployment({
    projectName: "test",
    serviceName: "firefox",
    type: "app",
    id: "clpnt1oh8003c1eo26sxdh967",
  });

  console.log(deps.log);
});

client.on("refresh", (ms) => {
  console.log(`Cache refreshed in ${ms}ms`);
});

await client.login();

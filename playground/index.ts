/* eslint-disable no-undef */
import "dotenv/config";
import { Client } from "../dist/index";

export const client = new Client({
  endpoint: process.env.endpoint as string,
  credentials: {
    email: process.env.email as string,
    password: process.env.psw as string,
  },
  token: process.env.token, // when provided package will skip authenticating if token works!
});

client.on("ready", async () => {
  console.log("Client is ready!");
  const logs = await client.services.getServiceLogs({
    type: "app",
    serviceName: "fristroop",
    projectName: "fristroop",
  });
  console.log(logs.ok);
});

await client.login();

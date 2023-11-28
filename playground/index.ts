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

  const certs = await client.services.updateMaintenance({
    projectName: "test",
    serviceName: "fr",
    type: "app",
    maintenance: {
      enabled: true,
      subtitle: "subtitle",
      title: "title",
    },
  });
});

client.on("refresh", (ms) => {
  console.log(`Cache refreshed in ${ms}ms`);
});

await client.login();

/* eslint-disable no-undef */
import "dotenv/config";
import { Client } from "../dist";
import fs from "fs";

export const client = new Client({
  endpoint: process.env.endpoint as string,
  token: process.env.token as string, // when provided package will skip authenticating if token works!
});

client.on("ready", async () => {
  console.log("Client is ready!");

  await client.services.updateDomains({
    projectName: "benmuhammed",
    serviceName: "aydinthefirst_test",
    type: "app",
    domains: [
      {
        host: "*.fristroop.com",
        https: true,
        path: "/",
        port: 3000,
      },
    ],
  });
});

client.on("refresh", (ms) => {
  console.log(`Cache refreshed in ${ms}ms`);
});

await client.login();

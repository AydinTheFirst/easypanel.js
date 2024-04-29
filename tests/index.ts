/* eslint-disable no-undef */
import "dotenv/config";
import { Client } from "../dist";

export const client = new Client({
  endpoint: process.env.endpoint as string,
  token: process.env.token as string, // when provided package will skip authenticating if token works!
});

client.on("ready", async () => {
  console.log("Client is ready!");
});

await client.login();

/* eslint-disable no-undef */
import "dotenv/config";
import { Client } from "../dist/index.js";

export const client = new Client({
  endpoint: process.env.domain,
  credentials: {
    email: process.env.email,
    password: process.env.psw,
  },
  token: process.env.token, // when provided package will skip authenticating if token works!
});

client.on("ready", async () => {
  console.log("Client is ready!");
  console.log(await client.projects.list());
  const service = await client.services.inspect();
});

await client.login();

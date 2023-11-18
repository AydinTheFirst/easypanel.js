/* eslint-disable no-undef */
import "dotenv/config";
import Easypanel from "../index.js";

export const client = new Easypanel.Client({
  endpoint: process.env.domain,
  credentials: {
    email: process.env.email,
    password: process.env.psw,
  },
  token: process.env.token, // when provided package will skip authenticating if token works!
});

client.on("ready", async () => {
  console.log("Client is ready!");
});

await client.login();

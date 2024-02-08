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

  try {
    const file = fs.readFileSync("./docker-compose.yml").toString();
    console.log(file);
    await client.services.createFromDockerCompose({
      projectName: "pterodactyl",
      file: fs.readFileSync("./docker-compose.yml").toString(),
    });
  } catch (error) {
    console.log(error);
  }
});

client.on("refresh", (ms) => {
  console.log(`Cache refreshed in ${ms}ms`);
});

await client.login();

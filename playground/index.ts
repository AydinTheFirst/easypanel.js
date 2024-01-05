/* eslint-disable no-undef */
import "dotenv/config";
import { Client } from "../dist";
import fs from "fs";

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

  const yaml = fs.readFileSync("./docker-compose.example.yml", "utf-8");

  const res = await client.services.create({
    projectName: "benmuhammed",
    serviceName: "testdsdas",
    type: "app",
  });
  console.log(res);
});

client.on("refresh", (ms) => {
  console.log(`Cache refreshed in ${ms}ms`);
});

await client.login();

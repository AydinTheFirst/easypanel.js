/* eslint-disable no-undef */
import dotenv from "dotenv";
import { Client, EasypanelError } from "../dist";

dotenv.config({
  path: "../.env",
});

export const client = new Client({
  endpoint: process.env.endpoint as string,
  token: process.env.token as string, // when provided package will skip authenticating if token works!
});

client.on("ready", async () => {
  console.log("Client is ready!");
  try {
    const res = await client.traefik.getEnv();
    console.log(res);
  } catch (error: any) {
    if (error instanceof EasypanelError) {
      console.log("Yes it is an EasypanelError");
      console.log(error);
    }
  }
});

await client.login();

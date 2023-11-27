import { Client } from "../Client.js";

export class BaseClass {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
}

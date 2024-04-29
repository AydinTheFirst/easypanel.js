import { Client } from "@/Client";

/**
 * Base manager for all managers.
 */
export class BaseManager {
  client: Client;
  constructor(client: Client) {
    this.client = client;
  }
}

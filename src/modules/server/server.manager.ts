import { Client } from "@/Client";

export class ServerManager {
  constructor(private client: Client) {}

  /**
   * Reboot the server. This will cause temporary downtime.
   */
  async reboot() {
    const { data } = await this.client.http.post("/server.reboot");

    return data;
  }
}

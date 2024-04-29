import { Client } from "@/Client";
import { BaseManager } from "./BaseManager";

export class TraefikManager extends BaseManager {
  constructor(client: Client) {
    super(client);
  }

  async getCustomConfig(): Promise<string> {
    const res = await this.client.rest.get(`/api/trpc/traefik.getCustomConfig`);
    return res.data;
  }

  async setCustomConfig(body: { config: string }): Promise<void> {
    await this.client.rest.post(`/api/trpc/traefik.setCustomConfig`, body);
  }

  async getEnv(): Promise<string> {
    const res = await this.client.rest.get(`/api/trpc/traefik.getEnv`);
    return res.data;
  }

  setEnv = async (body: { env: string }): Promise<void> => {
    await this.client.rest.post(`/api/trpc/traefik.setEnv`, body);
  };

  async getDashboard(): Promise<DashboardPayload> {
    const res = await this.client.rest.get(`/api/trpc/traefik.getDashboard`);
    return res.data;
  }

  async restart(): Promise<void> {
    await this.client.rest.post(`/api/trpc/traefik.restart`);
  }
}

type DashboardPayload = {
  domain: string;
  token: string | null;
};

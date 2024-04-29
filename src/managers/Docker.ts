import { Client } from "@/Client";
import { BaseManager } from "./BaseManager";

export class DockerManager extends BaseManager {
  constructor(client: Client) {
    super(client);
  }

  getDailyCleanUp = async (): Promise<boolean> => {
    const res = await this.client.rest.get(
      `/api/trpc/settings.getDailyDockerCleanup`
    );
    return res.data;
  };

  setDailyCleanUp = async (body: {
    dailyDockerCleanup: boolean;
  }): Promise<boolean> => {
    const res = await this.client.rest.post(
      `/api/trpc/settings.setDailyDockerCleanup`,
      body
    );
    return res.data;
  };

  cleanupDockerImages = async (): Promise<string> => {
    const res = await this.client.rest.post(
      `/api/trpc/settings.cleanupDockerImages`
    );
    return res.data;
  };

  cleanupDockerBuilder = async (): Promise<string> => {
    const res = await this.client.rest.post(
      `/api/trpc/settings.cleanupDockerBuilder`
    );
    return res.data;
  };
}

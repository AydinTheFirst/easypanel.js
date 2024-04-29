import { Client } from "@/Client";
import { BaseManager } from "./BaseManager";

import { ChangeCredentialsParams, IPanelDomain } from "../types/settings.js";

/**
 * Settings Manager
 * Manages various settings and configurations.
 */
export class SettingsManager extends BaseManager {
  routes: typeof this.client.routes.Settings;

  constructor(client: Client) {
    super(client);

    this.routes = this.client.routes.Settings;
  }

  async changeCredentials(body: ChangeCredentialsParams): Promise<null> {
    const res = await this.client.rest.post(this.routes.ChangeCredentials, {
      body,
    });
    return res.data;
  }

  async getGithubToken(): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetGithubToken);
    return res.data;
  }

  async getLetsEncryptEmail(): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetLetsEncryptEmail);
    return res.data;
  }

  async getPanelDomain(): Promise<IPanelDomain> {
    const res = await this.client.rest.get(this.routes.GetPanelDomain);
    return res.data;
  }

  async getServerIp(): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetServerIp);
    return res.data;
  }

  async getTraefikCustomConfig(): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetTraefikCustomConfig);
    return res.data;
  }

  async pruneDockerBuilder(): Promise<string> {
    const res = await this.client.rest.post(this.routes.CleanupDockerBuilder);
    return res.data;
  }

  async cleanupDockerImages(): Promise<string> {
    const res = await this.client.rest.post(this.routes.CleanupDockerImages);
    return res.data;
  }

  async setDailyDockerCleanup(body: {
    dailyDockerCleanup: boolean;
  }): Promise<boolean> {
    const res = await this.client.rest.post(this.routes.SetDailyDockerCleanup, {
      body,
    });
    return res.data;
  }

  async refreshServerIp(): Promise<null> {
    const res = await this.client.rest.post(this.routes.RefreshServerIp);
    return res.data;
  }

  async restartEasypanel(): Promise<null> {
    const res = await this.client.rest.post(this.routes.RestartEasypanel);
    return res.data;
  }

  async restartTraefik(): Promise<null> {
    const res = await this.client.rest.post(this.routes.RestartTraefik);
    return res.data;
  }

  async getDockerPruneDaily(): Promise<boolean> {
    const res = await this.client.rest.get(this.routes.GetDailyDockerCleanup);
    return res.data;
  }

  async setGithubToken(body: { githubToken: string }): Promise<string> {
    const res = await this.client.rest.post(this.routes.SetGithubToken, {
      body,
    });
    return res.data;
  }

  async setPanelDomain(body: IPanelDomain): Promise<null> {
    const res = await this.client.rest.post(this.routes.SetPanelDomain, {
      body,
    });
    return res.data;
  }

  async updateTraefikCustomConfig(body: { config: string }): Promise<null> {
    const res = await this.client.rest.post(
      this.routes.UpdateTraefikCustomConfig,
      { body }
    );
    return res.data;
  }

  async setLetsEncryptEmail(body: {
    letsEncryptEmail: string;
  }): Promise<string> {
    const res = await this.client.rest.post(this.routes.setLetsEncryptEmail, {
      body,
    });
    return res.data;
  }

  async listCertificates(): Promise<{ domain: { main: string } }[]> {
    const res = await this.client.rest.get(this.routes.ListCertificates);
    return res.data;
  }

  async removeCertificate(body: { domain: string }): Promise<null> {
    const res = await this.client.rest.post(this.routes.RemoveCertificate, {
      body,
    });
    return res.data;
  }
}

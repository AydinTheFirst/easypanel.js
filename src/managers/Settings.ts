import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";

import {
  ChangeCredentialsParams,
  IPanelDomain,
} from "../types/general.types.js";

import { Routes } from "../utils/Routes.js";

/**
 * Settings Manager
 * Manages various settings and configurations.
 */
export class SettingsManager extends BaseManager {
  routes: typeof Routes.Settings;

  constructor(client: Client) {
    super(client);

    this.routes = Routes.Settings;
  }

  async changeCredentials(body: ChangeCredentialsParams): Promise<null> {
    const res = await this.client.rest.post(this.routes.ChangeCredentials, {
      json: body,
    });
    return res;
  }

  async getGithubToken(): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetGithubToken, {
      json: null,
    });
    return res;
  }

  async getLetsEncryptEmail(): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetLetsEncryptEmail, {
      json: null,
    });
    return res;
  }

  async getPanelDomain(): Promise<IPanelDomain> {
    const res = await this.client.rest.get(this.routes.GetPanelDomain, {
      json: null,
    });
    return res;
  }

  async getServerIp(): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetServerIp, {
      json: null,
    });
    return res;
  }

  async getTraefikCustomConfig(): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetTraefikCustomConfig, {
      json: null,
    });
    return res;
  }

  async pruneDockerBuilder(): Promise<string> {
    const res = await this.client.rest.post(this.routes.CleanupDockerBuilder, {
      json: null,
    });
    return res;
  }

  async cleanupDockerImages(): Promise<string> {
    const res = await this.client.rest.post(this.routes.CleanupDockerImages, {
      json: null,
    });
    return res;
  }

  async setDailyDockerCleanup(body: {
    dailyDockerCleanup: boolean;
  }): Promise<boolean> {
    const res = await this.client.rest.post(this.routes.SetDailyDockerCleanup, {
      json: body,
    });
    return res;
  }

  async refreshServerIp(): Promise<null> {
    const res = await this.client.rest.post(this.routes.RefreshServerIp, {
      json: null,
    });
    return res;
  }

  async restartEasypanel(): Promise<null> {
    const res = await this.client.rest.post(this.routes.RestartEasypanel, {
      json: null,
    });
    return res;
  }

  async restartTraefik(): Promise<null> {
    const res = await this.client.rest.post(this.routes.RestartTraefik, {
      json: null,
    });
    return res;
  }

  async getDockerPruneDaily(): Promise<boolean> {
    const res = await this.client.rest.get(this.routes.GetDailyDockerCleanup, {
      json: null,
    });
    return res;
  }

  async setGithubToken(body: { githubToken: string }): Promise<string> {
    const res = await this.client.rest.post(this.routes.SetGithubToken, {
      json: body,
    });
    return res;
  }

  async setPanelDomain(body: IPanelDomain): Promise<null> {
    const res = await this.client.rest.post(this.routes.SetPanelDomain, {
      json: body,
    });
    return res;
  }

  async updateTraefikCustomConfig(body: { config: string }): Promise<null> {
    const res = await this.client.rest.post(
      this.routes.UpdateTraefikCustomConfig,
      { json: body }
    );
    return res;
  }

  async setLetsEncryptEmail(body: {
    letsEncryptEmail: string;
  }): Promise<string> {
    const res = await this.client.rest.post(this.routes.setLetsEncryptEmail, {
      json: body,
    });
    return res;
  }

  async listCertificates(): Promise<{ domain: { main: string } }[]> {
    const res = await this.client.rest.get(this.routes.ListCertificates, {
      json: null,
    });
    return res;
  }

  async removeCertificate(body: { domain: string }): Promise<null> {
    const res = await this.client.rest.post(this.routes.RemoveCertificate, {
      json: body,
    });
    return res;
  }
}

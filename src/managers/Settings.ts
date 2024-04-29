import { Client } from "@/Client";
import { BaseManager } from "./BaseManager";

import { ChangeCredentialsParams, IPanelDomain } from "../types/settings.js";
import { DockerManager } from "./Docker";

/**
 * Settings Manager
 * Manages various settings and configurations.
 */
export class SettingsManager extends BaseManager {
  routes: typeof this.client.routes.Settings;
  docker: DockerManager;
  constructor(client: Client) {
    super(client);

    this.routes = this.client.routes.Settings;

    this.docker = new DockerManager(client);
  }

  async changeCredentials(body: ChangeCredentialsParams): Promise<null> {
    const res = await this.client.rest.post(
      this.routes.ChangeCredentials,
      body
    );
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

  async refreshServerIp(): Promise<null> {
    const res = await this.client.rest.post(this.routes.RefreshServerIp);
    return res.data;
  }

  async restartEasypanel(): Promise<null> {
    const res = await this.client.rest.post(this.routes.RestartEasypanel);
    return res.data;
  }

  async setGithubToken(body: { githubToken: string }): Promise<string> {
    const res = await this.client.rest.post(this.routes.SetGithubToken, body);
    return res.data;
  }

  async setPanelDomain(body: IPanelDomain): Promise<null> {
    const res = await this.client.rest.post(this.routes.SetPanelDomain, body);
    return res.data;
  }

  async setLetsEncryptEmail(body: {
    letsEncryptEmail: string;
  }): Promise<string> {
    const res = await this.client.rest.post(
      this.routes.setLetsEncryptEmail,
      body
    );
    return res.data;
  }

  async listCertificates(): Promise<{ domain: { main: string } }[]> {
    const res = await this.client.rest.get(this.routes.ListCertificates);
    return res.data;
  }

  async removeCertificate(body: { domain: string }): Promise<null> {
    const res = await this.client.rest.post(
      this.routes.RemoveCertificate,
      body
    );
    return res.data;
  }
}

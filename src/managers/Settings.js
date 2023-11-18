import { Routes } from "../utils/Routes.js";
import { BaseManager } from "./BaseManager.js";

export class Settings extends BaseManager {
  constructor(client) {
    super(client);
  }

  /**
   *
   * @param {object} body
   * @param {string} body.email
   * @param {string} body.oldPassword
   * @param {string} body.newPassword
   */
  async changeCredentials(body) {
    const res = await this.client.rest.post(Routes.Settings.ChangeCredentials, {
      json: body,
    });
    return res;
  }

  /**
   * Returns github token
   */
  async getGithubToken() {
    const res = await this.client.rest.get(Routes.Settings.GetGithubToken);
    return res;
  }

  /**
   * Returns Let's encrypt email
   */
  async getLetsEncryptEmail() {
    const res = await this.client.rest.get(Routes.Settings.GetLetsEncryptEmail);
    return res;
  }

  /**
   * Returns panel domain
   */
  async getPanelDomain() {
    const res = await this.client.rest.get(Routes.Settings.GetPanelDomain);
    return res;
  }

  /**
   *  Returns server IP
   */
  async getServerIp() {
    const res = await this.client.rest.get(Routes.Settings.GetServerIp);
    return res;
  }

  /**
   * Returns traefik custom config
   */
  async getTraefikCustomConfig() {
    const res = await this.client.rest.get(
      Routes.Settings.GetTraefikCustomConfig
    );
    return res;
  }

  /**
   * Prunes docker builder
   */
  async pruneDockerBuilder() {
    const res = await this.client.rest.post(
      Routes.Settings.PruneDockerBuilder,
      {
        json: null,
      }
    );
    return res;
  }

  /**
   * Prunes docker images
   */
  async pruneDockerImages() {
    const res = await this.client.rest.post(Routes.Settings.PruneDockerImages, {
      json: null,
    });
    return res;
  }

  /**
   * Refreshes server IP
   */
  async refreshServerIp() {
    const res = await this.client.rest.post(Routes.Settings.RefreshServerIp);
    return res;
  }

  /**
   * Restarts Easypanel.
   */
  async restartEasypanel() {
    const res = await this.client.rest.post(Routes.Settings.RestartEasypanel);
    return res;
  }

  /**
   * Restarts Traefik
   */
  async restartTraefik() {
    const res = await this.client.rest.post(Routes.Settings.RestartTraefik, {
      json: null,
    });
    return res;
  }

  /**
   * @param {object} body
   * @param {boolean} body.pruneDockerDaily
   */
  async setDockerPruneDaily(body) {
    const res = await this.client.rest.post(
      Routes.Settings.SetDockerPruneDaily,
      {
        json: body,
      }
    );
    return res;
  }

  /**
   * @param {object} body
   * @param {string} body.githubToken
   */
  async setGithubToken(body) {
    const res = await this.client.rest.post(Routes.Settings.SetGithubToken, {
      json: body,
    });
    return res;
  }

  /**
   * @param {object} body
   * @param {boolean} body.serveOnIp
   * @param {string} body.defaultPanelDomain
   * @param {string} body.panelDomain

   */
  async setPanelDomain(body) {
    const res = await this.client.rest.post(Routes.Settings.SetPanelDomain, {
      json: body,
    });
    return res;
  }

  /**
   * @param {object} body
   * @param {string} body.config

   */
  async updateTraefikCustomConfig(body) {
    const res = await this.client.rest.post(
      Routes.Settings.UpdateTraefikCustomConfig,
      {
        json: body,
      }
    );
    return res;
  }

  /**
   * @param {object} body
   * @param {string} body.letsEncryptEmail

   */
  async setLetsEncryptEmail(body) {
    const res = await this.client.rest.post(
      Routes.Settings.setLetsEncryptEmail,
      {
        json: body,
      }
    );
    return res;
  }
}

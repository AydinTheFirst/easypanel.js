import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";

import {
  ChangeCredentialsParams,
  GithubTokenParams,
  LetsEncryptParams,
  PanelDomainParams,
  PanelDomainRes,
  PruneDockerDailyParams,
  TreafikConfParams,
} from "../types/settings.types.js";

import {
  BooleanResponse,
  NoResponse,
  StringResponse,
} from "../types/index.types.js";

import { Routes } from "../utils/Routes.js";

/**
 * Settings Manager
 * Manages various settings and configurations.
 */
export class SettingsManager extends BaseManager {
  // The routes for accessing settings-related endpoints
  routes: typeof Routes.Settings;

  /**
   * Constructor for SettingsManager
   * @param {Client} client - The client instance used for making API requests.
   */
  constructor(client: Client) {
    // Call the constructor of the BaseManager class with the provided client
    super(client);

    // Set the routes for settings-related endpoints
    this.routes = Routes.Settings;
  }

  /**
   * Changes user credentials.
   * @param {ChangeCredentialsParams} body - The parameters for changing credentials.
   * @returns {Promise<NoResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async changeCredentials(body: ChangeCredentialsParams): Promise<NoResponse> {
    const res = await this.client.rest.post(this.routes.ChangeCredentials, {
      json: body,
    });
    return res;
  }

  /**
   * Returns the GitHub token.
   * @returns {Promise<StringResponse>} - A Promise that resolves to the GitHub token.
   */
  async getGithubToken(): Promise<StringResponse> {
    const res = await this.client.rest.get(this.routes.GetGithubToken, {
      json: null,
    });
    return res;
  }

  /**
   * Returns the Let's Encrypt email.
   * @returns {Promise<StringResponse>} - A Promise that resolves to the Let's Encrypt email.
   */
  async getLetsEncryptEmail(): Promise<StringResponse> {
    const res = await this.client.rest.get(this.routes.GetLetsEncryptEmail, {
      json: null,
    });
    return res;
  }

  /**
   * Returns the configured panel domain.
   * @returns {Promise<PanelDomainRes>} - A Promise that resolves to information about the panel domain.
   */
  async getPanelDomain(): Promise<PanelDomainRes> {
    const res = await this.client.rest.get(this.routes.GetPanelDomain, {
      json: null,
    });
    return res;
  }

  /**
   * Returns the server IP address.
   * @returns {Promise<StringResponse>} - A Promise that resolves to the server IP address.
   */
  async getServerIp(): Promise<StringResponse> {
    const res = await this.client.rest.get(this.routes.GetServerIp, {
      json: null,
    });
    return res;
  }

  /**
   * Returns the custom Traefik configuration.
   * @returns {Promise<StringResponse>} - A Promise that resolves to the custom Traefik configuration.
   */
  async getTraefikCustomConfig(): Promise<StringResponse> {
    const res = await this.client.rest.get(this.routes.GetTraefikCustomConfig, {
      json: null,
    });
    return res;
  }

  /**
   * Prunes the Docker builder.
   * @returns {Promise<StringResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async pruneDockerBuilder(): Promise<StringResponse> {
    const res = await this.client.rest.post(this.routes.PruneDockerBuilder, {
      json: null,
    });
    return res;
  }

  /**
   * Prunes Docker images.
   * @returns {Promise<StringResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async pruneDockerImages(): Promise<StringResponse> {
    const res = await this.client.rest.post(this.routes.PruneDockerImages, {
      json: null,
    });
    return res;
  }

  /**
   * Refreshes the server IP.
   * @returns {Promise<NoResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async refreshServerIp(): Promise<NoResponse> {
    const res = await this.client.rest.post(this.routes.RefreshServerIp, {
      json: null,
    });
    return res;
  }

  /**
   * Restarts Easypanel.
   * @returns {Promise<NoResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async restartEasypanel(): Promise<NoResponse> {
    const res = await this.client.rest.post(this.routes.RestartEasypanel, {
      json: null,
    });
    return res;
  }

  /**
   * Restarts Traefik.
   * @returns {Promise<NoResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async restartTraefik(): Promise<NoResponse> {
    const res = await this.client.rest.post(this.routes.RestartTraefik, {
      json: null,
    });
    return res;
  }

  /**
   * Sets the Docker prune daily configuration.
   * @param {PruneDockerDailyParams} body - The parameters for configuring daily Docker pruning.
   * @returns {Promise<BooleanResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async setDockerPruneDaily(
    body: PruneDockerDailyParams
  ): Promise<BooleanResponse> {
    const res = await this.client.rest.post(this.routes.SetDockerPruneDaily, {
      json: body,
    });
    return res;
  }

  /**
   * Sets the GitHub token.
   * @param {GithubTokenParams} body - The GitHub token parameters.
   * @returns {Promise<StringResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async setGithubToken(body: GithubTokenParams): Promise<StringResponse> {
    const res = await this.client.rest.post(this.routes.SetGithubToken, {
      json: body,
    });
    return res;
  }

  /**
   * Sets the panel domain.
   * @param {PanelDomainParams} body - The parameters for setting the panel domain.
   * @returns {Promise<NoResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async setPanelDomain(body: PanelDomainParams): Promise<NoResponse> {
    const res = await this.client.rest.post(this.routes.SetPanelDomain, {
      json: body,
    });
    return res;
  }

  /**
   * Updates the custom Traefik configuration.
   * @param {TreafikConfParams} body - The parameters for updating the custom Traefik configuration.
   * @returns {Promise<NoResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async updateTraefikCustomConfig(
    body: TreafikConfParams
  ): Promise<NoResponse> {
    const res = await this.client.rest.post(
      this.routes.UpdateTraefikCustomConfig,
      { json: body }
    );
    return res;
  }

  /**
   * Sets the Let's Encrypt email.
   * @param {LetsEncryptParams} body - The parameters for setting the Let's Encrypt email.
   * @returns {Promise<StringResponse>} - A Promise that resolves to a response indicating the success of the operation.
   */
  async setLetsEncryptEmail(body: LetsEncryptParams): Promise<StringResponse> {
    const res = await this.client.rest.post(this.routes.setLetsEncryptEmail, {
      json: body,
    });
    return res;
  }
}

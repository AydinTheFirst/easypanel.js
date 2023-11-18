import { Client } from "../Client.js";
import { Routes } from "../utils/Routes.js";
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

export class SettingsManager extends BaseManager {
  constructor(client: Client) {
    super(client);
  }

  async changeCredentials(body: ChangeCredentialsParams): Promise<NoResponse> {
    const res = await this.client.rest.post(Routes.Settings.ChangeCredentials, {
      json: body,
    });
    return res;
  }

  /**
   * Returns github token
   */
  async getGithubToken(): Promise<StringResponse> {
    const res = await this.client.rest.get(Routes.Settings.GetGithubToken, {
      json: null,
    });
    return res;
  }

  /**
   * Returns Let's encrypt email
   */
  async getLetsEncryptEmail(): Promise<StringResponse> {
    const res = await this.client.rest.get(
      Routes.Settings.GetLetsEncryptEmail,
      { json: null }
    );
    return res;
  }

  async getPanelDomain(): Promise<PanelDomainRes> {
    const res = await this.client.rest.get(Routes.Settings.GetPanelDomain, {
      json: null,
    });
    return res;
  }

  async getServerIp(): Promise<StringResponse> {
    const res = await this.client.rest.get(Routes.Settings.GetServerIp, {
      json: null,
    });
    return res;
  }

  async getTraefikCustomConfig(): Promise<StringResponse> {
    const res = await this.client.rest.get(
      Routes.Settings.GetTraefikCustomConfig,
      {
        json: null,
      }
    );
    return res;
  }

  async pruneDockerBuilder(): Promise<StringResponse> {
    const res = await this.client.rest.post(
      Routes.Settings.PruneDockerBuilder,
      {
        json: null,
      }
    );
    return res;
  }

  async pruneDockerImages(): Promise<StringResponse> {
    const res = await this.client.rest.post(Routes.Settings.PruneDockerImages, {
      json: null,
    });
    return res;
  }

  async refreshServerIp(): Promise<NoResponse> {
    const res = await this.client.rest.post(Routes.Settings.RefreshServerIp, {
      json: null,
    });
    return res;
  }

  async restartEasypanel(): Promise<NoResponse> {
    const res = await this.client.rest.post(Routes.Settings.RestartEasypanel, {
      json: null,
    });
    return res;
  }

  async restartTraefik(): Promise<NoResponse> {
    const res = await this.client.rest.post(Routes.Settings.RestartTraefik, {
      json: null,
    });
    return res;
  }

  async setDockerPruneDaily(
    body: PruneDockerDailyParams
  ): Promise<BooleanResponse> {
    const res = await this.client.rest.post(
      Routes.Settings.SetDockerPruneDaily,
      {
        json: body,
      }
    );
    return res;
  }

  async setGithubToken(body: GithubTokenParams): Promise<StringResponse> {
    const res = await this.client.rest.post(Routes.Settings.SetGithubToken, {
      json: body,
    });
    return res;
  }

  async setPanelDomain(body: PanelDomainParams): Promise<NoResponse> {
    const res = await this.client.rest.post(Routes.Settings.SetPanelDomain, {
      json: body,
    });
    return res;
  }

  async updateTraefikCustomConfig(
    body: TreafikConfParams
  ): Promise<NoResponse> {
    const res = await this.client.rest.post(
      Routes.Settings.UpdateTraefikCustomConfig,
      {
        json: body,
      }
    );
    return res;
  }

  async setLetsEncryptEmail(body: LetsEncryptParams): Promise<StringResponse> {
    const res = await this.client.rest.post(
      Routes.Settings.setLetsEncryptEmail,
      {
        json: body,
      }
    );
    return res;
  }
}

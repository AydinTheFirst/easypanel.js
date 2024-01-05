import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";

import { Routes } from "../utils/Routes.js";
import { ISelectService, ServiceType } from "../index.js";
import {
  IBackupDestRes,
  IBackupParams,
  IRestoreParams,
} from "../types/backups.t.js";

/**
 * Monitor Manager
 * Manages the retrieval of various statistics and monitoring data.
 */
export class BackupsManager extends BaseManager {
  routes: typeof Routes.Backups;

  constructor(client: Client) {
    super(client);

    this.routes = Routes.Backups;
  }

  async createDestination(body: IBackupParams): Promise<void> {
    const res = await this.client.rest.post(this.routes.CreateBackup, {
      json: body,
    });
    return res;
  }

  async listDestinations(): Promise<IBackupDestRes> {
    const res = await this.client.rest.get(this.routes.ListBackups, {
      json: null,
    });
    return res;
  }

  async updateDestination(id: string, body: IBackupParams): Promise<void> {
    const res = await this.client.rest.post(this.routes.UpdateBackup, {
      json: {
        id,
        ...body,
      },
    });
    return res;
  }

  async destroyDestination(id: string): Promise<void> {
    const res = await this.client.rest.post(this.routes.RemoveBackup, {
      json: { id },
    });
    return res;
  }

  async restore(body: IRestoreParams): Promise<void> {
    const res = await this.client.rest.post(this.routes.RestoreBackup, {
      json: body,
    });
    return res;
  }

  async getLog(body: ISelectService): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetBackupLog, {
      json: body,
    });
    return res;
  }

  async runManualBackup(type: ServiceType) {
    const res = await this.client.rest.post(
      Routes.Backups.RunManualBackup(type),
      {
        json: null,
      }
    );
    return res;
  }
}

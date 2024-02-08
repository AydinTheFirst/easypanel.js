import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";

import {
  IBackupDestRes,
  IBackupParams,
  IRestoreParams,
} from "../types/backups.t.js";
import { ISelectDatabaseService } from "../types/services.t.js";

/**
 * BackupsManager
 * Base manager for handling backups
 */
export class BackupsManager extends BaseManager {
  routes: typeof this.client.routes.Backups;

  constructor(client: Client) {
    super(client);

    this.routes = this.client.routes.Backups;
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

  async getLog(body: Omit<ISelectDatabaseService, "type">): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetBackupLog, {
      json: body,
    });
    return res;
  }

  async clearLog(body: Omit<ISelectDatabaseService, "type">): Promise<void> {
    const res = await this.client.rest.post(this.routes.ClearBackupLog, {
      json: body,
    });
    return res;
  }

  async runManualBackup(body: ISelectDatabaseService): Promise<void> {
    const res = await this.client.rest.post(
      this.routes.RunManualBackup(body.type),
      {
        json: body,
      }
    );
    return res;
  }
}

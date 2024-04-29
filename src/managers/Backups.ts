import { Client } from "@/Client";
import { BaseManager } from "./BaseManager";

import { IBackupDestRes, IBackupParams, IRestoreParams } from "@/types/backups";
import { ISelectDatabaseService } from "../types/services.js";

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
      body,
    });
    return res.data;
  }

  async listDestinations(): Promise<IBackupDestRes> {
    const res = await this.client.rest.get(this.routes.ListBackups);
    return res.data;
  }

  async updateDestination(id: string, body: IBackupParams): Promise<void> {
    const res = await this.client.rest.post(this.routes.UpdateBackup, {
      id,
      ...body,
    });
    return res.data;
  }

  async destroyDestination(id: string): Promise<void> {
    const res = await this.client.rest.post(this.routes.RemoveBackup, {
      id,
    });
    return res.data;
  }

  async restore(body: IRestoreParams): Promise<void> {
    const res = await this.client.rest.post(this.routes.RestoreBackup, {
      body,
    });
    return res.data;
  }

  async getLog(body: Omit<ISelectDatabaseService, "type">): Promise<string> {
    const res = await this.client.rest.get(this.routes.GetBackupLog, {
      params: body,
    });
    return res.data;
  }

  async clearLog(body: Omit<ISelectDatabaseService, "type">): Promise<void> {
    const res = await this.client.rest.post(this.routes.ClearBackupLog, {
      body,
    });
    return res.data;
  }

  async runManualBackup(body: ISelectDatabaseService): Promise<void> {
    const res = await this.client.rest.post(
      this.routes.RunManualBackup(body.type),
      body
    );
    return res.data;
  }
}

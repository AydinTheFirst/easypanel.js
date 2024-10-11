import { Client } from "@/Client";

import {
  ClearBackupLogResponse,
  CreateBackupDestinationResponse,
  DestroyBackupDestinationResponse,
  GetBackupLogResponse,
  ListBackupDestinationsResponse,
  ListDestinationOptionsResponse,
  RestoreBackupResponse,
  UpdateBackupDestinationResponse,
} from "./backups.types";
import {
  ClearBackupLogInput,
  CreateBackupDestinationInput,
  DestroyBackupDestinationInput,
  GetBackupLogInput,
  RestoreBackupInput,
  UpdateBackupDestinationInput,
} from "./backups.dto";
import { validateOrReject } from "class-validator";

export class BackupsManager {
  constructor(private client: Client) {}

  async listDestinations() {
    const { data } = await this.client.http.get<ListBackupDestinationsResponse>(
      "/backups.listBackupDestinations"
    );

    return data;
  }

  async listDestinationOptions() {
    const { data } = await this.client.http.get<ListDestinationOptionsResponse>(
      "/backups.listBackupDestinationOptions"
    );

    return data;
  }

  async getLog(body: GetBackupLogInput) {
    await validateOrReject(body);

    const { data } = await this.client.http.post<GetBackupLogResponse>(
      "/backups.getBackupLog",
      body
    );

    return data;
  }

  async clearLog(body: ClearBackupLogInput) {
    await validateOrReject(body);

    const { data } = await this.client.http.post<ClearBackupLogResponse>(
      "/backups.clearBackupLog",
      body
    );

    return data;
  }

  async createDestination(body: CreateBackupDestinationInput) {
    await validateOrReject(body);

    const { data } =
      await this.client.http.post<CreateBackupDestinationResponse>(
        "/backups.createBackupDestination",
        body
      );

    return data;
  }

  async updateDestination(body: UpdateBackupDestinationInput) {
    await validateOrReject(body);

    const { data } =
      await this.client.http.post<UpdateBackupDestinationResponse>(
        "/backups.updateBackupDestination",
        body
      );

    return data;
  }

  async destroyDestination(body: DestroyBackupDestinationInput) {
    await validateOrReject(body);

    const { data } =
      await this.client.http.post<DestroyBackupDestinationResponse>(
        "/backups.destroyBackupDestination",
        body
      );

    return data;
  }

  async restore(body: RestoreBackupInput) {
    await validateOrReject(body);

    const { data } = await this.client.http.post<RestoreBackupResponse>(
      "/backups.restoreBackup",
      body
    );

    return data;
  }
}

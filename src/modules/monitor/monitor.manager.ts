import { Client } from "@/Client";

import {
  GetAdvancedStatResponse,
  GetServiceStatResponse,
  GetSystemStatResponse,
} from "./monitor.types";
import { GetServiceStatsInput } from "./monitor.dto";

export class MonitorManager {
  constructor(private client: Client) {}

  async getSystemStats() {
    const { data } = await this.client.http.get<GetSystemStatResponse>(
      "/monitor.getSystemStats"
    );

    return data;
  }

  async getAdvancedStats() {
    const { data } = await this.client.http.get<GetAdvancedStatResponse>(
      "/monitor.getAdvancedStats"
    );

    return data;
  }

  async getServiceStats(body: GetServiceStatsInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<GetServiceStatResponse>(
      "/monitor.getServiceStats",
      body
    );

    return data;
  }

  async getDockerTaskStats() {
    const { data } = await this.client.http.get<GetSystemStatResponse>(
      "/monitor.getDockerTaskStats"
    );

    return data;
  }

  async getMonitorTableData() {
    const { data } = await this.client.http.get<GetSystemStatResponse>(
      "/monitor.getMonitorTableData"
    );

    return data;
  }
}

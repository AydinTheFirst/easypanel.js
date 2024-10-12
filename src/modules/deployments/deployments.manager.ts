import { Client } from "@/Client";

import {
  GetDeploymentResponse,
  KillDeploymentResponse,
  ListDeploymentsResponse,
} from "./deployments.types";
import {
  GetDeploymentInput,
  ListDeploymentsInput,
  KillDeploymentInput,
} from "./deployments.dto";

export class DeploymentsManager {
  constructor(private client: Client) {}

  async list(body: ListDeploymentsInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.get<ListDeploymentsResponse>(
      "/deployments.listDeployments",
      {
        params: body,
      }
    );

    return data;
  }

  async get(body: GetDeploymentInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.get<GetDeploymentResponse>(
      `/deployments.getDeployment`,
      {
        params: body,
      }
    );

    return data;
  }

  async kill(body: KillDeploymentInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<KillDeploymentResponse>(
      `/deployments.killDeployment`,
      body
    );

    return data;
  }
}

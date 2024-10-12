import { Client } from "@/Client";

import {
  GetActionInput,
  KillActionInput,
  ListActionsInput,
} from "./actions.dto";
import {
  GetActionResponse,
  KillActionResponse,
  ListActionsResponse,
} from "./actions.types";

export class ActionsManager {
  constructor(private client: Client) {}

  async list(body: ListActionsInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<ListActionsResponse>(
      "/actions.listActions",
      body
    );

    return data;
  }

  async get(body: GetActionInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<GetActionResponse>(
      "/actions.getAction",
      body
    );

    return data;
  }

  async kill(body: GetActionInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<KillActionResponse>(
      "/actions.killAction",
      body
    );

    return data;
  }
}

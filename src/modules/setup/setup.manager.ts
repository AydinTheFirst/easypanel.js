import { Client } from "@/Client";

import { GetStatusResponse, SetupResponse } from "./setup.types";
import { SetupInput } from "./setup.dto";

export class SetupManager {
  constructor(private client: Client) {}

  async getStatus() {
    const { data } = await this.client.http.get<GetStatusResponse>(
      "/setup.getStatus"
    );

    return data;
  }

  async setup(body: SetupInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<SetupResponse>("/setup.setup");

    return data;
  }
}

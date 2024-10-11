import { validateOrReject } from "class-validator";

import { Client } from "@/Client";

import { GenerateKeyInput, GetPublicKeyInput } from "./git.dto";
import { GetPublicKeyResponse, GenerateKeyresponse } from "./git.types";

export class GitManager {
  constructor(private client: Client) {}

  async getPublicKey(body: GetPublicKeyInput) {
    await validateOrReject(body);

    const { data } = await this.client.http.get<GetPublicKeyResponse>(
      "/git.getPublicKey",
      {
        params: body,
      }
    );

    return data;
  }

  async generateKey(body: GenerateKeyInput) {
    await validateOrReject(body);

    const { data } = await this.client.http.post<GenerateKeyresponse>(
      "/git.generateKey",
      body
    );

    return data;
  }
}

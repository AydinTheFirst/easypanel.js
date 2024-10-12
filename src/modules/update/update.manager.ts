import { Client } from "@/Client";
import { GetUpdateStatusInput } from "./update.dto";
import { UpdateResponse } from "./update.types";

export class UpdateManager {
  constructor(private client: Client) {}

  async getStatus() {
    const { data } = await this.client.http.get<GetUpdateStatusInput>(
      "/update.getStatus"
    );

    return data;
  }

  /**
   * Since this request will result 502 Bad Gateway, we will catch the error
   * @returns
   */
  async update() {
    try {
      const { data } = await this.client.http.post<UpdateResponse>(
        "/update.update"
      );

      return data;
    } catch (error) {
      return true;
    }
  }
}

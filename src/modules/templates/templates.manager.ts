import { Client } from "@/Client";

export class TemplatesManager {
  constructor(private client: Client) {}

  async createFromSchema(schema: any) {
    const { data } = await this.client.http.post(
      "/templates.createFromSchema",
      schema
    );

    return data;
  }
}

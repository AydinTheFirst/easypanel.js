import { Client } from "@/Client";
import { BaseManager } from "./BaseManager";
import { Cluster } from "@/types/cluster";

export class ClusterManager extends BaseManager {
  routes: typeof this.client.routes.Cluster;
  constructor(client: Client) {
    super(client);

    this.routes = this.client.routes.Cluster;
  }

  list = async (): Promise<Cluster[]> => {
    const res = await this.client.rest.get(this.routes.list);

    return res.data;
  };

  addWorkerCommand = async (): Promise<string> => {
    const res = await this.client.rest.post(this.routes.addWorkerCmd);

    return res.data;
  };

  remove = async (id: string): Promise<void> => {
    const res = await this.client.rest.post(this.routes.remove, { ID: id });

    return res.data;
  };
}

import { Client } from "../Client.js";
import { Cluster } from "../types/cluster.t.js";
import { BaseManager } from "./BaseManager.js";

export class ClusterManager extends BaseManager {
  routes: typeof this.client.routes.Cluster;
  constructor(client: Client) {
    super(client);

    this.routes = this.client.routes.Cluster;
  }

  list = async (): Promise<Cluster[]> => {
    const res = await this.client.rest.get(this.routes.list, {
      json: null,
    });

    return res;
  };

  addWorkerCommand = async (): Promise<string> => {
    const res = await this.client.rest.post(this.routes.addWorkerCmd, {
      json: null,
    });

    return res;
  };

  remove = async (id: string): Promise<void> => {
    const res = await this.client.rest.post(this.routes.remove, {
      json: { ID: id },
    });

    return res;
  };
}

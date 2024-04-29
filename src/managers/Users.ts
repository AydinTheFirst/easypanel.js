import { Client } from "@/Client";
import { BaseManager } from "./BaseManager";

export class UsersManager extends BaseManager {
  routes: typeof this.client.routes.Users;
  constructor(client: Client) {
    super(client);
    this.routes = this.client.routes.Users;
  }

  async list() {
    const res = await this.client.rest.get(this.routes.list);

    return res.data;
  }

  async create(body: UserParams) {
    const res = await this.client.rest.post(this.routes.create, { body });

    return res.data;
  }

  async update(id: string, body: UserParams) {
    const res = await this.client.rest.post(this.routes.update, {
      id,
      ...body,
    });

    return res.data;
  }

  async remove(id: string) {
    const res = await this.client.rest.post(this.routes.remove, {
      id,
    });

    return res.data;
  }

  revokeToken = async (id: string) => {
    const res = await this.client.rest.post(this.routes.revokeToken, {
      id,
    });

    return res.data;
  };

  generateToken = async (id: string) => {
    const res = await this.client.rest.post(this.routes.generateToken, {
      id,
    });

    return res.data;
  };
}

interface UserParams {
  email: string;
  password: string;
  admin: boolean;
}

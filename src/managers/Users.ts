import { Client } from "../Client.js";
import { BaseManager } from "./BaseManager.js";

export class UsersManager extends BaseManager {
  routes: typeof this.client.routes.Users;
  constructor(client: Client) {
    super(client);
    this.routes = this.client.routes.Users;
  }

  async list() {
    const res = await this.client.rest.get(this.routes.list, {
      json: null,
    });

    return res;
  }

  async create(body: UserParams) {
    const res = await this.client.rest.post(this.routes.create, {
      json: body,
    });

    return res;
  }

  async update(id: string, body: UserParams) {
    const res = await this.client.rest.post(this.routes.update, {
      json: {
        id,
        ...body,
      },
    });

    return res;
  }

  async remove(id: string) {
    const res = await this.client.rest.post(this.routes.remove, {
      json: { id },
    });

    return res;
  }

  revokeToken = async (id: string) => {
    const res = await this.client.rest.post(this.routes.revokeToken, {
      json: { id },
    });

    return res;
  };

  generateToken = async (id: string) => {
    const res = await this.client.rest.post(this.routes.generateToken, {
      json: { id },
    });

    return res;
  };
}

interface UserParams {
  email: string;
  password: string;
  admin: boolean;
}

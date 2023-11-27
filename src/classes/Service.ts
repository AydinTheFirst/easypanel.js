import { Client } from "../Client.js";
import { BaseClass } from "./BaseClass.js";
import { IService } from "../types/general.types.js";
import { ServicesManager } from "../managers/Services.js";

export interface Service extends IService {}
export class Service extends BaseClass {
  manager: ServicesManager;
  constructor(client: Client, name: string, data: any) {
    super(client);

    this.manager = client.services;

    this.id = this.projectName + "_" + this.name;
    this.name = name;
    this.projectName = data.projectName;
    this.type = data.type;
    this.enabled = data.enabled;
    this.token = data.token;
    this.env = data.env;
    this.domains = data.domains;
    this.mounts = data.mounts;
    this.ports = data.ports;
    this.deploymentUrl = data.deploymentUrl;
  }

  private _select() {
    return {
      type: this.type,
      projectName: this.projectName,
      serviceName: this.name,
    };
  }

  async inspect() {
    return await this.manager.inspect(this._select());
  }

  async destroy() {
    return await this.manager.destroy(this._select());
  }

  async deployIt() {
    return await this.manager.deploy(this._select());
  }

  async enable() {
    return await this.manager.enable(this._select());
  }

  async disable() {
    return await this.manager.disable(this._select());
  }

  async getLogs() {
    return await this.manager.getServiceLogs(this._select());
  }
}

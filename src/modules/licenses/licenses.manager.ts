import { Client } from "@/Client";

import { LemonLicenseManager } from "./lemon.manager";
import { PortalLicenseManager } from "./portal.manager";

export class LicensesManager {
  lemon: LemonLicenseManager;
  portal: PortalLicenseManager;

  constructor(private client: Client) {
    this.lemon = new LemonLicenseManager(client);
    this.portal = new PortalLicenseManager(client);
  }
}

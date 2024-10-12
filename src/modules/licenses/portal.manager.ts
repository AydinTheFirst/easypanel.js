import { Client } from "@/Client";
import {
  ActivatePortalLicenseInput,
  DeactivatePortalLicenseInput,
} from "./portal.dto";
import { GetPortalLicensePayloadResponse } from "./portal.types";

export class PortalLicenseManager {
  constructor(private client: Client) {}

  async getLicense() {
    const { data } =
      await this.client.http.get<GetPortalLicensePayloadResponse>(
        "/portalLicense.getLicensePayload"
      );

    return data;
  }

  async activateLicense(input: ActivatePortalLicenseInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<ActivatePortalLicenseInput>(
      "/portalLicense.activateLicense",
      input
    );

    return data;
  }

  async deactivateLicense(input: DeactivatePortalLicenseInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<DeactivatePortalLicenseInput>(
      "/portalLicense.deactivateLicense",
      input
    );

    return data;
  }
}

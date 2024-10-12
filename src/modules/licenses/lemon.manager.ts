import { Client } from "@/Client";

import {
  ActivateByOrderInput,
  ActivateLemonLicenseInput,
  DeactivateLemonLicenseInput,
} from "./lemon.dto";
import {
  ActivateByOrderResponse,
  ActivateLemonLicenseResponse,
  DeactivateLemonLicenseResponse,
  GetLemonLicensePayloadResponse,
} from "./lemon.types";

export class LemonLicenseManager {
  constructor(private client: Client) {}

  async getLicense() {
    const { data } = await this.client.http.get<GetLemonLicensePayloadResponse>(
      "/lemonLicense.getLicensePayload"
    );

    return data;
  }

  async activateByOrder(input: ActivateByOrderInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<ActivateByOrderResponse>(
      "/lemonLicense.activateByOrder",
      input
    );

    return data;
  }

  async activateLicense(input: ActivateLemonLicenseInput) {
    const { data } = await this.client.http.post<ActivateLemonLicenseResponse>(
      "/lemonLicense.activateLicense",
      input
    );

    return data;
  }

  async deactivateLicense(input: DeactivateLemonLicenseInput) {
    const { data } =
      await this.client.http.post<DeactivateLemonLicenseResponse>(
        "/lemonLicense.deactivateLicense",
        input
      );

    return data;
  }
}

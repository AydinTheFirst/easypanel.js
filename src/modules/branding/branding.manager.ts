import { Client } from "@/Client";

import {
  GetErrorPageSettingsResponse,
  GetInterfaceSettingsResponse,
  SetErrorPageSettingsResponse,
  SetInterfaceSettingsResponse,
} from "./branding.types";
import {
  SetErrorPageSettingsInput,
  SetInterfaceSettingsInput,
} from "./branding.dto";

export class BrandingManager {
  constructor(private client: Client) {}

  async getErrorPageSettings() {
    const { data } = await this.client.http.get<GetErrorPageSettingsResponse>(
      "/branding.getErrorPageSettings"
    );

    return data;
  }

  async getInterfaceSettings() {
    const { data } = await this.client.http.get<GetInterfaceSettingsResponse>(
      "/branding.updateErrorPageSettings"
    );

    return data;
  }

  async setErrorPageSettings(body: SetErrorPageSettingsInput) {
    const { data } = await this.client.http.post<SetErrorPageSettingsResponse>(
      "/branding.setErrorPageSettings",
      body
    );

    return data;
  }

  async setInterfaceSettings(body: SetInterfaceSettingsInput) {
    const { data } = await this.client.http.post<SetInterfaceSettingsResponse>(
      "/branding.setInterfaceSettings",
      body
    );

    return data;
  }
}

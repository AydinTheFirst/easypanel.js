import { Client } from "@/Client";

import {
  ListCertificatesResponse,
  RemoveCertificateResponse,
} from "./certificates.types";
import { RemoveCertificateInput } from "./certificates.dto";

export class CertificatesManager {
  constructor(private client: Client) {}

  async list() {
    const { data } = await this.client.http.get<ListCertificatesResponse>(
      "/certificates.listCertificates"
    );

    return data;
  }

  async remove(body: RemoveCertificateInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<RemoveCertificateResponse>(
      "/certificates.removeCertificate",
      body
    );

    return data;
  }
}

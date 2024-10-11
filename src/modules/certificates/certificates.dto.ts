import { IsString } from "class-validator";

export class ListCertificatesInput {}

export class RemoveCertificateInput {
  @IsString()
  domain: string;
}

import { IsString } from "class-validator";

export class GetLemonLicensePayloadInput {}

export class ActivateByOrderInput {
  @IsString()
  orderId: string;

  @IsString()
  identifier: string;
}

export class ActivateLemonLicenseInput {
  @IsString()
  licenseKey: string;
}

export class DeactivateLemonLicenseInput {}

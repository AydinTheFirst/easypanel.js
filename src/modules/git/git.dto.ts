import { IsString } from "class-validator";

export class GetPublicKeyInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GenerateKeyInput extends GetPublicKeyInput {}

import { IsBoolean, IsString } from "class-validator";

export class GetErrorPageSettingsInput {}

export class GetInterfaceSettingsInput {}

export class SetErrorPageSettingsInput {
  @IsString()
  customLogo: string;

  @IsString()
  customCss: string;

  @IsBoolean()
  hideLogo: boolean;

  @IsBoolean()
  hideLinks: boolean;
}

export class SetInterfaceSettingsInput {
  @IsBoolean()
  hideIp: boolean;

  @IsBoolean()
  hideNotes: boolean;

  @IsString()
  lightLogo: string;

  @IsString()
  darkLogo: string;

  @IsString()
  serverName: string;

  @IsString()
  serverColor: string;
}

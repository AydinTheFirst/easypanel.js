export interface GetErrorPageSettingsResponse {
  customLogo: string;
  customCss: string;
  hideLogo: boolean;
  hideLinks: boolean;
}

export interface GetInterfaceSettingsResponse {
  hideIp: boolean;
  hideNotes: boolean;
  lightLogo: string;
  darkLogo: string;
  serverName: string;
  serverColor: string;
}

export interface SetErrorPageSettingsResponse {}

export interface SetInterfaceSettingsResponse {}

export interface ChangeCredentialsParams {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export interface IPanelDomain {
  serveOnIp: boolean;
  defaultPanelDomain: string;
  panelDomain: string;
}

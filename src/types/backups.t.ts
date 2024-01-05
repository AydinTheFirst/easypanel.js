export interface IRestoreParams {
  destinationId: string;
  path: string;
  projectName: string;
  serviceName: string;
}

export interface IBackupParams {
  name: string;
  secretAccessKey: string;
  accessKeyId: string;
  bucket: string;
  region: string;
  endpoint: string;
}

export interface IBackupDestRes {
  backupDestinations: {
    id: string;
    name: string;
    secretAccessKey: string;
    accessKeyId: string;
    bucket: string;
    region: string;
    endpoint: string;
  }[];
}

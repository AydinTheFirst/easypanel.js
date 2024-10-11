export interface BackupDestination {
  id: string;
  name: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucket: string;
  region: string;
  endpoint: string;
}

export interface ListBackupDestinationsResponse {
  backupDestinations: BackupDestination[];
}

export interface DestinationOptions {
  value: string;
  label: string;
}

export type ListDestinationOptionsResponse = DestinationOptions[];

export interface GetBackupLogResponse {
  log: string;
}

export interface ClearBackupLogResponse {}

export interface CreateBackupDestinationResponse {}

export interface UpdateBackupDestinationResponse {}

export interface DestroyBackupDestinationResponse {}

export interface RestoreBackupResponse {}

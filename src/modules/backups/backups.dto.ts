import { IsString } from "class-validator";

export class ListBackupDestinationsInput {}

export class ListDestinationOptionsInput {}

export class GetBackupLogInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class ClearBackupLogInput extends GetBackupLogInput {}

export class CreateBackupDestinationInput {
  @IsString()
  name: string;

  @IsString()
  accessKeyId: string;

  @IsString()
  secretAccessKey: string;

  @IsString()
  bucket: string;

  @IsString()
  region: string;

  @IsString()
  endpoint: string;
}

export class UpdateBackupDestinationInput extends CreateBackupDestinationInput {}

export class DestroyBackupDestinationInput {
  @IsString()
  id: string;
}

export class RestoreBackupInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsString()
  destinationId: string;

  @IsString()
  path: string;

  @IsString()
  databaseName: string;
}

import { IsString } from "class-validator";

export class GetSystemStatsInput {}

export class GetAdvancedStatsInput {}

export class GetServiceStatsInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetDockerTaskStatsInput {}

export class GetMonitorTableDataInput {}

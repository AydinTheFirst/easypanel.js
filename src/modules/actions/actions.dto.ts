import { IsNumber, IsString } from "class-validator";

export class ListActionsInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsString()
  type: string;

  @IsNumber()
  limit: number;
}

export class GetActionInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsString()
  id: string;
}

export class KillActionInput extends GetActionInput {} // since it's the same as GetActionInput, we can just extend it

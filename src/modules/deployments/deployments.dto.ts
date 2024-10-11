import { IsString } from "class-validator";

export class ListDeploymentsInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetDeploymentInput extends ListDeploymentsInput {
  @IsString()
  id: string;
}

export class KillDeploymentInput extends GetDeploymentInput {}

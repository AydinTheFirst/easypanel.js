export interface ListDeploymentsResponse {
  projectName: string;
  serviceName: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  status: "done" | "error" | "pending";
  description?: string;
}

export interface GetDeploymentResponse extends ListDeploymentsResponse {
  log: string;
}

export interface KillDeploymentResponse {}

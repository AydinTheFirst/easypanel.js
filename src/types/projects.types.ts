import { IRestResponse } from "../utils/REST.js";

import { Service } from "./services.types.js";

/**
 * Params
 */

export interface ProjectName {
  name: string;
}

export interface ProjectInfo extends ProjectName {
  createdAt: string;
}

export interface ProjectQueryConf {
  projectName: string;
}

/**
 * Returns
 */

export interface CanCreate extends IRestResponse {
  data?: boolean;
}

export interface Create extends IRestResponse {
  data?: ProjectInfo;
}

export interface Project extends IRestResponse {
  data?: {
    project: ProjectInfo;
    services: Service[];
  };
}

export interface ListProjects extends IRestResponse {
  data?: ProjectInfo[];
}

export interface ListWithServices extends IRestResponse {
  data?: {
    projects: ProjectInfo[];
    services: Service[];
  };
}

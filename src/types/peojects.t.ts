import { Service } from "./services.t.js";

export interface IProject {
  id: string;
  name: string;
  createdAt: string;
}

export interface IInspectedProject {
  project: {
    name: string;
    createdAt: string;
  };
  services: Service[];
}

export interface IProjectsWithServices {
  projects: IProject[];
  services: Service[];
}

export interface IDockerContainer {
  Id: string;
  Names: string[];
  Image: string;
  ImageID: string;
  Command: string;
  Created: number;
  Ports: { PrivatePort: number; Type: string }[];
  Labels: { [key: string]: string };
  State: string;
  Status: string;
  HostConfig: {
    NetworkMode: string;
  };
  NetworkSettings: {
    Networks: {
      [key: string]: {
        IPAMConfig: {
          IPv4Address: string;
        };
        Links: null;
        Aliases: null;
        NetworkID: string;
        EndpointID: string;
        Gateway: string;
        IPAddress: string;
        IPPrefixLen: number;
        IPv6Gateway: string;
        GlobalIPv6Address: string;
        GlobalIPv6PrefixLen: number;
        MacAddress: string;
        DriverOpts: null;
      };
    };
  };
  Mounts: {
    Type: string;
    Name: string;
    Source: string;
    Destination: string;
    Driver: string;
    Mode: string;
    RW: boolean;
    Propagation: string;
  }[];
}

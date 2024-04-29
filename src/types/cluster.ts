interface Plugin {
  Type: string;
  Name: string;
}

interface TLSInfo {
  TrustRoot: string;
  CertIssuerSubject: string;
  CertIssuerPublicKey: string;
}

interface ManagerStatus {
  Leader: boolean;
  Reachability: string;
  Addr: string;
}

interface Status {
  State: string;
  Addr: string;
  ManagerStatus?: ManagerStatus;
}

interface Engine {
  EngineVersion: string;
  Plugins: Plugin[];
}

interface Resources {
  NanoCPUs: number;
  MemoryBytes: number;
}

interface Platform {
  Architecture: string;
  OS: string;
}

interface Description {
  Hostname: string;
  Platform: Platform;
  Resources: Resources;
  Engine: Engine;
  TLSInfo: TLSInfo;
}

interface Spec {
  Labels: Record<string, unknown>;
  Role: string;
  Availability: string;
}

export interface Cluster {
  ID: string;
  Version: {
    Index: number;
  };
  CreatedAt: string;
  UpdatedAt: string;
  Spec: Spec;
  Description: Description;
  Status: Status;
}

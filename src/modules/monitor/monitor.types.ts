export interface GetSystemStatResponse {
  uptime: number;
  memInfo: {
    totalMemMb: number;
    usedMemMb: number;
    freeMemMb: number;
    usedMemPercentage: number;
    freeMemPercentage: number;
  };
  diskInfo: {
    totalGb: string;
    usedGb: string;
    freeGb: string;
    usedPercentage: string;
    freePercentage: string;
  };
  cpuInfo: {
    usedPercentage: number;
    count: number;
    loadavg: [number, number, number];
  };
  network: {
    inputMb: number;
    outputMb: number;
  };
}

interface CpuStats {
  value: string;
  time: string;
}

interface MemoryStats {
  value: string;
  time: string;
}

interface DiskStats {
  value: string;
  time: string;
}

interface NetworkStats {
  value: {
    inputMb: number;
    outputMb: number;
  };
  time: string;
}

export interface GetAdvancedStatResponse {
  cpuStats: CpuStats[];
  memoryStats: MemoryStats[];
  diskStats: DiskStats[];
  networkStats: NetworkStats[];
}

export interface GetServiceStatResponse {
  cpu: {
    percent: number;
  };
  memory: {
    usage: number;
    percent: number;
  };
  network: {
    in: number;
    out: number;
  };
}

export interface GetDockerTaskStatResponse {
  [key: string]: {
    actual: number;
    desired: number;
  };
}

export interface TableStats {
  id: string;
  stats: {
    cpu: {
      percent: number;
    };
    memory: {
      usage: number;
      percent: number;
    };
    network: {
      in: number;
      out: number;
    };
  };
  projectName: string;
  serviceName: string;
  containerName: string;
}

export type GetMonitorTableDatResponse = TableStats[];

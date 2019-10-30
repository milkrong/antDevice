export interface Device {
    ip: string;
    owner: string;
    cpuPct: number;
    memBytes: number;
    networkRxBytes: number;
    networkTxBytes: number;
}
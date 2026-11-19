export interface SupplierConnectionStatus {
    account: string | null;
    appKey: string | null;
    connected: boolean;
    connectedAt: Date | null;
    expiresAt: Date | null;
    expired: boolean;
    reconnectBy: Date | null;
}
export interface SupplierConnectionCreateRequest {
    code: string;
}

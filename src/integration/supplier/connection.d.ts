export interface SupplierConnectionStatus {
    account: string | null;
    appKey: string | null;
    connected: boolean;
    connectedAt: Date | null;
    expiresAt: Date | null;
    expired: boolean;
    reconnectBy: Date | null;
}
export interface SupplierConnectionActivity {
    importedAt: Date | null;
    orderedAt: Date | null;
    syncedAt: Date | null;
}
export interface SupplierConnectionCreateRequest {
    code: string;
}

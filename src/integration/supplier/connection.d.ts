export type SupplierConnectionSource = 'merchant' | 'platform';
export interface SupplierConnectionStatus {
    account: string | null;
    appKey: string | null;
    connected: boolean;
    connectedAt: Date | null;
    expiresAt: Date | null;
    expired: boolean;
    reconnectBy: Date | null;
    source: SupplierConnectionSource | null;
}

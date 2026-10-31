export interface PaymentConnectionStatus {
    account: string | null;
    configured: boolean;
    connected: boolean;
    connectedAt: Date | null;
    expired: boolean;
    expiresAt: Date | null;
    liveMode: boolean | null;
    userId: string | null;
}
export interface PaymentConnectionAuthorization {
    authorizationUrl: string;
    state: string;
}

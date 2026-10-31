import type { PaymentProviderEnum } from './provider.enum';
import type { PaymentBankAccountTypeEnum, PaymentRecipientStatusEnum, PaymentRecipientTypeEnum, PaymentTransferIntervalEnum } from './recipient.enum';
export interface PaymentRecipientBank {
    bank: string;
    branch: string;
    accountLast4: string;
    type: PaymentBankAccountTypeEnum;
}
export interface PaymentRecipientTransferSettings {
    enabled: boolean;
    interval: PaymentTransferIntervalEnum;
    day: number;
}
export interface PaymentRecipientSummary {
    recipientId: string;
    type: PaymentRecipientTypeEnum;
    documentMasked: string;
    name: string;
    status: PaymentRecipientStatusEnum;
    kycStatus: string | null;
    kycStatusReason: string | null;
    bank: PaymentRecipientBank | null;
    transferSettings: PaymentRecipientTransferSettings | null;
    createdAt: Date | null;
    syncedAt: Date;
}
export interface PaymentRecipientStatus {
    configured: boolean;
    connected: boolean;
    provider: PaymentProviderEnum;
    recipient: PaymentRecipientSummary | null;
    canSell: boolean;
    canWithdraw: boolean;
    kycAction: boolean;
}
export interface PaymentRecipientKycLink {
    url: string;
    qrCodeBase64: string | null;
    expiresAt: Date | null;
}

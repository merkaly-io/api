import type { PaymentAccountApprovalEnum, PaymentAccountCompanyTypeEnum, PaymentAccountDocumentStatusEnum, PaymentAccountPersonTypeEnum, PaymentPixKeyTypeEnum } from './account.enum';
import type { PaymentProviderEnum } from './provider.enum';
export interface PaymentAccountApproval {
    general: PaymentAccountApprovalEnum;
    commercialInfo: PaymentAccountApprovalEnum;
    documentation: PaymentAccountApprovalEnum;
    bankAccountInfo: PaymentAccountApprovalEnum;
}
export interface PaymentAccountWithdrawal {
    pixKeyType: PaymentPixKeyTypeEnum;
    pixKeyMasked: string;
    automatic: boolean;
}
export interface PaymentAccountSummary {
    accountId: string;
    walletId: string;
    personType: PaymentAccountPersonTypeEnum;
    documentMasked: string;
    name: string;
    email: string;
    approval: PaymentAccountApproval | null;
    withdrawal: PaymentAccountWithdrawal | null;
    createdAt: Date;
    syncedAt: Date;
}
export interface PaymentAccountStatus {
    configured: boolean;
    connected: boolean;
    provider: PaymentProviderEnum;
    account: PaymentAccountSummary | null;
    canSell: boolean;
    canWithdraw: boolean;
    kycAction: boolean;
    pixReady: boolean;
    warnings: string[];
    accountError: string | null;
}
export interface PaymentAccountDocument {
    id: string;
    type: string | null;
    title: string | null;
    description: string | null;
    status: PaymentAccountDocumentStatusEnum;
    onboardingUrl: string | null;
    onboardingUrlExpiresAt: Date | null;
}
export interface PaymentAccountOnboarding {
    documents: PaymentAccountDocument[];
    rejectReasons: string | null;
}
export interface PaymentAccountBalance {
    balance: number;
}
export interface PaymentAccountTransfer {
    id: string;
    amount: number;
    fee: number | null;
    status: string;
    failReason: string | null;
    createdAt: Date | null;
}
export interface PaymentAccountCommercialInfo {
    personType: PaymentAccountPersonTypeEnum;
    cpfCnpj: string;
    name: string | null;
    companyName: string | null;
    companyType: PaymentAccountCompanyTypeEnum | null;
    birthDate: string | null;
    email: string | null;
    mobilePhone: string | null;
    phone: string | null;
    incomeValue: number | null;
    site: string | null;
    address: {
        postalCode: string | null;
        street: string | null;
        number: string | null;
        complement: string | null;
        district: string | null;
        city: string | null;
        state: string | null;
    };
    status: PaymentAccountApprovalEnum | null;
    denialReason: string | null;
}

import type { PaymentAccountApprovalEnum, PaymentAccountCompanyTypeEnum, PaymentAccountDocumentStatusEnum, PaymentAccountReadinessEnum, PaymentAccountTypeEnum, PaymentPixKeyTypeEnum } from './account.enum';
import type { PaymentProviderEnum } from './provider.enum';
import type { FinanceBalanceMeta } from "../../finance/movement/movement";
export interface PaymentAccountApproval {
    general: PaymentAccountApprovalEnum;
    commercialInfo: PaymentAccountApprovalEnum;
    documentation: PaymentAccountApprovalEnum;
    bankAccountInfo: PaymentAccountApprovalEnum;
}
export interface PaymentAccountWithdrawal {
    pixKeyType: PaymentPixKeyTypeEnum;
    pixKeyMasked: string;
}
export interface PaymentAccountSummary {
    accountId: string;
    walletId: string;
    accountType: PaymentAccountTypeEnum;
    document: string;
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
export interface PaymentAccountHolder {
    name: string;
    document: string;
    birthDate?: string;
}
export interface PaymentAccountReadiness {
    canSell: boolean;
    payments: PaymentAccountReadinessEnum;
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
export interface PaymentAccountPending {
    amount: number;
    count: number;
    nextCreditDate: string | null;
}
export interface PaymentAccountBalance {
    balance: number;
    pending: PaymentAccountPending | null;
    withdrawable: number;
    withdrawableBeforeDebts: number;
    retained: number;
    debts: number;
    reservedForRefunds: number;
}
export interface PaymentAccountBalanceRead {
    balance: PaymentAccountBalance;
    meta: FinanceBalanceMeta;
}
export interface PaymentWithdrawableLedger {
    released: number;
    retained: number;
    withdrawn: number;
}
export interface PaymentAccountTransfer {
    id: string;
    amount: number;
    fee: number;
    netAmount: number;
    debtsCollected: number;
    status: string;
    failReason: string | null;
    createdAt: Date | null;
}
export type PaymentWithdrawalAuthorization = {
    status: 'APPROVED';
} | {
    status: 'REFUSED';
    refuseReason: string;
};
export interface PaymentAccountCommercialInfo {
    accountType: PaymentAccountTypeEnum;
    cpfCnpj: string;
    name: string | null;
    companyName: string | null;
    companyType: PaymentAccountCompanyTypeEnum | null;
    birthDate: string | null;
    email: string | null;
    mobilePhone: string | null;
    incomeValue: number | null;
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

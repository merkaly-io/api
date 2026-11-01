import type { FinancePaymentMethodEnum } from './payment.enum';
import type { PaymentChargeStatusEnum } from '../../integration/payment/charge.enum';
export type FinancePaymentReportStatus = PaymentChargeStatusEnum | 'UNKNOWN';
export interface FinancePaymentReportTotal {
    amount: number;
    count: number;
}
export interface FinancePaymentReportFailure {
    message: string;
    orgId: string;
    orgName: string;
}
export interface FinancePaymentReportStore {
    attemptCount: number;
    expiredCount: number;
    lastPaymentAt: Date | null;
    orgId: string;
    orgName: string;
    paidAmount: number;
    paidCount: number;
    rejectedCount: number;
}
export interface FinancePaymentReportSummary {
    attempts: Partial<Record<FinancePaymentReportStatus, number>> & {
        total: number;
    };
    failures: FinancePaymentReportFailure[];
    from: Date;
    methods: Partial<Record<FinancePaymentMethodEnum, FinancePaymentReportTotal>>;
    paid: FinancePaymentReportTotal;
    storeCount: number;
    stores: FinancePaymentReportStore[];
    to: Date;
}
export interface FinancePaymentReportCard {
    brand: string | null;
    last4: string | null;
}
export interface FinancePaymentReportItem {
    amount: number;
    attempt: number;
    card: FinancePaymentReportCard | null;
    createdAt: Date;
    message: string | null;
    method: FinancePaymentMethodEnum;
    orgId: string;
    orgName: string;
    paid: boolean;
    paymentId: string;
    provider: string;
    rawStatus: string;
    reference: string | null;
    saleId: string | null;
    saleNumber: string | null;
    status: FinancePaymentReportStatus;
    syncedAt: Date;
}
export interface FinancePaymentReportList {
    failures: FinancePaymentReportFailure[];
    items: FinancePaymentReportItem[];
    limit: number;
    page: number;
    total: number;
}

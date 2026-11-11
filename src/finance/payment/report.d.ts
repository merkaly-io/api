import type { FinancePaymentAttemptStatus } from './payment.entity';
import type { FinancePaymentMethodEnum, FinancePaymentStatusEnum } from './payment.enum';
export type FinancePaymentReportStatus = FinancePaymentAttemptStatus;
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
    splitProblemCount: number;
}
export interface FinancePaymentReportSummary {
    attempts: Partial<Record<FinancePaymentReportStatus, number>> & {
        total: number;
    };
    failures: FinancePaymentReportFailure[];
    from: Date;
    methods: Partial<Record<FinancePaymentMethodEnum, FinancePaymentReportTotal>>;
    paid: FinancePaymentReportTotal;
    splitProblemCount: number;
    storeCount: number;
    stores: FinancePaymentReportStore[];
    to: Date;
}
export interface FinancePaymentReportItem {
    amount: number;
    attempt: number;
    createdAt: Date;
    method: FinancePaymentMethodEnum;
    orgId: string;
    orgName: string;
    paid: boolean;
    paymentId: string;
    paymentStatus: FinancePaymentStatusEnum;
    provider: string;
    rawStatus: string;
    reference: string | null;
    saleId: string | null;
    saleNumber: string | null;
    splitProblem: string | null;
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

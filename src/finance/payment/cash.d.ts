import type { FinancePaymentReportFailure } from './report';
export interface FinanceCashDebtStore {
    amount: number;
    count: number;
    orgId: string;
    orgName: string;
}
export interface FinanceCashDebts {
    amount: number;
    count: number;
    stores: FinanceCashDebtStore[];
}
export interface FinanceCashReport {
    balance: number;
    debts: FinanceCashDebts;
    failures: FinancePaymentReportFailure[];
}

export declare enum FinanceWithdrawalStatusEnum {
    REQUESTED = "REQUESTED",
    PROCESSING = "PROCESSING",
    DONE = "DONE",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED"
}
export declare enum FinanceWithdrawalKindEnum {
    WITHDRAWAL = "WITHDRAWAL",
    DEBT = "DEBT"
}
export declare const FINANCE_WITHDRAWAL_OPEN_STATUSES: readonly FinanceWithdrawalStatusEnum[];

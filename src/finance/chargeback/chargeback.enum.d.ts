export declare enum FinanceChargebackStatusEnum {
    OPEN = "OPEN",
    IN_DISPUTE = "IN_DISPUTE",
    WON = "WON",
    LOST = "LOST"
}
export declare const FINANCE_CHARGEBACK_OPEN_STATUSES: readonly FinanceChargebackStatusEnum[];
export declare enum FinanceChargebackReasonEnum {
    FRAUD = "FRAUD",
    NOT_RECEIVED = "NOT_RECEIVED",
    PRODUCT_DISPUTE = "PRODUCT_DISPUTE",
    CANCELLED = "CANCELLED",
    PROCESSING_ERROR = "PROCESSING_ERROR",
    OTHER = "OTHER"
}

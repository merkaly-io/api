export declare enum FinancePaymentStatusEnum {
    PENDING = "PENDING",
    PAID = "PAID",
    CANCELLED = "CANCELLED",
    REFUNDED = "REFUNDED",
    REFUND_PENDING = "REFUND_PENDING",
    REFUND_PROCESSING = "REFUND_PROCESSING",
    DISPUTED = "DISPUTED",
    CHARGED_BACK = "CHARGED_BACK"
}
export declare const FINANCE_PAYMENT_PAID_STATUSES: readonly FinancePaymentStatusEnum[];
export declare enum FinancePaymentMethodEnum {
    PIX = "PIX",
    TRANSFER = "TRANSFER",
    CASH = "CASH",
    CRYPTO = "CRYPTO"
}

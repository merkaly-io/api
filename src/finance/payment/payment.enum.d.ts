export declare enum FinancePaymentStatusEnum {
    PENDING = "PENDING",
    PAID = "PAID",
    CANCELLED = "CANCELLED",
    REFUNDED = "REFUNDED",
    DISPUTED = "DISPUTED",
    CHARGED_BACK = "CHARGED_BACK"
}
export declare const FINANCE_PAYMENT_PAID_STATUSES: readonly FinancePaymentStatusEnum[];
export declare enum FinancePaymentMethodEnum {
    CARD = "CARD",
    PIX = "PIX",
    TRANSFER = "TRANSFER",
    CASH = "CASH",
    CRYPTO = "CRYPTO"
}
export declare enum FinancePaymentTypeEnum {
    SALE = "SALE",
    PURCHASE = "PURCHASE",
    SERVICE = "SERVICE"
}

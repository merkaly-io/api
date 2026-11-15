export declare enum OrderSaleStatusEnum {
    AWAITING_PAYMENT = "AWAITING_PAYMENT",
    PAID = "PAID",
    ORDERED = "ORDERED",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
}
export declare const SALE_OPEN_STATUSES: readonly OrderSaleStatusEnum[];
export declare const SALE_CANCELLABLE_STATUSES: readonly OrderSaleStatusEnum[];
export declare const WITHDRAWAL_HOLD_DAYS = 7;
export declare const WITHDRAWAL_HOLD_MS: number;
export declare enum OrderSaleSourceEnum {
    CHECKOUT = "CHECKOUT",
    ADMIN = "ADMIN",
    IMPORT = "IMPORT"
}

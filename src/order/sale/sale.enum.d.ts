export declare enum OrderSaleStatusEnum {
    AWAITING_PAYMENT = "AWAITING_PAYMENT",
    TO_ORDER = "TO_ORDER",
    ORDERED = "ORDERED",
    SUPPLIER_CANCELLED = "SUPPLIER_CANCELLED",
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

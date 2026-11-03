export declare enum OrderSaleStatusEnum {
    AWAITING_PAYMENT = "AWAITING_PAYMENT",
    PAID = "PAID",
    ORDERED = "ORDERED",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED"
}
export declare const SALE_OPEN_STATUSES: readonly OrderSaleStatusEnum[];
export declare enum OrderSaleSourceEnum {
    CHECKOUT = "CHECKOUT",
    ADMIN = "ADMIN",
    IMPORT = "IMPORT"
}

export declare enum OrderSupplierOrderStatusEnum {
    PLACED = "PLACED",
    AWAITING_PAYMENT = "AWAITING_PAYMENT",
    PAID = "PAID",
    SHIPPED = "SHIPPED",
    DELIVERED = "DELIVERED",
    CANCELLED = "CANCELLED",
    FAILED = "FAILED"
}
export declare const SUPPLIER_ORDER_PROGRESS: readonly OrderSupplierOrderStatusEnum[];
export declare const SUPPLIER_ORDER_SYNCABLE_STATUSES: readonly OrderSupplierOrderStatusEnum[];

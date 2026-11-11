export declare enum OrderPurchaseStatusEnum {
    TO_PLACE = "TO_PLACE",
    PLACED = "PLACED",
    AWAITING_PAYMENT = "AWAITING_PAYMENT",
    PAID = "PAID",
    SHIPPED = "SHIPPED",
    FAILED = "FAILED",
    CANCELLED = "CANCELLED"
}
export declare const PURCHASE_PLACEABLE_STATUSES: readonly OrderPurchaseStatusEnum[];
export declare const PURCHASE_CANCEL_BLOCKING_STATUSES: readonly OrderPurchaseStatusEnum[];
export declare const PURCHASE_CANCELLABLE_WITH_SALE_STATUSES: readonly OrderPurchaseStatusEnum[];
export declare const PURCHASE_SYNCABLE_STATUSES: readonly OrderPurchaseStatusEnum[];
export declare const PURCHASE_PROGRESS: readonly OrderPurchaseStatusEnum[];

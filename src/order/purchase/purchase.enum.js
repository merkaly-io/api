"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PURCHASE_PROGRESS = exports.PURCHASE_SYNCABLE_STATUSES = exports.PURCHASE_CANCELLABLE_WITH_SALE_STATUSES = exports.PURCHASE_CANCEL_BLOCKING_STATUSES = exports.PURCHASE_PLACEABLE_STATUSES = exports.OrderPurchaseStatusEnum = void 0;
var OrderPurchaseStatusEnum;
(function (OrderPurchaseStatusEnum) {
    OrderPurchaseStatusEnum["TO_PLACE"] = "TO_PLACE";
    OrderPurchaseStatusEnum["PLACED"] = "PLACED";
    OrderPurchaseStatusEnum["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    OrderPurchaseStatusEnum["PAID"] = "PAID";
    OrderPurchaseStatusEnum["SHIPPED"] = "SHIPPED";
    OrderPurchaseStatusEnum["FAILED"] = "FAILED";
    OrderPurchaseStatusEnum["CANCELLED"] = "CANCELLED";
})(OrderPurchaseStatusEnum || (exports.OrderPurchaseStatusEnum = OrderPurchaseStatusEnum = {}));
exports.PURCHASE_PLACEABLE_STATUSES = [
    OrderPurchaseStatusEnum.TO_PLACE,
    OrderPurchaseStatusEnum.FAILED,
];
exports.PURCHASE_CANCEL_BLOCKING_STATUSES = [
    OrderPurchaseStatusEnum.PAID,
    OrderPurchaseStatusEnum.SHIPPED,
];
exports.PURCHASE_CANCELLABLE_WITH_SALE_STATUSES = [
    OrderPurchaseStatusEnum.TO_PLACE,
    OrderPurchaseStatusEnum.PLACED,
    OrderPurchaseStatusEnum.AWAITING_PAYMENT,
    OrderPurchaseStatusEnum.FAILED,
];
exports.PURCHASE_SYNCABLE_STATUSES = [
    OrderPurchaseStatusEnum.PLACED,
    OrderPurchaseStatusEnum.AWAITING_PAYMENT,
    OrderPurchaseStatusEnum.PAID,
    OrderPurchaseStatusEnum.SHIPPED,
];
exports.PURCHASE_PROGRESS = [
    OrderPurchaseStatusEnum.PLACED,
    OrderPurchaseStatusEnum.AWAITING_PAYMENT,
    OrderPurchaseStatusEnum.PAID,
    OrderPurchaseStatusEnum.SHIPPED,
];
//# sourceMappingURL=purchase.enum.js.map
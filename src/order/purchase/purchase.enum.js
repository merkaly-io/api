"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PURCHASE_INCOMING_STATUSES = exports.PURCHASE_OPEN_STATUSES = exports.OrderPurchaseStatusEnum = void 0;
var OrderPurchaseStatusEnum;
(function (OrderPurchaseStatusEnum) {
    OrderPurchaseStatusEnum["OPEN"] = "OPEN";
    OrderPurchaseStatusEnum["ORDERED"] = "ORDERED";
    OrderPurchaseStatusEnum["RECEIVED"] = "RECEIVED";
    OrderPurchaseStatusEnum["CANCELLED"] = "CANCELLED";
})(OrderPurchaseStatusEnum || (exports.OrderPurchaseStatusEnum = OrderPurchaseStatusEnum = {}));
exports.PURCHASE_OPEN_STATUSES = [
    OrderPurchaseStatusEnum.OPEN,
    OrderPurchaseStatusEnum.ORDERED,
];
exports.PURCHASE_INCOMING_STATUSES = [
    OrderPurchaseStatusEnum.ORDERED,
];
//# sourceMappingURL=purchase.enum.js.map
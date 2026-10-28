"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALE_OPEN_STATUSES = exports.SALE_PRE_FULFILLMENT_STATUSES = exports.OrderSaleStatusEnum = void 0;
var OrderSaleStatusEnum;
(function (OrderSaleStatusEnum) {
    OrderSaleStatusEnum["OPEN"] = "OPEN";
    OrderSaleStatusEnum["IN_PROGRESS"] = "IN_PROGRESS";
    OrderSaleStatusEnum["COMPLETED"] = "COMPLETED";
    OrderSaleStatusEnum["CANCELLED"] = "CANCELLED";
    OrderSaleStatusEnum["RETURNED"] = "RETURNED";
})(OrderSaleStatusEnum || (exports.OrderSaleStatusEnum = OrderSaleStatusEnum = {}));
exports.SALE_PRE_FULFILLMENT_STATUSES = [
    OrderSaleStatusEnum.OPEN,
];
exports.SALE_OPEN_STATUSES = [
    ...exports.SALE_PRE_FULFILLMENT_STATUSES,
    OrderSaleStatusEnum.IN_PROGRESS,
];
//# sourceMappingURL=sale.enum.js.map
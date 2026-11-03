"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALE_OPEN_STATUSES = exports.OrderSaleStatusEnum = void 0;
var OrderSaleStatusEnum;
(function (OrderSaleStatusEnum) {
    OrderSaleStatusEnum["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    OrderSaleStatusEnum["PAID"] = "PAID";
    OrderSaleStatusEnum["ORDERED"] = "ORDERED";
    OrderSaleStatusEnum["SHIPPED"] = "SHIPPED";
    OrderSaleStatusEnum["DELIVERED"] = "DELIVERED";
    OrderSaleStatusEnum["CANCELLED"] = "CANCELLED";
})(OrderSaleStatusEnum || (exports.OrderSaleStatusEnum = OrderSaleStatusEnum = {}));
exports.SALE_OPEN_STATUSES = [
    OrderSaleStatusEnum.AWAITING_PAYMENT,
    OrderSaleStatusEnum.PAID,
    OrderSaleStatusEnum.ORDERED,
    OrderSaleStatusEnum.SHIPPED,
];
//# sourceMappingURL=sale.enum.js.map
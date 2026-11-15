"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSaleSourceEnum = exports.WITHDRAWAL_HOLD_MS = exports.WITHDRAWAL_HOLD_DAYS = exports.SALE_CANCELLABLE_STATUSES = exports.SALE_OPEN_STATUSES = exports.OrderSaleStatusEnum = void 0;
var OrderSaleStatusEnum;
(function (OrderSaleStatusEnum) {
    OrderSaleStatusEnum["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    OrderSaleStatusEnum["TO_ORDER"] = "TO_ORDER";
    OrderSaleStatusEnum["ORDERED"] = "ORDERED";
    OrderSaleStatusEnum["SUPPLIER_CANCELLED"] = "SUPPLIER_CANCELLED";
    OrderSaleStatusEnum["SHIPPED"] = "SHIPPED";
    OrderSaleStatusEnum["DELIVERED"] = "DELIVERED";
    OrderSaleStatusEnum["CANCELLED"] = "CANCELLED";
})(OrderSaleStatusEnum || (exports.OrderSaleStatusEnum = OrderSaleStatusEnum = {}));
exports.SALE_OPEN_STATUSES = [
    OrderSaleStatusEnum.AWAITING_PAYMENT,
    OrderSaleStatusEnum.TO_ORDER,
    OrderSaleStatusEnum.ORDERED,
    OrderSaleStatusEnum.SUPPLIER_CANCELLED,
    OrderSaleStatusEnum.SHIPPED,
];
exports.SALE_CANCELLABLE_STATUSES = [
    OrderSaleStatusEnum.AWAITING_PAYMENT,
    OrderSaleStatusEnum.TO_ORDER,
    OrderSaleStatusEnum.ORDERED,
    OrderSaleStatusEnum.SUPPLIER_CANCELLED,
];
exports.WITHDRAWAL_HOLD_DAYS = 7;
exports.WITHDRAWAL_HOLD_MS = exports.WITHDRAWAL_HOLD_DAYS * 86_400_000;
var OrderSaleSourceEnum;
(function (OrderSaleSourceEnum) {
    OrderSaleSourceEnum["CHECKOUT"] = "CHECKOUT";
    OrderSaleSourceEnum["ADMIN"] = "ADMIN";
    OrderSaleSourceEnum["IMPORT"] = "IMPORT";
})(OrderSaleSourceEnum || (exports.OrderSaleSourceEnum = OrderSaleSourceEnum = {}));
//# sourceMappingURL=sale.enum.js.map
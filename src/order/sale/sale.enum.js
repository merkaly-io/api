"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDER_SALE_NUMBER_PREFIX = exports.OrderCheckoutErrorCodeEnum = exports.OrderSaleSourceEnum = exports.WITHDRAWAL_HOLD_MS = exports.WITHDRAWAL_HOLD_DAYS = exports.SALE_REFUND_MS = exports.SALE_REFUND_DAYS = exports.OrderSaleCancelByEnum = exports.SALE_CANCELLABLE_STATUSES = exports.SALE_PAID_STATUSES = exports.SALE_OPEN_STATUSES = exports.OrderSaleStatusEnum = void 0;
var OrderSaleStatusEnum;
(function (OrderSaleStatusEnum) {
    OrderSaleStatusEnum["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    OrderSaleStatusEnum["TO_ORDER"] = "TO_ORDER";
    OrderSaleStatusEnum["TO_PAY"] = "TO_PAY";
    OrderSaleStatusEnum["ORDERED"] = "ORDERED";
    OrderSaleStatusEnum["SUPPLIER_CANCELLED"] = "SUPPLIER_CANCELLED";
    OrderSaleStatusEnum["SHIPPED"] = "SHIPPED";
    OrderSaleStatusEnum["DELIVERED"] = "DELIVERED";
    OrderSaleStatusEnum["CANCELLED"] = "CANCELLED";
})(OrderSaleStatusEnum || (exports.OrderSaleStatusEnum = OrderSaleStatusEnum = {}));
exports.SALE_OPEN_STATUSES = [
    OrderSaleStatusEnum.AWAITING_PAYMENT,
    OrderSaleStatusEnum.TO_ORDER,
    OrderSaleStatusEnum.TO_PAY,
    OrderSaleStatusEnum.ORDERED,
    OrderSaleStatusEnum.SUPPLIER_CANCELLED,
    OrderSaleStatusEnum.SHIPPED,
];
exports.SALE_PAID_STATUSES = [
    OrderSaleStatusEnum.TO_ORDER,
    OrderSaleStatusEnum.TO_PAY,
    OrderSaleStatusEnum.ORDERED,
    OrderSaleStatusEnum.SUPPLIER_CANCELLED,
    OrderSaleStatusEnum.SHIPPED,
    OrderSaleStatusEnum.DELIVERED,
];
exports.SALE_CANCELLABLE_STATUSES = [
    OrderSaleStatusEnum.AWAITING_PAYMENT,
    OrderSaleStatusEnum.TO_ORDER,
    OrderSaleStatusEnum.TO_PAY,
    OrderSaleStatusEnum.ORDERED,
    OrderSaleStatusEnum.SUPPLIER_CANCELLED,
];
var OrderSaleCancelByEnum;
(function (OrderSaleCancelByEnum) {
    OrderSaleCancelByEnum["BUYER"] = "BUYER";
    OrderSaleCancelByEnum["MERCHANT"] = "MERCHANT";
    OrderSaleCancelByEnum["SUPPLIER"] = "SUPPLIER";
})(OrderSaleCancelByEnum || (exports.OrderSaleCancelByEnum = OrderSaleCancelByEnum = {}));
exports.SALE_REFUND_DAYS = 7;
exports.SALE_REFUND_MS = exports.SALE_REFUND_DAYS * 86_400_000;
exports.WITHDRAWAL_HOLD_DAYS = 7;
exports.WITHDRAWAL_HOLD_MS = exports.WITHDRAWAL_HOLD_DAYS * 86_400_000;
var OrderSaleSourceEnum;
(function (OrderSaleSourceEnum) {
    OrderSaleSourceEnum["CHECKOUT"] = "CHECKOUT";
    OrderSaleSourceEnum["ADMIN"] = "ADMIN";
    OrderSaleSourceEnum["IMPORT"] = "IMPORT";
})(OrderSaleSourceEnum || (exports.OrderSaleSourceEnum = OrderSaleSourceEnum = {}));
var OrderCheckoutErrorCodeEnum;
(function (OrderCheckoutErrorCodeEnum) {
    OrderCheckoutErrorCodeEnum["TOTAL_CHANGED"] = "CHECKOUT_TOTAL_CHANGED";
})(OrderCheckoutErrorCodeEnum || (exports.OrderCheckoutErrorCodeEnum = OrderCheckoutErrorCodeEnum = {}));
exports.ORDER_SALE_NUMBER_PREFIX = 'SLS';
//# sourceMappingURL=sale.enum.js.map
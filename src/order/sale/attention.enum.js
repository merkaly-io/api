"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALE_SHIPMENT_DELAY_DAYS = exports.SALE_ACTIONABLE_ATTENTIONS = exports.OrderSaleAttentionEnum = void 0;
var OrderSaleAttentionEnum;
(function (OrderSaleAttentionEnum) {
    OrderSaleAttentionEnum["SUPPLIER_ORDER_FAILED"] = "SUPPLIER_ORDER_FAILED";
    OrderSaleAttentionEnum["SUPPLIER_PAYMENT_PENDING"] = "SUPPLIER_PAYMENT_PENDING";
    OrderSaleAttentionEnum["SHIPMENT_EXCEPTION"] = "SHIPMENT_EXCEPTION";
    OrderSaleAttentionEnum["TO_ORDER"] = "TO_ORDER";
    OrderSaleAttentionEnum["SHIPMENT_DELAYED"] = "SHIPMENT_DELAYED";
})(OrderSaleAttentionEnum || (exports.OrderSaleAttentionEnum = OrderSaleAttentionEnum = {}));
exports.SALE_ACTIONABLE_ATTENTIONS = [
    OrderSaleAttentionEnum.SUPPLIER_ORDER_FAILED,
    OrderSaleAttentionEnum.SUPPLIER_PAYMENT_PENDING,
    OrderSaleAttentionEnum.SHIPMENT_EXCEPTION,
    OrderSaleAttentionEnum.TO_ORDER,
];
exports.SALE_SHIPMENT_DELAY_DAYS = 7;
//# sourceMappingURL=attention.enum.js.map
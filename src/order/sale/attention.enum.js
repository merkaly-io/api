"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALE_SHIPMENT_DELAY_DAYS = exports.OrderSaleAttentionEnum = void 0;
var OrderSaleAttentionEnum;
(function (OrderSaleAttentionEnum) {
    OrderSaleAttentionEnum["SUPPLIER_ORDER_FAILED"] = "SUPPLIER_ORDER_FAILED";
    OrderSaleAttentionEnum["SUPPLIER_PAYMENT_PENDING"] = "SUPPLIER_PAYMENT_PENDING";
    OrderSaleAttentionEnum["TO_ORDER"] = "TO_ORDER";
    OrderSaleAttentionEnum["PAYMENT_TO_CONFIRM"] = "PAYMENT_TO_CONFIRM";
    OrderSaleAttentionEnum["SHIPMENT_DELAYED"] = "SHIPMENT_DELAYED";
})(OrderSaleAttentionEnum || (exports.OrderSaleAttentionEnum = OrderSaleAttentionEnum = {}));
exports.SALE_SHIPMENT_DELAY_DAYS = 7;
//# sourceMappingURL=attention.enum.js.map
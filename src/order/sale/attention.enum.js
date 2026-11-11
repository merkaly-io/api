"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALE_SHIPMENT_DELAY_DAYS = exports.SALE_ACTIONABLE_ATTENTIONS = exports.OrderSaleAttentionEnum = void 0;
var OrderSaleAttentionEnum;
(function (OrderSaleAttentionEnum) {
    OrderSaleAttentionEnum["PAYMENT_AMOUNT_MISMATCH"] = "PAYMENT_AMOUNT_MISMATCH";
    OrderSaleAttentionEnum["PAYMENT_DISPUTED"] = "PAYMENT_DISPUTED";
    OrderSaleAttentionEnum["CHARGED_BACK_WITH_SUPPLIER_ORDER"] = "CHARGED_BACK_WITH_SUPPLIER_ORDER";
    OrderSaleAttentionEnum["REFUNDED_OUTSIDE_WITH_SUPPLIER_ORDER"] = "REFUNDED_OUTSIDE_WITH_SUPPLIER_ORDER";
    OrderSaleAttentionEnum["SUPPLIER_PAID_AFTER_CANCEL"] = "SUPPLIER_PAID_AFTER_CANCEL";
    OrderSaleAttentionEnum["SUPPLIER_ORDER_FAILED"] = "SUPPLIER_ORDER_FAILED";
    OrderSaleAttentionEnum["SUPPLIER_PAYMENT_PENDING"] = "SUPPLIER_PAYMENT_PENDING";
    OrderSaleAttentionEnum["SHIPMENT_EXCEPTION"] = "SHIPMENT_EXCEPTION";
    OrderSaleAttentionEnum["AUTO_PROCUREMENT_FAILED"] = "AUTO_PROCUREMENT_FAILED";
    OrderSaleAttentionEnum["TO_ORDER"] = "TO_ORDER";
    OrderSaleAttentionEnum["SHIPMENT_DELAYED"] = "SHIPMENT_DELAYED";
    OrderSaleAttentionEnum["PARTIAL_REFUND_OUTSIDE"] = "PARTIAL_REFUND_OUTSIDE";
    OrderSaleAttentionEnum["PAID_AFTER_CANCEL_REFUNDED"] = "PAID_AFTER_CANCEL_REFUNDED";
})(OrderSaleAttentionEnum || (exports.OrderSaleAttentionEnum = OrderSaleAttentionEnum = {}));
exports.SALE_ACTIONABLE_ATTENTIONS = [
    OrderSaleAttentionEnum.PAYMENT_AMOUNT_MISMATCH,
    OrderSaleAttentionEnum.PAYMENT_DISPUTED,
    OrderSaleAttentionEnum.CHARGED_BACK_WITH_SUPPLIER_ORDER,
    OrderSaleAttentionEnum.REFUNDED_OUTSIDE_WITH_SUPPLIER_ORDER,
    OrderSaleAttentionEnum.SUPPLIER_PAID_AFTER_CANCEL,
    OrderSaleAttentionEnum.SUPPLIER_ORDER_FAILED,
    OrderSaleAttentionEnum.SUPPLIER_PAYMENT_PENDING,
    OrderSaleAttentionEnum.SHIPMENT_EXCEPTION,
    OrderSaleAttentionEnum.AUTO_PROCUREMENT_FAILED,
    OrderSaleAttentionEnum.TO_ORDER,
];
exports.SALE_SHIPMENT_DELAY_DAYS = 7;
//# sourceMappingURL=attention.enum.js.map
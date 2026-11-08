"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSaleHistoryEventEnum = exports.OrderSaleCostSourceEnum = exports.OrderFulfillmentActionEnum = exports.BUYER_STAGE_GROUPS = exports.OrderBuyerStageEnum = void 0;
const sale_enum_1 = require('./sale.enum');
var OrderBuyerStageEnum;
(function (OrderBuyerStageEnum) {
    OrderBuyerStageEnum["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    OrderBuyerStageEnum["IN_PREPARATION"] = "IN_PREPARATION";
    OrderBuyerStageEnum["SHIPPED"] = "SHIPPED";
    OrderBuyerStageEnum["DELIVERED"] = "DELIVERED";
    OrderBuyerStageEnum["CANCELLED"] = "CANCELLED";
})(OrderBuyerStageEnum || (exports.OrderBuyerStageEnum = OrderBuyerStageEnum = {}));
exports.BUYER_STAGE_GROUPS = {
    [OrderBuyerStageEnum.AWAITING_PAYMENT]: [sale_enum_1.OrderSaleStatusEnum.AWAITING_PAYMENT],
    [OrderBuyerStageEnum.IN_PREPARATION]: [sale_enum_1.OrderSaleStatusEnum.PAID, sale_enum_1.OrderSaleStatusEnum.ORDERED],
    [OrderBuyerStageEnum.SHIPPED]: [sale_enum_1.OrderSaleStatusEnum.SHIPPED],
    [OrderBuyerStageEnum.DELIVERED]: [sale_enum_1.OrderSaleStatusEnum.DELIVERED],
    [OrderBuyerStageEnum.CANCELLED]: [sale_enum_1.OrderSaleStatusEnum.CANCELLED],
};
var OrderFulfillmentActionEnum;
(function (OrderFulfillmentActionEnum) {
    OrderFulfillmentActionEnum["PROCURE"] = "PROCURE";
    OrderFulfillmentActionEnum["PLACE_SUPPLIER_ORDER"] = "PLACE_SUPPLIER_ORDER";
    OrderFulfillmentActionEnum["PAY_SUPPLIER_ORDER"] = "PAY_SUPPLIER_ORDER";
    OrderFulfillmentActionEnum["SYNC_SUPPLIER_ORDER"] = "SYNC_SUPPLIER_ORDER";
    OrderFulfillmentActionEnum["NONE"] = "NONE";
})(OrderFulfillmentActionEnum || (exports.OrderFulfillmentActionEnum = OrderFulfillmentActionEnum = {}));
var OrderSaleCostSourceEnum;
(function (OrderSaleCostSourceEnum) {
    OrderSaleCostSourceEnum["ESTIMATED"] = "ESTIMATED";
    OrderSaleCostSourceEnum["CONFIRMED"] = "CONFIRMED";
})(OrderSaleCostSourceEnum || (exports.OrderSaleCostSourceEnum = OrderSaleCostSourceEnum = {}));
var OrderSaleHistoryEventEnum;
(function (OrderSaleHistoryEventEnum) {
    OrderSaleHistoryEventEnum["CREATED"] = "CREATED";
    OrderSaleHistoryEventEnum["PAYMENT_CONFIRMED"] = "PAYMENT_CONFIRMED";
    OrderSaleHistoryEventEnum["PAYMENT_CANCELLED"] = "PAYMENT_CANCELLED";
    OrderSaleHistoryEventEnum["PAYMENT_REFUNDED"] = "PAYMENT_REFUNDED";
    OrderSaleHistoryEventEnum["PAYMENT_DISPUTED"] = "PAYMENT_DISPUTED";
    OrderSaleHistoryEventEnum["PAYMENT_CHARGED_BACK"] = "PAYMENT_CHARGED_BACK";
    OrderSaleHistoryEventEnum["PURCHASE_CREATED"] = "PURCHASE_CREATED";
    OrderSaleHistoryEventEnum["PURCHASE_CANCELLED"] = "PURCHASE_CANCELLED";
    OrderSaleHistoryEventEnum["SUPPLIER_ORDER_PLACED"] = "SUPPLIER_ORDER_PLACED";
    OrderSaleHistoryEventEnum["SUPPLIER_ORDER_SYNCED"] = "SUPPLIER_ORDER_SYNCED";
    OrderSaleHistoryEventEnum["SHIPMENT_SHIPPED"] = "SHIPMENT_SHIPPED";
    OrderSaleHistoryEventEnum["SHIPMENT_DELIVERED"] = "SHIPMENT_DELIVERED";
    OrderSaleHistoryEventEnum["SALE_CANCELLED"] = "SALE_CANCELLED";
})(OrderSaleHistoryEventEnum || (exports.OrderSaleHistoryEventEnum = OrderSaleHistoryEventEnum = {}));
//# sourceMappingURL=fulfillment.enum.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSaleHistoryEventEnum = exports.OrderSaleCostSourceEnum = exports.OrderFulfillmentActionEnum = exports.BUYER_STAGE_GROUPS = exports.OrderBuyerStageEnum = exports.OrderFulfillmentStageEnum = void 0;
var OrderFulfillmentStageEnum;
(function (OrderFulfillmentStageEnum) {
    OrderFulfillmentStageEnum["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    OrderFulfillmentStageEnum["TO_ORDER"] = "TO_ORDER";
    OrderFulfillmentStageEnum["ORDERED"] = "ORDERED";
    OrderFulfillmentStageEnum["SHIPPED"] = "SHIPPED";
    OrderFulfillmentStageEnum["DELIVERED"] = "DELIVERED";
    OrderFulfillmentStageEnum["CANCELLED"] = "CANCELLED";
})(OrderFulfillmentStageEnum || (exports.OrderFulfillmentStageEnum = OrderFulfillmentStageEnum = {}));
var OrderBuyerStageEnum;
(function (OrderBuyerStageEnum) {
    OrderBuyerStageEnum["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    OrderBuyerStageEnum["IN_PREPARATION"] = "IN_PREPARATION";
    OrderBuyerStageEnum["SHIPPED"] = "SHIPPED";
    OrderBuyerStageEnum["DELIVERED"] = "DELIVERED";
    OrderBuyerStageEnum["CANCELLED"] = "CANCELLED";
})(OrderBuyerStageEnum || (exports.OrderBuyerStageEnum = OrderBuyerStageEnum = {}));
exports.BUYER_STAGE_GROUPS = {
    [OrderBuyerStageEnum.AWAITING_PAYMENT]: [OrderFulfillmentStageEnum.AWAITING_PAYMENT],
    [OrderBuyerStageEnum.IN_PREPARATION]: [
        OrderFulfillmentStageEnum.TO_ORDER,
        OrderFulfillmentStageEnum.ORDERED,
    ],
    [OrderBuyerStageEnum.SHIPPED]: [OrderFulfillmentStageEnum.SHIPPED],
    [OrderBuyerStageEnum.DELIVERED]: [OrderFulfillmentStageEnum.DELIVERED],
    [OrderBuyerStageEnum.CANCELLED]: [OrderFulfillmentStageEnum.CANCELLED],
};
var OrderFulfillmentActionEnum;
(function (OrderFulfillmentActionEnum) {
    OrderFulfillmentActionEnum["CONFIRM_PAYMENT"] = "CONFIRM_PAYMENT";
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
    OrderSaleHistoryEventEnum["SALE_IN_PROGRESS"] = "SALE_IN_PROGRESS";
    OrderSaleHistoryEventEnum["SALE_COMPLETED"] = "SALE_COMPLETED";
    OrderSaleHistoryEventEnum["SALE_CANCELLED"] = "SALE_CANCELLED";
    OrderSaleHistoryEventEnum["SALE_RETURNED"] = "SALE_RETURNED";
    OrderSaleHistoryEventEnum["PURCHASE_CREATED"] = "PURCHASE_CREATED";
    OrderSaleHistoryEventEnum["PURCHASE_CANCELLED"] = "PURCHASE_CANCELLED";
    OrderSaleHistoryEventEnum["SUPPLIER_ORDER_PLACED"] = "SUPPLIER_ORDER_PLACED";
    OrderSaleHistoryEventEnum["SUPPLIER_ORDER_SYNCED"] = "SUPPLIER_ORDER_SYNCED";
})(OrderSaleHistoryEventEnum || (exports.OrderSaleHistoryEventEnum = OrderSaleHistoryEventEnum = {}));
//# sourceMappingURL=fulfillment.enum.js.map
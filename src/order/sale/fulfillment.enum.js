"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFulfillmentActionEnum = exports.OrderFulfillmentStageEnum = void 0;
var OrderFulfillmentStageEnum;
(function (OrderFulfillmentStageEnum) {
    OrderFulfillmentStageEnum["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    OrderFulfillmentStageEnum["TO_ORDER"] = "TO_ORDER";
    OrderFulfillmentStageEnum["ORDERED"] = "ORDERED";
    OrderFulfillmentStageEnum["SHIPPED"] = "SHIPPED";
    OrderFulfillmentStageEnum["DELIVERED"] = "DELIVERED";
    OrderFulfillmentStageEnum["CANCELLED"] = "CANCELLED";
})(OrderFulfillmentStageEnum || (exports.OrderFulfillmentStageEnum = OrderFulfillmentStageEnum = {}));
var OrderFulfillmentActionEnum;
(function (OrderFulfillmentActionEnum) {
    OrderFulfillmentActionEnum["CONFIRM_PAYMENT"] = "CONFIRM_PAYMENT";
    OrderFulfillmentActionEnum["PROCURE"] = "PROCURE";
    OrderFulfillmentActionEnum["PLACE_SUPPLIER_ORDER"] = "PLACE_SUPPLIER_ORDER";
    OrderFulfillmentActionEnum["REGISTER_SUPPLIER_ORDER"] = "REGISTER_SUPPLIER_ORDER";
    OrderFulfillmentActionEnum["PAY_SUPPLIER_ORDER"] = "PAY_SUPPLIER_ORDER";
    OrderFulfillmentActionEnum["SYNC_SUPPLIER_ORDER"] = "SYNC_SUPPLIER_ORDER";
    OrderFulfillmentActionEnum["NONE"] = "NONE";
})(OrderFulfillmentActionEnum || (exports.OrderFulfillmentActionEnum = OrderFulfillmentActionEnum = {}));
//# sourceMappingURL=fulfillment.enum.js.map
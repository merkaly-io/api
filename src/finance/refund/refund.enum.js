"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceRefundReasonEnum = exports.FinanceRefundStatusEnum = void 0;
var FinanceRefundStatusEnum;
(function (FinanceRefundStatusEnum) {
    FinanceRefundStatusEnum["PENDING"] = "PENDING";
    FinanceRefundStatusEnum["APPROVED"] = "APPROVED";
    FinanceRefundStatusEnum["PROCESSING"] = "PROCESSING";
    FinanceRefundStatusEnum["COMPLETED"] = "COMPLETED";
    FinanceRefundStatusEnum["REJECTED"] = "REJECTED";
    FinanceRefundStatusEnum["CANCELLED"] = "CANCELLED";
})(FinanceRefundStatusEnum || (exports.FinanceRefundStatusEnum = FinanceRefundStatusEnum = {}));
var FinanceRefundReasonEnum;
(function (FinanceRefundReasonEnum) {
    FinanceRefundReasonEnum["CUSTOMER_REQUEST"] = "CUSTOMER_REQUEST";
    FinanceRefundReasonEnum["DEFECTIVE_PRODUCT"] = "DEFECTIVE_PRODUCT";
    FinanceRefundReasonEnum["WRONG_ITEM"] = "WRONG_ITEM";
    FinanceRefundReasonEnum["ORDER_CANCELLED"] = "ORDER_CANCELLED";
    FinanceRefundReasonEnum["DUPLICATE_CHARGE"] = "DUPLICATE_CHARGE";
    FinanceRefundReasonEnum["OTHER"] = "OTHER";
})(FinanceRefundReasonEnum || (exports.FinanceRefundReasonEnum = FinanceRefundReasonEnum = {}));
//# sourceMappingURL=refund.enum.js.map
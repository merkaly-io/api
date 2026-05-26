"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SALE_OPEN_TRANSACTION_STATUSES = exports.SALE_PRE_FULFILLMENT_TRANSACTION_STATUSES = exports.SaleTransactionStatusEnum = void 0;
var SaleTransactionStatusEnum;
(function (SaleTransactionStatusEnum) {
    SaleTransactionStatusEnum["OPEN"] = "OPEN";
    SaleTransactionStatusEnum["IN_PROGRESS"] = "IN_PROGRESS";
    SaleTransactionStatusEnum["COMPLETED"] = "COMPLETED";
    SaleTransactionStatusEnum["CANCELLED"] = "CANCELLED";
})(SaleTransactionStatusEnum || (exports.SaleTransactionStatusEnum = SaleTransactionStatusEnum = {}));
exports.SALE_PRE_FULFILLMENT_TRANSACTION_STATUSES = [
    SaleTransactionStatusEnum.OPEN,
];
exports.SALE_OPEN_TRANSACTION_STATUSES = [
    ...exports.SALE_PRE_FULFILLMENT_TRANSACTION_STATUSES,
    SaleTransactionStatusEnum.IN_PROGRESS,
];
//# sourceMappingURL=transaction.enum.js.map
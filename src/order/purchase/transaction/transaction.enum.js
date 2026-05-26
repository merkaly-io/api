"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PURCHASE_INCOMING_TRANSACTION_STATUSES = exports.PURCHASE_OPEN_TRANSACTION_STATUSES = exports.PurchaseTransactionStatusEnum = void 0;
var PurchaseTransactionStatusEnum;
(function (PurchaseTransactionStatusEnum) {
    PurchaseTransactionStatusEnum["OPEN"] = "OPEN";
    PurchaseTransactionStatusEnum["ORDERED"] = "ORDERED";
    PurchaseTransactionStatusEnum["RECEIVED"] = "RECEIVED";
    PurchaseTransactionStatusEnum["CANCELLED"] = "CANCELLED";
})(PurchaseTransactionStatusEnum || (exports.PurchaseTransactionStatusEnum = PurchaseTransactionStatusEnum = {}));
exports.PURCHASE_OPEN_TRANSACTION_STATUSES = [
    PurchaseTransactionStatusEnum.OPEN,
    PurchaseTransactionStatusEnum.ORDERED,
];
exports.PURCHASE_INCOMING_TRANSACTION_STATUSES = [
    PurchaseTransactionStatusEnum.ORDERED,
];
//# sourceMappingURL=transaction.enum.js.map
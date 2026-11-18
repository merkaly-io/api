"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceRefundStatusEnum = exports.FinanceRefundOriginEnum = void 0;
var FinanceRefundOriginEnum;
(function (FinanceRefundOriginEnum) {
    FinanceRefundOriginEnum["MERKALY"] = "MERKALY";
    FinanceRefundOriginEnum["AUTOMATIC"] = "AUTOMATIC";
    FinanceRefundOriginEnum["PURCHASE"] = "PURCHASE";
    FinanceRefundOriginEnum["EXTERNAL"] = "EXTERNAL";
})(FinanceRefundOriginEnum || (exports.FinanceRefundOriginEnum = FinanceRefundOriginEnum = {}));
var FinanceRefundStatusEnum;
(function (FinanceRefundStatusEnum) {
    FinanceRefundStatusEnum["PENDING"] = "PENDING";
    FinanceRefundStatusEnum["REQUESTED"] = "REQUESTED";
    FinanceRefundStatusEnum["PROCESSING"] = "PROCESSING";
    FinanceRefundStatusEnum["DONE"] = "DONE";
    FinanceRefundStatusEnum["MANUAL"] = "MANUAL";
})(FinanceRefundStatusEnum || (exports.FinanceRefundStatusEnum = FinanceRefundStatusEnum = {}));
//# sourceMappingURL=refund.enum.js.map
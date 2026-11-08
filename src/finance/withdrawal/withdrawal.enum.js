"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FINANCE_WITHDRAWAL_OPEN_STATUSES = exports.FinanceWithdrawalStatusEnum = void 0;
var FinanceWithdrawalStatusEnum;
(function (FinanceWithdrawalStatusEnum) {
    FinanceWithdrawalStatusEnum["REQUESTED"] = "REQUESTED";
    FinanceWithdrawalStatusEnum["PROCESSING"] = "PROCESSING";
    FinanceWithdrawalStatusEnum["DONE"] = "DONE";
    FinanceWithdrawalStatusEnum["FAILED"] = "FAILED";
    FinanceWithdrawalStatusEnum["CANCELLED"] = "CANCELLED";
})(FinanceWithdrawalStatusEnum || (exports.FinanceWithdrawalStatusEnum = FinanceWithdrawalStatusEnum = {}));
exports.FINANCE_WITHDRAWAL_OPEN_STATUSES = [
    FinanceWithdrawalStatusEnum.REQUESTED,
    FinanceWithdrawalStatusEnum.PROCESSING,
];
//# sourceMappingURL=withdrawal.enum.js.map
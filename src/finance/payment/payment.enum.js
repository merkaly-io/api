"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancePaymentTypeEnum = exports.FinancePaymentMethodEnum = exports.FINANCE_PAYMENT_PAID_STATUSES = exports.FinancePaymentStatusEnum = void 0;
var FinancePaymentStatusEnum;
(function (FinancePaymentStatusEnum) {
    FinancePaymentStatusEnum["PENDING"] = "PENDING";
    FinancePaymentStatusEnum["PAID"] = "PAID";
    FinancePaymentStatusEnum["CANCELLED"] = "CANCELLED";
    FinancePaymentStatusEnum["REFUNDED"] = "REFUNDED";
    FinancePaymentStatusEnum["DISPUTED"] = "DISPUTED";
    FinancePaymentStatusEnum["CHARGED_BACK"] = "CHARGED_BACK";
})(FinancePaymentStatusEnum || (exports.FinancePaymentStatusEnum = FinancePaymentStatusEnum = {}));
exports.FINANCE_PAYMENT_PAID_STATUSES = [
    FinancePaymentStatusEnum.PAID,
    FinancePaymentStatusEnum.DISPUTED,
];
var FinancePaymentMethodEnum;
(function (FinancePaymentMethodEnum) {
    FinancePaymentMethodEnum["CARD"] = "CARD";
    FinancePaymentMethodEnum["PIX"] = "PIX";
    FinancePaymentMethodEnum["TRANSFER"] = "TRANSFER";
    FinancePaymentMethodEnum["CASH"] = "CASH";
    FinancePaymentMethodEnum["CRYPTO"] = "CRYPTO";
})(FinancePaymentMethodEnum || (exports.FinancePaymentMethodEnum = FinancePaymentMethodEnum = {}));
var FinancePaymentTypeEnum;
(function (FinancePaymentTypeEnum) {
    FinancePaymentTypeEnum["SALE"] = "SALE";
    FinancePaymentTypeEnum["PURCHASE"] = "PURCHASE";
    FinancePaymentTypeEnum["SERVICE"] = "SERVICE";
})(FinancePaymentTypeEnum || (exports.FinancePaymentTypeEnum = FinancePaymentTypeEnum = {}));
//# sourceMappingURL=payment.enum.js.map
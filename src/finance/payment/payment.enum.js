"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancePaymentTypeEnum = exports.FinancePaymentMethodEnum = exports.FinancePaymentStatusEnum = void 0;
var FinancePaymentStatusEnum;
(function (FinancePaymentStatusEnum) {
    FinancePaymentStatusEnum["PENDING"] = "PENDING";
    FinancePaymentStatusEnum["PAID"] = "PAID";
    FinancePaymentStatusEnum["CANCELLED"] = "CANCELLED";
})(FinancePaymentStatusEnum || (exports.FinancePaymentStatusEnum = FinancePaymentStatusEnum = {}));
var FinancePaymentMethodEnum;
(function (FinancePaymentMethodEnum) {
    FinancePaymentMethodEnum["CARD"] = "CARD";
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
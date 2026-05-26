"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceInvoiceTypeEnum = exports.FinanceInvoiceStatusEnum = void 0;
var FinanceInvoiceStatusEnum;
(function (FinanceInvoiceStatusEnum) {
    FinanceInvoiceStatusEnum["DRAFT"] = "DRAFT";
    FinanceInvoiceStatusEnum["SENT"] = "SENT";
    FinanceInvoiceStatusEnum["PAID"] = "PAID";
    FinanceInvoiceStatusEnum["OVERDUE"] = "OVERDUE";
    FinanceInvoiceStatusEnum["CANCELLED"] = "CANCELLED";
    FinanceInvoiceStatusEnum["VOIDED"] = "VOIDED";
})(FinanceInvoiceStatusEnum || (exports.FinanceInvoiceStatusEnum = FinanceInvoiceStatusEnum = {}));
var FinanceInvoiceTypeEnum;
(function (FinanceInvoiceTypeEnum) {
    FinanceInvoiceTypeEnum["STANDARD"] = "STANDARD";
    FinanceInvoiceTypeEnum["CREDIT_NOTE"] = "CREDIT_NOTE";
    FinanceInvoiceTypeEnum["DEBIT_NOTE"] = "DEBIT_NOTE";
    FinanceInvoiceTypeEnum["PROFORMA"] = "PROFORMA";
})(FinanceInvoiceTypeEnum || (exports.FinanceInvoiceTypeEnum = FinanceInvoiceTypeEnum = {}));
//# sourceMappingURL=invoice.enum.js.map
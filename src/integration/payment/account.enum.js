"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAccountReadinessEnum = exports.PaymentPixKeyTypeEnum = exports.PaymentAccountDocumentStatusEnum = exports.PaymentAccountCompanyTypeEnum = exports.PaymentAccountTypeEnum = exports.PaymentAccountApprovalEnum = void 0;
var PaymentAccountApprovalEnum;
(function (PaymentAccountApprovalEnum) {
    PaymentAccountApprovalEnum["PENDING"] = "PENDING";
    PaymentAccountApprovalEnum["AWAITING_APPROVAL"] = "AWAITING_APPROVAL";
    PaymentAccountApprovalEnum["APPROVED"] = "APPROVED";
    PaymentAccountApprovalEnum["REJECTED"] = "REJECTED";
})(PaymentAccountApprovalEnum || (exports.PaymentAccountApprovalEnum = PaymentAccountApprovalEnum = {}));
var PaymentAccountTypeEnum;
(function (PaymentAccountTypeEnum) {
    PaymentAccountTypeEnum["INDIVIDUAL"] = "INDIVIDUAL";
    PaymentAccountTypeEnum["COMPANY"] = "COMPANY";
})(PaymentAccountTypeEnum || (exports.PaymentAccountTypeEnum = PaymentAccountTypeEnum = {}));
var PaymentAccountCompanyTypeEnum;
(function (PaymentAccountCompanyTypeEnum) {
    PaymentAccountCompanyTypeEnum["MEI"] = "MEI";
    PaymentAccountCompanyTypeEnum["LIMITED"] = "LIMITED";
    PaymentAccountCompanyTypeEnum["INDIVIDUAL"] = "INDIVIDUAL";
    PaymentAccountCompanyTypeEnum["ASSOCIATION"] = "ASSOCIATION";
})(PaymentAccountCompanyTypeEnum || (exports.PaymentAccountCompanyTypeEnum = PaymentAccountCompanyTypeEnum = {}));
var PaymentAccountDocumentStatusEnum;
(function (PaymentAccountDocumentStatusEnum) {
    PaymentAccountDocumentStatusEnum["NOT_SENT"] = "NOT_SENT";
    PaymentAccountDocumentStatusEnum["PENDING"] = "PENDING";
    PaymentAccountDocumentStatusEnum["APPROVED"] = "APPROVED";
    PaymentAccountDocumentStatusEnum["REJECTED"] = "REJECTED";
    PaymentAccountDocumentStatusEnum["IGNORED"] = "IGNORED";
})(PaymentAccountDocumentStatusEnum || (exports.PaymentAccountDocumentStatusEnum = PaymentAccountDocumentStatusEnum = {}));
var PaymentPixKeyTypeEnum;
(function (PaymentPixKeyTypeEnum) {
    PaymentPixKeyTypeEnum["CPF"] = "CPF";
    PaymentPixKeyTypeEnum["CNPJ"] = "CNPJ";
    PaymentPixKeyTypeEnum["EMAIL"] = "EMAIL";
    PaymentPixKeyTypeEnum["PHONE"] = "PHONE";
    PaymentPixKeyTypeEnum["EVP"] = "EVP";
})(PaymentPixKeyTypeEnum || (exports.PaymentPixKeyTypeEnum = PaymentPixKeyTypeEnum = {}));
var PaymentAccountReadinessEnum;
(function (PaymentAccountReadinessEnum) {
    PaymentAccountReadinessEnum["NOT_CONNECTED"] = "NOT_CONNECTED";
    PaymentAccountReadinessEnum["PENDING_APPROVAL"] = "PENDING_APPROVAL";
    PaymentAccountReadinessEnum["REJECTED"] = "REJECTED";
    PaymentAccountReadinessEnum["READY"] = "READY";
})(PaymentAccountReadinessEnum || (exports.PaymentAccountReadinessEnum = PaymentAccountReadinessEnum = {}));
//# sourceMappingURL=account.enum.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentBankAccountTypeEnum = exports.PaymentTransferIntervalEnum = exports.PaymentRecipientTypeEnum = exports.PaymentRecipientStatusEnum = void 0;
var PaymentRecipientStatusEnum;
(function (PaymentRecipientStatusEnum) {
    PaymentRecipientStatusEnum["REGISTRATION"] = "REGISTRATION";
    PaymentRecipientStatusEnum["AFFILIATION"] = "AFFILIATION";
    PaymentRecipientStatusEnum["ACTIVE"] = "ACTIVE";
    PaymentRecipientStatusEnum["REFUSED"] = "REFUSED";
    PaymentRecipientStatusEnum["SUSPENDED"] = "SUSPENDED";
    PaymentRecipientStatusEnum["BLOCKED"] = "BLOCKED";
    PaymentRecipientStatusEnum["INACTIVE"] = "INACTIVE";
})(PaymentRecipientStatusEnum || (exports.PaymentRecipientStatusEnum = PaymentRecipientStatusEnum = {}));
var PaymentRecipientTypeEnum;
(function (PaymentRecipientTypeEnum) {
    PaymentRecipientTypeEnum["INDIVIDUAL"] = "INDIVIDUAL";
    PaymentRecipientTypeEnum["CORPORATION"] = "CORPORATION";
})(PaymentRecipientTypeEnum || (exports.PaymentRecipientTypeEnum = PaymentRecipientTypeEnum = {}));
var PaymentTransferIntervalEnum;
(function (PaymentTransferIntervalEnum) {
    PaymentTransferIntervalEnum["DAILY"] = "DAILY";
    PaymentTransferIntervalEnum["WEEKLY"] = "WEEKLY";
    PaymentTransferIntervalEnum["MONTHLY"] = "MONTHLY";
})(PaymentTransferIntervalEnum || (exports.PaymentTransferIntervalEnum = PaymentTransferIntervalEnum = {}));
var PaymentBankAccountTypeEnum;
(function (PaymentBankAccountTypeEnum) {
    PaymentBankAccountTypeEnum["CHECKING"] = "CHECKING";
    PaymentBankAccountTypeEnum["SAVINGS"] = "SAVINGS";
})(PaymentBankAccountTypeEnum || (exports.PaymentBankAccountTypeEnum = PaymentBankAccountTypeEnum = {}));
//# sourceMappingURL=recipient.enum.js.map
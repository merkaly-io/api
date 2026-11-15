"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentChargeAccountEnum = exports.PaymentAsaasRefundStatusEnum = exports.PaymentAsaasChargeStatusEnum = exports.PaymentChargeStatusEnum = void 0;
var PaymentChargeStatusEnum;
(function (PaymentChargeStatusEnum) {
    PaymentChargeStatusEnum["PENDING"] = "PENDING";
    PaymentChargeStatusEnum["IN_PROCESS"] = "IN_PROCESS";
    PaymentChargeStatusEnum["APPROVED"] = "APPROVED";
    PaymentChargeStatusEnum["CANCELLED"] = "CANCELLED";
    PaymentChargeStatusEnum["EXPIRED"] = "EXPIRED";
    PaymentChargeStatusEnum["REFUNDED"] = "REFUNDED";
    PaymentChargeStatusEnum["DISPUTED"] = "DISPUTED";
})(PaymentChargeStatusEnum || (exports.PaymentChargeStatusEnum = PaymentChargeStatusEnum = {}));
var PaymentAsaasChargeStatusEnum;
(function (PaymentAsaasChargeStatusEnum) {
    PaymentAsaasChargeStatusEnum["AUTHORIZED"] = "AUTHORIZED";
    PaymentAsaasChargeStatusEnum["AWAITING_CHARGEBACK_REVERSAL"] = "AWAITING_CHARGEBACK_REVERSAL";
    PaymentAsaasChargeStatusEnum["AWAITING_RISK_ANALYSIS"] = "AWAITING_RISK_ANALYSIS";
    PaymentAsaasChargeStatusEnum["CHARGEBACK_DISPUTE"] = "CHARGEBACK_DISPUTE";
    PaymentAsaasChargeStatusEnum["CHARGEBACK_REQUESTED"] = "CHARGEBACK_REQUESTED";
    PaymentAsaasChargeStatusEnum["CONFIRMED"] = "CONFIRMED";
    PaymentAsaasChargeStatusEnum["OVERDUE"] = "OVERDUE";
    PaymentAsaasChargeStatusEnum["PENDING"] = "PENDING";
    PaymentAsaasChargeStatusEnum["RECEIVED"] = "RECEIVED";
    PaymentAsaasChargeStatusEnum["RECEIVED_IN_CASH"] = "RECEIVED_IN_CASH";
    PaymentAsaasChargeStatusEnum["REFUND_IN_PROGRESS"] = "REFUND_IN_PROGRESS";
    PaymentAsaasChargeStatusEnum["REFUND_REQUESTED"] = "REFUND_REQUESTED";
    PaymentAsaasChargeStatusEnum["REFUNDED"] = "REFUNDED";
})(PaymentAsaasChargeStatusEnum || (exports.PaymentAsaasChargeStatusEnum = PaymentAsaasChargeStatusEnum = {}));
var PaymentAsaasRefundStatusEnum;
(function (PaymentAsaasRefundStatusEnum) {
    PaymentAsaasRefundStatusEnum["PENDING"] = "PENDING";
    PaymentAsaasRefundStatusEnum["AWAITING_CRITICAL_ACTION_AUTHORIZATION"] = "AWAITING_CRITICAL_ACTION_AUTHORIZATION";
    PaymentAsaasRefundStatusEnum["AWAITING_CUSTOMER_EXTERNAL_AUTHORIZATION"] = "AWAITING_CUSTOMER_EXTERNAL_AUTHORIZATION";
    PaymentAsaasRefundStatusEnum["CANCELLED"] = "CANCELLED";
    PaymentAsaasRefundStatusEnum["DONE"] = "DONE";
})(PaymentAsaasRefundStatusEnum || (exports.PaymentAsaasRefundStatusEnum = PaymentAsaasRefundStatusEnum = {}));
var PaymentChargeAccountEnum;
(function (PaymentChargeAccountEnum) {
    PaymentChargeAccountEnum["MAIN"] = "MAIN";
    PaymentChargeAccountEnum["SUBCONTA"] = "SUBCONTA";
})(PaymentChargeAccountEnum || (exports.PaymentChargeAccountEnum = PaymentChargeAccountEnum = {}));
//# sourceMappingURL=charge.enum.js.map
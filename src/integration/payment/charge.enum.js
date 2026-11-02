"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentChargeAccountEnum = exports.PaymentChargeStatusEnum = void 0;
var PaymentChargeStatusEnum;
(function (PaymentChargeStatusEnum) {
    PaymentChargeStatusEnum["PENDING"] = "PENDING";
    PaymentChargeStatusEnum["IN_PROCESS"] = "IN_PROCESS";
    PaymentChargeStatusEnum["APPROVED"] = "APPROVED";
    PaymentChargeStatusEnum["REJECTED"] = "REJECTED";
    PaymentChargeStatusEnum["CANCELLED"] = "CANCELLED";
    PaymentChargeStatusEnum["EXPIRED"] = "EXPIRED";
    PaymentChargeStatusEnum["REFUNDED"] = "REFUNDED";
})(PaymentChargeStatusEnum || (exports.PaymentChargeStatusEnum = PaymentChargeStatusEnum = {}));
var PaymentChargeAccountEnum;
(function (PaymentChargeAccountEnum) {
    PaymentChargeAccountEnum["MAIN"] = "MAIN";
    PaymentChargeAccountEnum["SUBCONTA"] = "SUBCONTA";
})(PaymentChargeAccountEnum || (exports.PaymentChargeAccountEnum = PaymentChargeAccountEnum = {}));
//# sourceMappingURL=charge.enum.js.map
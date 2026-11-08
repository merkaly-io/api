"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceChargebackReasonEnum = exports.FINANCE_CHARGEBACK_OPEN_STATUSES = exports.FinanceChargebackStatusEnum = void 0;
var FinanceChargebackStatusEnum;
(function (FinanceChargebackStatusEnum) {
    FinanceChargebackStatusEnum["OPEN"] = "OPEN";
    FinanceChargebackStatusEnum["IN_DISPUTE"] = "IN_DISPUTE";
    FinanceChargebackStatusEnum["WON"] = "WON";
    FinanceChargebackStatusEnum["LOST"] = "LOST";
})(FinanceChargebackStatusEnum || (exports.FinanceChargebackStatusEnum = FinanceChargebackStatusEnum = {}));
exports.FINANCE_CHARGEBACK_OPEN_STATUSES = [
    FinanceChargebackStatusEnum.OPEN,
    FinanceChargebackStatusEnum.IN_DISPUTE,
];
var FinanceChargebackReasonEnum;
(function (FinanceChargebackReasonEnum) {
    FinanceChargebackReasonEnum["FRAUD"] = "FRAUD";
    FinanceChargebackReasonEnum["NOT_RECEIVED"] = "NOT_RECEIVED";
    FinanceChargebackReasonEnum["PRODUCT_DISPUTE"] = "PRODUCT_DISPUTE";
    FinanceChargebackReasonEnum["CANCELLED"] = "CANCELLED";
    FinanceChargebackReasonEnum["PROCESSING_ERROR"] = "PROCESSING_ERROR";
    FinanceChargebackReasonEnum["OTHER"] = "OTHER";
})(FinanceChargebackReasonEnum || (exports.FinanceChargebackReasonEnum = FinanceChargebackReasonEnum = {}));
//# sourceMappingURL=chargeback.enum.js.map
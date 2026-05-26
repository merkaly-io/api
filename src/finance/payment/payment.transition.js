"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancePaymentTransition = void 0;
const abstract_transition_1 = require("../../../infrastructure/abstracts/abstract.transition");
const payment_enum_1 = require("../enums/payment.enum");
class FinancePaymentTransition extends abstract_transition_1.AbstractTransition {
    $handlers = {
        [payment_enum_1.FinancePaymentStatusEnum.PENDING]: (entity) => Promise.resolve(entity),
        [payment_enum_1.FinancePaymentStatusEnum.PAID]: (entity) => Promise.resolve(entity),
        [payment_enum_1.FinancePaymentStatusEnum.CANCELLED]: (entity) => Promise.resolve(entity),
    };
    $states = {
        [payment_enum_1.FinancePaymentStatusEnum.PENDING]: [payment_enum_1.FinancePaymentStatusEnum.PAID, payment_enum_1.FinancePaymentStatusEnum.CANCELLED],
        [payment_enum_1.FinancePaymentStatusEnum.PAID]: [],
        [payment_enum_1.FinancePaymentStatusEnum.CANCELLED]: [],
    };
    constructor(status = payment_enum_1.FinancePaymentStatusEnum.PENDING) {
        super(status);
    }
    get initialStates() {
        return [payment_enum_1.FinancePaymentStatusEnum.PENDING, payment_enum_1.FinancePaymentStatusEnum.PAID];
    }
    toReadable(entity) {
        return entity.number;
    }
}
exports.FinancePaymentTransition = FinancePaymentTransition;
//# sourceMappingURL=payment.transition.js.map
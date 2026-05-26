"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceRefundTransition = void 0;
const abstract_transition_1 = require("../../../infrastructure/abstracts/abstract.transition");
const refund_enum_1 = require("../enums/refund.enum");
class FinanceRefundTransition extends abstract_transition_1.AbstractTransition {
    $handlers = {
        [refund_enum_1.FinanceRefundStatusEnum.APPROVED]: (entity) => Promise.resolve(entity),
        [refund_enum_1.FinanceRefundStatusEnum.CANCELLED]: (entity) => Promise.resolve(entity),
        [refund_enum_1.FinanceRefundStatusEnum.COMPLETED]: (entity) => Promise.resolve(entity),
        [refund_enum_1.FinanceRefundStatusEnum.PENDING]: (entity) => Promise.resolve(entity),
        [refund_enum_1.FinanceRefundStatusEnum.PROCESSING]: (entity) => Promise.resolve(entity),
        [refund_enum_1.FinanceRefundStatusEnum.REJECTED]: (entity) => Promise.resolve(entity),
    };
    $states = {
        [refund_enum_1.FinanceRefundStatusEnum.PENDING]: [refund_enum_1.FinanceRefundStatusEnum.APPROVED, refund_enum_1.FinanceRefundStatusEnum.REJECTED, refund_enum_1.FinanceRefundStatusEnum.CANCELLED],
        [refund_enum_1.FinanceRefundStatusEnum.APPROVED]: [refund_enum_1.FinanceRefundStatusEnum.PROCESSING, refund_enum_1.FinanceRefundStatusEnum.CANCELLED],
        [refund_enum_1.FinanceRefundStatusEnum.PROCESSING]: [refund_enum_1.FinanceRefundStatusEnum.COMPLETED, refund_enum_1.FinanceRefundStatusEnum.CANCELLED],
        [refund_enum_1.FinanceRefundStatusEnum.COMPLETED]: [],
        [refund_enum_1.FinanceRefundStatusEnum.REJECTED]: [],
        [refund_enum_1.FinanceRefundStatusEnum.CANCELLED]: [],
    };
    constructor(status = refund_enum_1.FinanceRefundStatusEnum.PENDING) {
        super(status);
    }
    toReadable(entity) {
        return entity.number;
    }
}
exports.FinanceRefundTransition = FinanceRefundTransition;
//# sourceMappingURL=refund.transition.js.map
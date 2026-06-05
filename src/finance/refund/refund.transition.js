import { AbstractTransition } from '../../abstract.transition';
import * as refund_enum_1 from './refund.enum';

export class FinanceRefundTransition extends AbstractTransition {
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
}

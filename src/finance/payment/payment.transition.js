import { AbstractTransition } from '../../abstract.transition';
import * as payment_enum_1 from './payment.enum';

export class FinancePaymentTransition extends AbstractTransition {
  $states = {
        [payment_enum_1.FinancePaymentStatusEnum.PENDING]: [payment_enum_1.FinancePaymentStatusEnum.PAID, payment_enum_1.FinancePaymentStatusEnum.CANCELLED],
        [payment_enum_1.FinancePaymentStatusEnum.PAID]: [payment_enum_1.FinancePaymentStatusEnum.REFUNDED, payment_enum_1.FinancePaymentStatusEnum.DISPUTED],
        [payment_enum_1.FinancePaymentStatusEnum.DISPUTED]: [payment_enum_1.FinancePaymentStatusEnum.PAID, payment_enum_1.FinancePaymentStatusEnum.CHARGED_BACK],
        [payment_enum_1.FinancePaymentStatusEnum.CANCELLED]: [],
        [payment_enum_1.FinancePaymentStatusEnum.REFUNDED]: [],
        [payment_enum_1.FinancePaymentStatusEnum.CHARGED_BACK]: [],
    };

  constructor(status = payment_enum_1.FinancePaymentStatusEnum.PENDING) {
        super(status);
    }

  get initialStates() {
        return [payment_enum_1.FinancePaymentStatusEnum.PENDING];
    }
}

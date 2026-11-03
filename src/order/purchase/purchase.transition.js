import { AbstractTransition } from '../../abstract.transition';
import * as purchase_enum_1 from './purchase.enum';

export class OrderPurchaseTransition extends AbstractTransition {
  $states = {
        [purchase_enum_1.OrderPurchaseStatusEnum.TO_PLACE]: [],
        [purchase_enum_1.OrderPurchaseStatusEnum.PLACED]: [],
        [purchase_enum_1.OrderPurchaseStatusEnum.AWAITING_PAYMENT]: [],
        [purchase_enum_1.OrderPurchaseStatusEnum.PAID]: [],
        [purchase_enum_1.OrderPurchaseStatusEnum.SHIPPED]: [],
        [purchase_enum_1.OrderPurchaseStatusEnum.FAILED]: [],
        [purchase_enum_1.OrderPurchaseStatusEnum.CANCELLED]: [],
    };

  constructor(status = purchase_enum_1.OrderPurchaseStatusEnum.TO_PLACE) {
        super(status);
    }

  get initialStates() {
        return [purchase_enum_1.OrderPurchaseStatusEnum.TO_PLACE];
    }
}

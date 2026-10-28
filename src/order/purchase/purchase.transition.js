import { AbstractTransition } from '../../abstract.transition';
import * as purchase_enum_1 from './purchase.enum';

export class OrderPurchaseTransition extends AbstractTransition {
  $states = {
        [purchase_enum_1.OrderPurchaseStatusEnum.OPEN]: [],
        [purchase_enum_1.OrderPurchaseStatusEnum.ORDERED]: [],
        [purchase_enum_1.OrderPurchaseStatusEnum.RECEIVED]: [],
        [purchase_enum_1.OrderPurchaseStatusEnum.CANCELLED]: [],
    };

  constructor(status = purchase_enum_1.OrderPurchaseStatusEnum.OPEN) {
        super(status);
    }

  get initialStates() {
        return [purchase_enum_1.OrderPurchaseStatusEnum.OPEN];
    }
}

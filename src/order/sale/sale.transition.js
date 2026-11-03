import { AbstractTransition } from '../../abstract.transition';
import * as sale_enum_1 from './sale.enum';

export class OrderSaleTransition extends AbstractTransition {
  $states = {
        [sale_enum_1.OrderSaleStatusEnum.AWAITING_PAYMENT]: [],
        [sale_enum_1.OrderSaleStatusEnum.PAID]: [],
        [sale_enum_1.OrderSaleStatusEnum.ORDERED]: [],
        [sale_enum_1.OrderSaleStatusEnum.SHIPPED]: [],
        [sale_enum_1.OrderSaleStatusEnum.DELIVERED]: [],
        [sale_enum_1.OrderSaleStatusEnum.CANCELLED]: [],
    };

  constructor(status = sale_enum_1.OrderSaleStatusEnum.AWAITING_PAYMENT) {
        super(status);
    }

  get initialStates() {
        return [sale_enum_1.OrderSaleStatusEnum.AWAITING_PAYMENT];
    }
}

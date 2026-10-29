import { AbstractTransition } from '../../abstract.transition';
import * as sale_enum_1 from './sale.enum';

export class OrderSaleTransition extends AbstractTransition {
  $states = {
        [sale_enum_1.OrderSaleStatusEnum.OPEN]: [sale_enum_1.OrderSaleStatusEnum.IN_PROGRESS, sale_enum_1.OrderSaleStatusEnum.CANCELLED],
        [sale_enum_1.OrderSaleStatusEnum.IN_PROGRESS]: [sale_enum_1.OrderSaleStatusEnum.COMPLETED, sale_enum_1.OrderSaleStatusEnum.CANCELLED],
        [sale_enum_1.OrderSaleStatusEnum.COMPLETED]: [],
        [sale_enum_1.OrderSaleStatusEnum.CANCELLED]: [],
        [sale_enum_1.OrderSaleStatusEnum.RETURNED]: [],
    };

  constructor(status = sale_enum_1.OrderSaleStatusEnum.OPEN) {
        super(status);
    }

  get initialStates() {
        return [sale_enum_1.OrderSaleStatusEnum.OPEN];
    }
}

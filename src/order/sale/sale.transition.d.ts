import { AbstractTransition } from '../../abstract.transition';
import { OrderSaleStatusEnum as Status } from './sale.enum';

export declare class OrderSaleTransition extends AbstractTransition<Status, unknown> {
  protected readonly $states: Readonly<Record<Status, readonly Status[]>>;
  constructor(status?: Status);
  readonly initialStates: readonly Status[];
}

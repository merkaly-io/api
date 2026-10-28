import { AbstractTransition } from '../../abstract.transition';
import { OrderPurchaseStatusEnum as Status } from './purchase.enum';

export declare class OrderPurchaseTransition extends AbstractTransition<Status, unknown> {
  protected readonly $states: Readonly<Record<Status, readonly Status[]>>;
  constructor(status?: Status);
  readonly initialStates: readonly Status[];
}

import { AbstractTransition } from '../../../abstract.transition';
import { PurchaseTransactionStatusEnum as Status } from './transaction.enum';

export declare class PurchaseTransactionTransition extends AbstractTransition<Status, unknown> {
  protected readonly $states: Readonly<Record<Status, readonly Status[]>>;
  constructor(status?: Status);
  readonly initialStates: readonly Status[];
}

import { AbstractTransition } from '../../../abstract.transition';
import { SaleTransactionStatusEnum as Status } from './transaction.enum';

export declare class SaleTransactionTransition extends AbstractTransition<Status, unknown> {
  protected readonly $states: Readonly<Record<Status, readonly Status[]>>;
  constructor(status?: Status);
  readonly initialStates: readonly Status[];
}

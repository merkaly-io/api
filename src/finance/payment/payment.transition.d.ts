import { AbstractTransition } from '../../abstract.transition';
import { FinancePaymentStatusEnum as Status } from './payment.enum';

export declare class FinancePaymentTransition extends AbstractTransition<Status, unknown> {
  protected readonly $states: Readonly<Record<Status, readonly Status[]>>;
  constructor(status?: Status);
  readonly initialStates: readonly Status[];
}

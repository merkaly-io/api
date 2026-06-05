import { AbstractTransition } from '../../abstract.transition';
import { FinanceRefundStatusEnum as Status } from './refund.enum';

export declare class FinanceRefundTransition extends AbstractTransition<Status, unknown> {
  protected readonly $states: Readonly<Record<Status, readonly Status[]>>;
  constructor(status?: Status);
  readonly initialStates: readonly Status[];
}

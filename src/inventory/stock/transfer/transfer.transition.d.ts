import { AbstractTransition } from '../../../abstract.transition';
import { TransferStatusEnum as Status } from './transfer.enum';

export declare class StockTransferTransition extends AbstractTransition<Status, unknown> {
  protected readonly $states: Readonly<Record<Status, readonly Status[]>>;
  constructor(status?: Status);
  readonly initialStates: readonly Status[];
}

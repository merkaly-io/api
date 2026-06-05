import { AbstractTransition } from '../../../abstract.transition';
import * as transfer_enum_1 from './transfer.enum';

export class StockTransferTransition extends AbstractTransition {
  $states = {
        [transfer_enum_1.TransferStatusEnum.PENDING]: [transfer_enum_1.TransferStatusEnum.COMPLETED, transfer_enum_1.TransferStatusEnum.CANCELLED],
        [transfer_enum_1.TransferStatusEnum.COMPLETED]: [],
        [transfer_enum_1.TransferStatusEnum.CANCELLED]: [],
    };

  constructor(status = transfer_enum_1.TransferStatusEnum.PENDING) {
        super(status);
    }

  get initialStates() {
        return [transfer_enum_1.TransferStatusEnum.PENDING, transfer_enum_1.TransferStatusEnum.COMPLETED];
    }
}

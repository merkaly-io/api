import { AbstractTransition } from '../../../abstract.transition';
import * as transaction_enum_1 from './transaction.enum';

export class SaleTransactionTransition extends AbstractTransition {
  $states = {
        [transaction_enum_1.SaleTransactionStatusEnum.OPEN]: [transaction_enum_1.SaleTransactionStatusEnum.IN_PROGRESS, transaction_enum_1.SaleTransactionStatusEnum.COMPLETED, transaction_enum_1.SaleTransactionStatusEnum.CANCELLED],
        [transaction_enum_1.SaleTransactionStatusEnum.IN_PROGRESS]: [transaction_enum_1.SaleTransactionStatusEnum.COMPLETED, transaction_enum_1.SaleTransactionStatusEnum.CANCELLED],
        [transaction_enum_1.SaleTransactionStatusEnum.COMPLETED]: [],
        [transaction_enum_1.SaleTransactionStatusEnum.CANCELLED]: [],
    };

  constructor(status = transaction_enum_1.SaleTransactionStatusEnum.OPEN) {
        super(status);
    }

  get initialStates() {
        return [transaction_enum_1.SaleTransactionStatusEnum.OPEN, transaction_enum_1.SaleTransactionStatusEnum.IN_PROGRESS, transaction_enum_1.SaleTransactionStatusEnum.COMPLETED];
    }
}

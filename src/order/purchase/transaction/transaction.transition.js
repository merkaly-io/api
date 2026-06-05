import { AbstractTransition } from '../../../abstract.transition';
import * as transaction_enum_1 from './transaction.enum';

export class PurchaseTransactionTransition extends AbstractTransition {
  $states = {
        [transaction_enum_1.PurchaseTransactionStatusEnum.OPEN]: [transaction_enum_1.PurchaseTransactionStatusEnum.ORDERED, transaction_enum_1.PurchaseTransactionStatusEnum.RECEIVED, transaction_enum_1.PurchaseTransactionStatusEnum.CANCELLED],
        [transaction_enum_1.PurchaseTransactionStatusEnum.ORDERED]: [transaction_enum_1.PurchaseTransactionStatusEnum.RECEIVED, transaction_enum_1.PurchaseTransactionStatusEnum.CANCELLED],
        [transaction_enum_1.PurchaseTransactionStatusEnum.RECEIVED]: [],
        [transaction_enum_1.PurchaseTransactionStatusEnum.CANCELLED]: [],
    };

  constructor(status = transaction_enum_1.PurchaseTransactionStatusEnum.OPEN) {
        super(status);
    }

  get initialStates() {
        return [transaction_enum_1.PurchaseTransactionStatusEnum.OPEN, transaction_enum_1.PurchaseTransactionStatusEnum.ORDERED, transaction_enum_1.PurchaseTransactionStatusEnum.RECEIVED];
    }
}

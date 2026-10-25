import { ItemEntity } from '../../sale/item/item.entity';
import { TransactionEntity } from '../../../transaction.entity';
import { PurchaseTransactionStatusEnum } from './transaction.enum';
import { PurchaseApprovalEntity } from './approval.entity';
import { PurchaseSourcingEntity } from './sourcing.entity';
import { PurchaseVendorEntity } from '../vendor/vendor.entity';
export declare class PurchaseTransactionEntity extends TransactionEntity<PurchaseTransactionStatusEnum> {
    approval?: PurchaseApprovalEntity;
    sourcing?: PurchaseSourcingEntity;
    vendor: PurchaseVendorEntity;
    items: ItemEntity[];
}

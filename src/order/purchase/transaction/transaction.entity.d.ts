import { ItemEntity } from '../../sale/item/item.entity';
import { TransactionEntity } from '../../../transaction.entity';
import { PurchaseTransactionStatusEnum } from './transaction.enum';
import { PurchaseVendorEntity } from '../vendor/vendor.entity';
export declare class PurchaseTransactionEntity extends TransactionEntity<PurchaseTransactionStatusEnum> {
    vendor: PurchaseVendorEntity;
    items: ItemEntity[];
}

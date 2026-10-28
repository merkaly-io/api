import { ContactVendorEntity } from '../../../contact/vendor/vendor.entity';
import { ItemEntity } from '../../sale/item/item.entity';
import { TransactionEntity } from '../../../transaction.entity';
import { PurchaseTransactionStatusEnum } from './transaction.enum';
export declare class PurchaseTransactionEntity extends TransactionEntity<PurchaseTransactionStatusEnum> {
    vendor?: ContactVendorEntity;
    items: ItemEntity[];
}

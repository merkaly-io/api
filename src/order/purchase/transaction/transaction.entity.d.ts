import { ItemEntity } from 'src/infrastructure/entities/item.entity';
import { TransactionEntity } from 'src/infrastructure/entities/transaction.entity';
import { PurchaseTransactionStatusEnum } from '../enums/transaction.enum';
import { PurchaseVendorEntity } from './vendor.entity';
export declare class PurchaseTransactionEntity extends TransactionEntity<PurchaseTransactionStatusEnum> {
    vendor: PurchaseVendorEntity;
    items: ItemEntity[];
}

import { ItemEntity } from 'src/infrastructure/entities/item.entity';
import { TransactionEntity } from 'src/infrastructure/entities/transaction.entity';
import { SaleTransactionStatusEnum } from '../enums/transaction.enum';
import { SaleCustomerEntity } from './customer.entity';
export declare class SaleTransactionEntity extends TransactionEntity<SaleTransactionStatusEnum> {
    customer: SaleCustomerEntity;
    items: ItemEntity[];
}

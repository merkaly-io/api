import { ItemEntity } from '../item/item.entity';
import { TransactionEntity } from '../../../transaction.entity';
import { SaleTransactionStatusEnum } from './transaction.enum';
import { SaleCustomerEntity } from '../customer/customer.entity';
export declare class SaleTransactionEntity extends TransactionEntity<SaleTransactionStatusEnum> {
    customer: SaleCustomerEntity;
    items: ItemEntity[];
}

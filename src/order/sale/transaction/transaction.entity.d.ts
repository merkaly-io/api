import { ContactCustomerEntity } from '../../../contact/customer/customer.entity';
import { ItemEntity } from '../item/item.entity';
import { TransactionEntity } from '../../../transaction.entity';
import { SaleTransactionStatusEnum } from './transaction.enum';
export declare class SaleTransactionEntity extends TransactionEntity<SaleTransactionStatusEnum> {
    customer: ContactCustomerEntity;
    items: ItemEntity[];
}

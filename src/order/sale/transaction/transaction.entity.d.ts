import { ItemEntity } from '../item/item.entity';
import { OrderDestinationSnapshotEntity } from '../../../order-snapshot.entity';
import { TransactionEntity } from '../../../transaction.entity';
import { SaleTransactionStatusEnum } from './transaction.enum';
import { SaleCustomerEntity } from '../customer/customer.entity';
import { SaleDeliveryEntity } from './delivery.entity';
export declare class SaleTransactionEntity extends TransactionEntity<SaleTransactionStatusEnum> {
    destinationSnapshot?: OrderDestinationSnapshotEntity;
    delivery?: SaleDeliveryEntity;
    customer: SaleCustomerEntity;
    items: ItemEntity[];
}

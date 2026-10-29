import { ContactCustomerEntity } from '../../contact/customer/customer.entity';
import { ItemEntity } from '../item/item.entity';
import { TransactionEntity } from '../../transaction.entity';
import { OrderSaleStatusEnum } from './sale.enum';
import { OrderSaleShippingEntity } from './sale.shipping.entity';
import type { OrderPurchaseEntity } from '../purchase/purchase.entity';
export declare class OrderSaleEntity extends TransactionEntity<OrderSaleStatusEnum> {
    customer: ContactCustomerEntity;
    items: ItemEntity[];
    shipping?: OrderSaleShippingEntity;
    readonly purchases: OrderPurchaseEntity[];
}

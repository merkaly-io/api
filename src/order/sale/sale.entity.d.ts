import { ContactCustomerEntity } from '../../contact/customer/customer.entity';
import { ItemEntity } from '../item/item.entity';
import { TransactionEntity } from '../../transaction.entity';
import { OrderSaleStatusEnum } from './sale.enum';
import { OrderSaleImportEntity } from './sale.import.entity';
import { OrderSaleShippingEntity } from './sale.shipping.entity';
import type { OrderPurchaseEntity } from '../purchase/purchase.entity';
export declare class OrderSaleEntity extends TransactionEntity<OrderSaleStatusEnum> {
    customer: ContactCustomerEntity;
    items: ItemEntity[];
    shipping?: OrderSaleShippingEntity;
    imported?: OrderSaleImportEntity;
    readonly purchases: OrderPurchaseEntity[];
    readonly cost: number | null;
    readonly profit: number | null;
}

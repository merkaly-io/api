import { ContactVendorEntity } from '../../contact/vendor/vendor.entity';
import { ItemEntity } from '../item/item.entity';
import { TransactionEntity } from '../../transaction.entity';
import { OrderPurchaseStatusEnum } from './purchase.enum';
import { OrderPurchaseSupplierOrderEntity } from './purchase.supplier.order.entity';
import type { OrderSaleEntity } from '../sale/sale.entity';
export declare class OrderPurchaseEntity extends TransactionEntity<OrderPurchaseStatusEnum> {
    vendor?: ContactVendorEntity;
    customerOrder?: OrderSaleEntity;
    items: ItemEntity[];
    freight?: number;
    supplierOrder?: OrderPurchaseSupplierOrderEntity;
}

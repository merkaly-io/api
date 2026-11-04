import { Schema as MongoSchema } from 'mongoose';
import { ContactVendorEntity } from '../../contact/vendor/vendor.entity';
import { SupplierProviderEnum } from '../../integration/supplier/provider.enum';
import { ItemEntity } from '../item/item.entity';
import { TransactionEntity } from '../../transaction.entity';
import { OrderPurchaseStatusEnum } from './purchase.enum';
import type { OrderSaleEntity } from '../sale/sale.entity';
export declare class OrderPurchaseSupplierOrderEntity {
    provider: SupplierProviderEnum;
    externalOrderIds: string[];
    reference?: string;
    rawStatus?: string;
    placedAt: Date;
    syncedAt?: Date;
    error?: string;
}
export declare const OrderPurchaseSupplierOrderSchema: MongoSchema<OrderPurchaseSupplierOrderEntity, import("mongoose").Model<OrderPurchaseSupplierOrderEntity, any, any, any, import("mongoose").Document<unknown, any, OrderPurchaseSupplierOrderEntity, any, {}> & OrderPurchaseSupplierOrderEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderPurchaseSupplierOrderEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderPurchaseSupplierOrderEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<OrderPurchaseSupplierOrderEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderPurchaseEntity extends TransactionEntity<OrderPurchaseStatusEnum> {
    vendor?: ContactVendorEntity;
    customerOrder?: OrderSaleEntity;
    items: ItemEntity[];
    freight?: number;
    supplierOrder?: OrderPurchaseSupplierOrderEntity;
}

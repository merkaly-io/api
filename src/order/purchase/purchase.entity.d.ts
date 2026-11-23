import { Schema as MongoSchema } from 'mongoose';
import { ContactVendorEntity } from "../../contact/vendor/vendor.entity";
import { SupplierErrorCodeEnum, SupplierProviderEnum } from "../../integration/supplier/provider.enum";
import { ItemEntity } from "../item/item.entity";
import { TransactionEntity } from "../../transaction.entity";
import { OrderPurchaseStatusEnum } from './purchase.enum';
import type { OrderSaleEntity } from '../sale/sale.entity';
export declare class OrderPurchaseSupplierErrorEntity {
    code: SupplierErrorCodeEnum | null;
    message: string;
}
export declare const OrderPurchaseSupplierErrorSchema: MongoSchema<OrderPurchaseSupplierErrorEntity, import("mongoose").Model<OrderPurchaseSupplierErrorEntity, any, any, any, import("mongoose").Document<unknown, any, OrderPurchaseSupplierErrorEntity, any, {}> & OrderPurchaseSupplierErrorEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderPurchaseSupplierErrorEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderPurchaseSupplierErrorEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<OrderPurchaseSupplierErrorEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderPurchaseSupplierOrderItemEntity {
    item: string;
    quantity: number;
}
export declare const OrderPurchaseSupplierOrderItemSchema: MongoSchema<OrderPurchaseSupplierOrderItemEntity, import("mongoose").Model<OrderPurchaseSupplierOrderItemEntity, any, any, any, import("mongoose").Document<unknown, any, OrderPurchaseSupplierOrderItemEntity, any, {}> & OrderPurchaseSupplierOrderItemEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderPurchaseSupplierOrderItemEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderPurchaseSupplierOrderItemEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<OrderPurchaseSupplierOrderItemEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderPurchaseSupplierOrderPartEntity {
    id: string;
    status?: OrderPurchaseStatusEnum | null;
    rawStatus?: string | null;
    items: OrderPurchaseSupplierOrderItemEntity[];
    productCost?: number | null;
    shippingCost?: number | null;
    taxCost?: number | null;
    cancelledAt?: Date | null;
}
export declare const OrderPurchaseSupplierOrderPartSchema: MongoSchema<OrderPurchaseSupplierOrderPartEntity, import("mongoose").Model<OrderPurchaseSupplierOrderPartEntity, any, any, any, import("mongoose").Document<unknown, any, OrderPurchaseSupplierOrderPartEntity, any, {}> & OrderPurchaseSupplierOrderPartEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderPurchaseSupplierOrderPartEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderPurchaseSupplierOrderPartEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<OrderPurchaseSupplierOrderPartEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderPurchaseLogisticsEntity {
    sku: string;
    service: string;
}
export declare const OrderPurchaseLogisticsSchema: MongoSchema<OrderPurchaseLogisticsEntity, import("mongoose").Model<OrderPurchaseLogisticsEntity, any, any, any, import("mongoose").Document<unknown, any, OrderPurchaseLogisticsEntity, any, {}> & OrderPurchaseLogisticsEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderPurchaseLogisticsEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderPurchaseLogisticsEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<OrderPurchaseLogisticsEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderPurchaseSupplierOrderEntity {
    provider: SupplierProviderEnum;
    orderIds: string[];
    orders?: OrderPurchaseSupplierOrderPartEntity[];
    reference?: string;
    rawStatus?: string;
    placedAt: Date;
    syncedAt?: Date;
    payExpiryDate?: Date;
    error?: OrderPurchaseSupplierErrorEntity | null;
    paidAfterCancelAt?: Date;
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
    sale?: OrderSaleEntity;
    items: ItemEntity[];
    shippingCost?: number;
    taxCost?: number;
    chargedAt?: Date;
    logistics?: OrderPurchaseLogisticsEntity[];
    supplierOrder?: OrderPurchaseSupplierOrderEntity;
}

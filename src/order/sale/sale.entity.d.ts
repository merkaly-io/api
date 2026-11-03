import { Schema as MongoSchema } from 'mongoose';
import { ContactCustomerEntity } from '../../contact/customer/customer.entity';
import { ItemEntity } from '../item/item.entity';
import { TransactionEntity } from '../../transaction.entity';
import { OrderSaleSourceEnum, OrderSaleStatusEnum } from './sale.enum';
import type { OrderPurchaseEntity } from '../purchase/purchase.entity';
export declare class OrderSaleDeliveryRecipientEntity {
    name: string;
    email: string;
    phone: string;
    document: string;
    birthday?: string;
}
export declare const OrderSaleDeliveryRecipientSchema: MongoSchema<OrderSaleDeliveryRecipientEntity, import("mongoose").Model<OrderSaleDeliveryRecipientEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleDeliveryRecipientEntity, any, {}> & OrderSaleDeliveryRecipientEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleDeliveryRecipientEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleDeliveryRecipientEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleDeliveryRecipientEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderSaleDeliveryAddressEntity {
    postalCode: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    state: string;
    country: string;
}
export declare const OrderSaleDeliveryAddressSchema: MongoSchema<OrderSaleDeliveryAddressEntity, import("mongoose").Model<OrderSaleDeliveryAddressEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleDeliveryAddressEntity, any, {}> & OrderSaleDeliveryAddressEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleDeliveryAddressEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleDeliveryAddressEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleDeliveryAddressEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderSaleDeliveryDaysEntity {
    min?: number;
    max?: number;
}
export declare const OrderSaleDeliveryDaysSchema: MongoSchema<OrderSaleDeliveryDaysEntity, import("mongoose").Model<OrderSaleDeliveryDaysEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleDeliveryDaysEntity, any, {}> & OrderSaleDeliveryDaysEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleDeliveryDaysEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleDeliveryDaysEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleDeliveryDaysEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderSaleDeliveryLineEntity {
    variant: string;
    amount: number;
    method?: string;
    deliveryDays?: OrderSaleDeliveryDaysEntity;
}
export declare const OrderSaleDeliveryLineSchema: MongoSchema<OrderSaleDeliveryLineEntity, import("mongoose").Model<OrderSaleDeliveryLineEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleDeliveryLineEntity, any, {}> & OrderSaleDeliveryLineEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleDeliveryLineEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleDeliveryLineEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleDeliveryLineEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderSaleDeliveryEntity {
    recipient: OrderSaleDeliveryRecipientEntity;
    address: OrderSaleDeliveryAddressEntity;
    fee?: number;
    quotedAt?: Date;
    lines?: OrderSaleDeliveryLineEntity[];
}
export declare const OrderSaleDeliverySchema: MongoSchema<OrderSaleDeliveryEntity, import("mongoose").Model<OrderSaleDeliveryEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleDeliveryEntity, any, {}> & OrderSaleDeliveryEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleDeliveryEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleDeliveryEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleDeliveryEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderSaleEntity extends TransactionEntity<OrderSaleStatusEnum> {
    customer: ContactCustomerEntity;
    items: ItemEntity[];
    delivery?: OrderSaleDeliveryEntity;
    cancelledAt?: Date | null;
    source: OrderSaleSourceEnum;
    readonly purchases: OrderPurchaseEntity[];
    readonly cost: number | null;
    readonly profit: number | null;
}

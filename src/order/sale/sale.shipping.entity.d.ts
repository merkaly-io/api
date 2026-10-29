import { Schema as MongoSchema } from 'mongoose';
export declare class OrderSaleShippingRecipientEntity {
    name: string;
    email: string;
    phone: string;
    document: string;
    birthday?: string;
}
export declare const OrderSaleShippingRecipientSchema: MongoSchema<OrderSaleShippingRecipientEntity, import("mongoose").Model<OrderSaleShippingRecipientEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleShippingRecipientEntity, any, {}> & OrderSaleShippingRecipientEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleShippingRecipientEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleShippingRecipientEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleShippingRecipientEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderSaleShippingAddressEntity {
    postalCode: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    state: string;
    country: string;
}
export declare const OrderSaleShippingAddressSchema: MongoSchema<OrderSaleShippingAddressEntity, import("mongoose").Model<OrderSaleShippingAddressEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleShippingAddressEntity, any, {}> & OrderSaleShippingAddressEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleShippingAddressEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleShippingAddressEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleShippingAddressEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderSaleShippingDaysEntity {
    min?: number;
    max?: number;
}
export declare const OrderSaleShippingDaysSchema: MongoSchema<OrderSaleShippingDaysEntity, import("mongoose").Model<OrderSaleShippingDaysEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleShippingDaysEntity, any, {}> & OrderSaleShippingDaysEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleShippingDaysEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleShippingDaysEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleShippingDaysEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderSaleShippingLineEntity {
    variant: string;
    amount: number;
    method?: string;
    deliveryDays?: OrderSaleShippingDaysEntity;
}
export declare const OrderSaleShippingLineSchema: MongoSchema<OrderSaleShippingLineEntity, import("mongoose").Model<OrderSaleShippingLineEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleShippingLineEntity, any, {}> & OrderSaleShippingLineEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleShippingLineEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleShippingLineEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleShippingLineEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderSaleShippingEntity {
    recipient: OrderSaleShippingRecipientEntity;
    address: OrderSaleShippingAddressEntity;
    fee?: number;
    quotedAt?: Date;
    lines?: OrderSaleShippingLineEntity[];
}
export declare const OrderSaleShippingSchema: MongoSchema<OrderSaleShippingEntity, import("mongoose").Model<OrderSaleShippingEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleShippingEntity, any, {}> & OrderSaleShippingEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleShippingEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleShippingEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleShippingEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

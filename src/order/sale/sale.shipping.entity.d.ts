export declare class OrderSaleShippingRecipientEntity {
    name: string;
    email: string;
    phone: string;
    document: string;
}
export declare const OrderSaleShippingRecipientSchema: import("mongoose").Schema<OrderSaleShippingRecipientEntity, import("mongoose").Model<OrderSaleShippingRecipientEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleShippingRecipientEntity, any, {}> & OrderSaleShippingRecipientEntity & {
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
export declare const OrderSaleShippingAddressSchema: import("mongoose").Schema<OrderSaleShippingAddressEntity, import("mongoose").Model<OrderSaleShippingAddressEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleShippingAddressEntity, any, {}> & OrderSaleShippingAddressEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleShippingAddressEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleShippingAddressEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleShippingAddressEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class OrderSaleShippingEntity {
    recipient: OrderSaleShippingRecipientEntity;
    address: OrderSaleShippingAddressEntity;
}
export declare const OrderSaleShippingSchema: import("mongoose").Schema<OrderSaleShippingEntity, import("mongoose").Model<OrderSaleShippingEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleShippingEntity, any, {}> & OrderSaleShippingEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleShippingEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleShippingEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleShippingEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

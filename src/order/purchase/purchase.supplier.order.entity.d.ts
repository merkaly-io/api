import { SupplierProviderEnum } from '../../integration/supplier/provider.enum';
export declare class OrderPurchaseSupplierOrderEntity {
    provider: SupplierProviderEnum;
    externalOrderIds: string[];
    reference?: string;
    rawStatus?: string;
    placedAt: Date;
    syncedAt?: Date;
    error?: string;
}
export declare const OrderPurchaseSupplierOrderSchema: import("mongoose").Schema<OrderPurchaseSupplierOrderEntity, import("mongoose").Model<OrderPurchaseSupplierOrderEntity, any, any, any, import("mongoose").Document<unknown, any, OrderPurchaseSupplierOrderEntity, any, {}> & OrderPurchaseSupplierOrderEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderPurchaseSupplierOrderEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderPurchaseSupplierOrderEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderPurchaseSupplierOrderEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

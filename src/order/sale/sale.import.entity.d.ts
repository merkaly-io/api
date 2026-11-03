import { SupplierProviderEnum } from '../../integration/supplier/provider.enum';
export declare class OrderSaleImportEntity {
    provider: SupplierProviderEnum;
    externalOrderId: string;
    importedAt: Date;
}
export declare const OrderSaleImportSchema: import("mongoose").Schema<OrderSaleImportEntity, import("mongoose").Model<OrderSaleImportEntity, any, any, any, import("mongoose").Document<unknown, any, OrderSaleImportEntity, any, {}> & OrderSaleImportEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderSaleImportEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderSaleImportEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<OrderSaleImportEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

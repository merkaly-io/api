import { Schema as MongoSchema } from 'mongoose';
export declare class IntegrationSupplierConnectionEntity {
    account?: string;
    accessToken: string;
    refreshToken?: string;
    expiresAt: Date;
    refreshExpiresAt?: Date;
    connectedAt: Date;
}
export declare const IntegrationSupplierConnectionSchema: MongoSchema<IntegrationSupplierConnectionEntity, import("mongoose").Model<IntegrationSupplierConnectionEntity, any, any, any, import("mongoose").Document<unknown, any, IntegrationSupplierConnectionEntity, any, {}> & IntegrationSupplierConnectionEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IntegrationSupplierConnectionEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IntegrationSupplierConnectionEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IntegrationSupplierConnectionEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

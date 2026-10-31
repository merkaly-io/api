import { Schema as MongoSchema } from 'mongoose';
export declare class IntegrationPaymentConnectionEntity {
    account?: string;
    userId: string;
    publicKey?: string;
    liveMode: boolean;
    scope?: string;
    accessToken: string;
    refreshToken?: string;
    expiresAt: Date;
    connectedAt: Date;
}
export declare const IntegrationPaymentConnectionSchema: MongoSchema<IntegrationPaymentConnectionEntity, import("mongoose").Model<IntegrationPaymentConnectionEntity, any, any, any, import("mongoose").Document<unknown, any, IntegrationPaymentConnectionEntity, any, {}> & IntegrationPaymentConnectionEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IntegrationPaymentConnectionEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<IntegrationPaymentConnectionEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IntegrationPaymentConnectionEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

import { Schema as MongoSchema } from 'mongoose';
import { FinancePaymentMethodEnum } from './payment.enum';
export declare class FinancePaymentGatewayPixEntity {
    qrCode?: string;
    qrCodeBase64?: string;
    ticketUrl?: string;
}
export declare const FinancePaymentGatewayPixSchema: MongoSchema<FinancePaymentGatewayPixEntity, import("mongoose").Model<FinancePaymentGatewayPixEntity, any, any, any, import("mongoose").Document<unknown, any, FinancePaymentGatewayPixEntity, any, {}> & FinancePaymentGatewayPixEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinancePaymentGatewayPixEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinancePaymentGatewayPixEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<FinancePaymentGatewayPixEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinancePaymentGatewayEntity {
    provider: string;
    reference: string;
    paymentId?: string;
    method: FinancePaymentMethodEnum;
    status: string;
    statusDetail?: string;
    attempt: number;
    amount: number;
    pix?: FinancePaymentGatewayPixEntity;
    expiresAt?: Date;
    syncedAt: Date;
}
export declare const FinancePaymentGatewaySchema: MongoSchema<FinancePaymentGatewayEntity, import("mongoose").Model<FinancePaymentGatewayEntity, any, any, any, import("mongoose").Document<unknown, any, FinancePaymentGatewayEntity, any, {}> & FinancePaymentGatewayEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinancePaymentGatewayEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinancePaymentGatewayEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<FinancePaymentGatewayEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

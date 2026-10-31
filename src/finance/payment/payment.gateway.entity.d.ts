import { Schema as MongoSchema } from 'mongoose';
import { FinancePaymentMethodEnum } from './payment.enum';
export declare class FinancePaymentGatewayPixEntity {
    qrCode?: string | null;
    qrCodeUrl?: string | null;
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
    chargeId?: string | null;
    method: FinancePaymentMethodEnum;
    status: string;
    statusDetail?: string | null;
    message?: string | null;
    attempt: number;
    amount: number;
    pix?: FinancePaymentGatewayPixEntity | null;
    expiresAt?: Date | null;
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

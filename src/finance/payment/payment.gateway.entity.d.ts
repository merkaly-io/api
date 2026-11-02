import { Schema as MongoSchema } from 'mongoose';
import { PaymentChargeAccountEnum } from '../../integration/payment/charge.enum';
import { FinancePaymentMethodEnum } from './payment.enum';
export declare class FinancePaymentGatewayPixEntity {
    qrCode?: string | null;
    qrCodeImage?: string | null;
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
export declare class FinancePaymentGatewayCardEntity {
    brand?: string | null;
    last4?: string | null;
}
export declare const FinancePaymentGatewayCardSchema: MongoSchema<FinancePaymentGatewayCardEntity, import("mongoose").Model<FinancePaymentGatewayCardEntity, any, any, any, import("mongoose").Document<unknown, any, FinancePaymentGatewayCardEntity, any, {}> & FinancePaymentGatewayCardEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinancePaymentGatewayCardEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinancePaymentGatewayCardEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<FinancePaymentGatewayCardEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinancePaymentGatewayEntity {
    provider: string;
    reference?: string | null;
    account?: PaymentChargeAccountEnum | null;
    method: FinancePaymentMethodEnum;
    status: string;
    message?: string | null;
    attempt: number;
    cardAttempts: number;
    amount: number;
    pix?: FinancePaymentGatewayPixEntity | null;
    card?: FinancePaymentGatewayCardEntity | null;
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

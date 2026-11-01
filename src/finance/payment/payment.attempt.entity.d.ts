import { Schema as MongoSchema } from 'mongoose';
import { FinancePaymentMethodEnum } from './payment.enum';
import { FinancePaymentGatewayCardEntity } from './payment.gateway.entity';
import type { PaymentChargeStatusEnum } from '../../integration/payment/charge.enum';
export type FinancePaymentAttemptStatus = PaymentChargeStatusEnum | 'UNKNOWN';
export declare class FinancePaymentAttemptEntity {
    reference?: string | null;
    method: FinancePaymentMethodEnum;
    status: FinancePaymentAttemptStatus;
    rawStatus: string;
    amount: number;
    message?: string | null;
    card?: FinancePaymentGatewayCardEntity | null;
    expiresAt?: Date | null;
    createdAt: Date;
    syncedAt: Date;
}
export declare const FinancePaymentAttemptSchema: MongoSchema<FinancePaymentAttemptEntity, import("mongoose").Model<FinancePaymentAttemptEntity, any, any, any, import("mongoose").Document<unknown, any, FinancePaymentAttemptEntity, any, {}> & FinancePaymentAttemptEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinancePaymentAttemptEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinancePaymentAttemptEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<FinancePaymentAttemptEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;

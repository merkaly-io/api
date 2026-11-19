import { Schema as MongoSchema } from 'mongoose';
import { AbstractEntity } from "../../abstract.entity";
import { FinanceRefundOriginEnum, FinanceRefundStatusEnum } from './refund.enum';
import { FinancePaymentEntity } from '../payment/payment.entity';
import type { OrderPurchaseEntity } from "../../order/purchase/purchase.entity";
export interface FinanceRefundPixDetails {
    bankReference: string | null;
}
export type FinanceRefundGatewayDetails = FinanceRefundPixDetails | Record<string, unknown>;
export declare class FinanceRefundGatewayEntity {
    provider: string;
    reference?: string | null;
    status?: string | null;
    receiptUrl?: string | null;
    details?: FinanceRefundGatewayDetails | null;
    description?: string | null;
}
export declare const FinanceRefundGatewaySchema: MongoSchema<FinanceRefundGatewayEntity, import("mongoose").Model<FinanceRefundGatewayEntity, any, any, any, import("mongoose").Document<unknown, any, FinanceRefundGatewayEntity, any, {}> & FinanceRefundGatewayEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinanceRefundGatewayEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinanceRefundGatewayEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinanceRefundGatewayEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinanceRefundEntity extends AbstractEntity {
    payment: FinancePaymentEntity | string;
    purchase?: OrderPurchaseEntity | string | null;
    amount: number;
    isPartial: boolean;
    origin: FinanceRefundOriginEnum;
    status: FinanceRefundStatusEnum;
    gateway?: FinanceRefundGatewayEntity | null;
    refundedAt?: Date | null;
    error?: string | null;
}

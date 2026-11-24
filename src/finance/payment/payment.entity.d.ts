import { Schema as MongoSchema } from 'mongoose';
import { OrderSaleEntity } from "../../order/sale/sale.entity";
import { AbstractEntity } from "../../abstract.entity";
import { StatusEntity } from "../../status.plugin";
import { ITransitionable } from "../../transitionable.types";
import { FinancePaymentMethodEnum, FinancePaymentStatusEnum } from './payment.enum';
import type { FinanceDebtEntity } from '../debt/debt.entity';
import type { FinanceRefundEntity } from '../refund/refund.entity';
import type { PaymentChargeStatusEnum } from "../../integration/payment/charge.enum";
export interface FinancePaymentPixDetails {
    qrCode: string | null;
    qrImage: string | null;
}
export type FinancePaymentGatewayDetails = FinancePaymentPixDetails | Record<string, unknown>;
export declare class FinancePaymentGatewayEntity {
    provider: string;
    reference?: string | null;
    method: FinancePaymentMethodEnum;
    status: string;
    attempt: number;
    amount: number;
    details?: FinancePaymentGatewayDetails | null;
    expiresAt?: Date | null;
    syncedAt: Date;
}
export declare const FinancePaymentGatewaySchema: MongoSchema<FinancePaymentGatewayEntity, import("mongoose").Model<FinancePaymentGatewayEntity, any, any, any, import("mongoose").Document<unknown, any, FinancePaymentGatewayEntity, any, {}> & FinancePaymentGatewayEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinancePaymentGatewayEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinancePaymentGatewayEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinancePaymentGatewayEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export type FinancePaymentAttemptStatus = PaymentChargeStatusEnum | 'UNKNOWN';
export declare class FinancePaymentAttemptEntity {
    reference?: string | null;
    method: FinancePaymentMethodEnum;
    status: FinancePaymentAttemptStatus;
    rawStatus: string;
    amount: number;
    expiresAt?: Date | null;
    createdAt: Date;
    syncedAt: Date;
}
export declare const FinancePaymentAttemptSchema: MongoSchema<FinancePaymentAttemptEntity, import("mongoose").Model<FinancePaymentAttemptEntity, any, any, any, import("mongoose").Document<unknown, any, FinancePaymentAttemptEntity, any, {}> & FinancePaymentAttemptEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinancePaymentAttemptEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinancePaymentAttemptEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinancePaymentAttemptEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinancePaymentSplitEntity {
    percentage: number;
    status?: string | null;
    error?: string | null;
}
export declare const FinancePaymentSplitSchema: MongoSchema<FinancePaymentSplitEntity, import("mongoose").Model<FinancePaymentSplitEntity, any, any, any, import("mongoose").Document<unknown, any, FinancePaymentSplitEntity, any, {}> & FinancePaymentSplitEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinancePaymentSplitEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinancePaymentSplitEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinancePaymentSplitEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinancePaymentEntity extends AbstractEntity implements ITransitionable<FinancePaymentStatusEnum> {
    order: OrderSaleEntity;
    amount: number;
    fee: number;
    method?: FinancePaymentMethodEnum | null;
    gateway?: FinancePaymentGatewayEntity | null;
    attempts: FinancePaymentAttemptEntity[];
    split?: FinancePaymentSplitEntity | null;
    status: FinancePaymentStatusEnum;
    history: StatusEntity<FinancePaymentStatusEnum>[];
    readonly number: string;
    readonly refunds?: FinanceRefundEntity[];
    readonly refundFeeDebts?: FinanceDebtEntity[];
}

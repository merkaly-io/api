import { Schema as MongoSchema } from 'mongoose';
import { AbstractEntity } from '../../abstract.entity';
import { FinanceRefundOriginEnum, FinanceRefundStatusEnum } from './refund.enum';
import { FinancePaymentEntity } from '../payment/payment.entity';
export declare class FinanceRefundGatewayPixEntity {
    endToEndId?: string | null;
}
export declare const FinanceRefundGatewayPixSchema: MongoSchema<FinanceRefundGatewayPixEntity, import("mongoose").Model<FinanceRefundGatewayPixEntity, any, any, any, import("mongoose").Document<unknown, any, FinanceRefundGatewayPixEntity, any, {}> & FinanceRefundGatewayPixEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinanceRefundGatewayPixEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinanceRefundGatewayPixEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinanceRefundGatewayPixEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinanceRefundGatewayEntity {
    provider: string;
    reference?: string | null;
    status?: string | null;
    receiptUrl?: string | null;
    pix?: FinanceRefundGatewayPixEntity | null;
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
    amount: number;
    partial: boolean;
    origin: FinanceRefundOriginEnum;
    status: FinanceRefundStatusEnum;
    gateway?: FinanceRefundGatewayEntity | null;
    refundedAt?: Date | null;
    error?: string | null;
    at: Date;
}

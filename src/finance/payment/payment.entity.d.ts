import { Schema as MongoSchema } from 'mongoose';
import { PaymentChargeAccountEnum } from '../../integration/payment/charge.enum';
import { OrderPurchaseEntity } from '../../order/purchase/purchase.entity';
import { OrderSaleEntity } from '../../order/sale/sale.entity';
import { AbstractEntity } from '../../abstract.entity';
import { StatusEntity } from '../../status.plugin';
import { ITransitionable } from '../../transitionable.interface';
import { FinancePaymentMethodEnum, FinancePaymentStatusEnum, FinancePaymentTypeEnum } from './payment.enum';
import type { PaymentChargeStatusEnum } from '../../integration/payment/charge.enum';
export type OrderEntity = OrderSaleEntity | OrderPurchaseEntity;
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
export declare class FinancePaymentEntity extends AbstractEntity implements ITransitionable<FinancePaymentStatusEnum> {
    type: FinancePaymentTypeEnum;
    target: string;
    order: OrderEntity;
    amount: number;
    fee: number;
    method?: FinancePaymentMethodEnum | null;
    gateway?: FinancePaymentGatewayEntity | null;
    attempts?: FinancePaymentAttemptEntity[];
    status: FinancePaymentStatusEnum;
    history: StatusEntity<FinancePaymentStatusEnum>[];
    readonly number: string;
}
